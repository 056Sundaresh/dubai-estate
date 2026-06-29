import { Hero } from "@/components/home/Hero";
import { FeaturedProperties } from "@/components/home/FeaturedProperties";
import { PopularCommunities } from "@/components/home/PopularCommunities";
import { OffPlanProjects } from "@/components/home/OffPlanProjects";
import { LuxuryCollection } from "@/components/home/LuxuryCollection";
import { MortgageCalculator } from "@/components/home/MortgageCalculator";
import { MarketInsights } from "@/components/home/MarketInsights";
import { AgentDirectoryPreview } from "@/components/home/AgentDirectoryPreview";
import ScrollImageSequence from "@/components/ui/ScrollImageSequence";


export default function Home() {
  return (
    <>
      <Hero />
      <ScrollImageSequence />
      <FeaturedProperties />
      <OffPlanProjects />
      <LuxuryCollection />
      <PopularCommunities />
      <MortgageCalculator />
      <AgentDirectoryPreview />
      <MarketInsights />
    </>
  );
}
