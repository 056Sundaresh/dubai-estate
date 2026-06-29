"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollImageSequenceProps {
  frameCount?: number;
  imageFolder?: string;
  imagePrefix?: string;
  imageExtension?: string;
}

export default function ScrollImageSequence({
  frameCount = 240,
  imageFolder = "/images/ezgif-19887cbe859ac608-jpg",
  imagePrefix = "ezgif-frame-",
  imageExtension = ".jpg",
}: ScrollImageSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadCount = 0;

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const frameNumber = String(i).padStart(3, "0");
      img.src = `${imageFolder}/${imagePrefix}${frameNumber}${imageExtension}`;
      
      img.onload = () => {
        loadCount++;
        if (loadCount === frameCount) {
          setLoaded(true);
        }
      };
      // Simple fallback for error so it doesn't hang
      img.onerror = () => {
        loadCount++;
        if (loadCount === frameCount) {
          setLoaded(true);
        }
      }
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, [frameCount, imageFolder, imagePrefix, imageExtension]);

  // Handle scrolling logic
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate scroll progress within the container
      // The scrollable distance is container height minus window height
      const maxScroll = height - windowHeight;
      const scrollPosition = -top;
      
      let scrollFraction = scrollPosition / maxScroll;
      
      // Clamp between 0 and 1
      scrollFraction = Math.max(0, Math.min(1, scrollFraction));
      setProgress(scrollFraction);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial call
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Draw the current frame on the canvas
  useEffect(() => {
    if (!loaded || images.length === 0 || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    // Determine current frame index
    const frameIndex = Math.min(
      frameCount - 1,
      Math.floor(progress * frameCount)
    );
    const img = images[frameIndex];

    if (!img || !img.complete || img.naturalWidth === 0) return;

    // Draw the image onto the canvas, covering it smoothly
    const render = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Calculate aspect ratios to "object-fit: cover"
      const canvasRatio = canvas.width / canvas.height;
      const imgRatio = img.width / img.height;

      let drawWidth = canvas.width;
      let drawHeight = canvas.height;
      let offsetX = 0;
      let offsetY = 0;

      if (canvasRatio > imgRatio) {
        drawHeight = canvas.width / imgRatio;
        offsetY = (canvas.height - drawHeight) / 2;
      } else {
        drawWidth = canvas.height * imgRatio;
        offsetX = (canvas.width - drawWidth) / 2;
      }

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    requestAnimationFrame(render);
  }, [progress, loaded, images, frameCount]);

  // Add resize listener to redraw
  useEffect(() => {
    const handleResize = () => {
      if (loaded) {
          // Trigger a re-render by doing nothing, but the state stays same.
          // Force a tiny progress update or just rely on state. 
          // For perfection we could just redraw immediately, but resizing will happen fast anyway.
          setProgress(p => p);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [loaded]);

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: "400vh" }}>
      {/* Sticky canvas wrapper */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden bg-black flex items-center justify-center">
        {!loaded && (
          <div className="absolute inset-0 z-10 flex items-center justify-center text-white bg-black">
            <div className="text-xl font-light tracking-widest animate-pulse">
              LOADING VIRTUAL TOUR...
            </div>
          </div>
        )}
        
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover"
        />

        {/* Optional overlay gradient for better text readability if used as background */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none flex flex-col justify-end p-8 md:p-16">
          <div className="max-w-3xl opacity-0 transition-opacity duration-700" style={{ opacity: progress > 0.8 ? 1 : progress * 0.5 }}>
            <h2 className="text-4xl md:text-6xl font-semibold text-white mb-4">Discover the Estate</h2>
            <p className="text-lg md:text-xl text-white/80">Every detail designed for extraordinary living.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
