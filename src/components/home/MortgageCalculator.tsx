"use client"

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export function MortgageCalculator() {
  const [propertyValue, setPropertyValue] = useState<number>(2000000);
  const [downPayment, setDownPayment] = useState<number>(400000);
  const [interestRate, setInterestRate] = useState<number>(4.5);
  const [loanTerm, setLoanTerm] = useState<number>(25);

  const principal = propertyValue - downPayment;
  const monthlyInterestRate = interestRate / 100 / 12;
  const numberOfPayments = loanTerm * 12;
  
  const monthlyPayment = principal * 
    (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / 
    (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Mortgage Calculator</h2>
            <p className="text-gray-600">Estimate your monthly mortgage payments and explore financing options.</p>
          </div>

          <Card className="shadow-lg border-0 bg-surface">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <CardContent className="p-8 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Property Value (AED)</label>
                  <Input type="number" value={propertyValue} onChange={e => setPropertyValue(Number(e.target.value))} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Down Payment (AED)</label>
                  <Input type="number" value={downPayment} onChange={e => setDownPayment(Number(e.target.value))} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Interest Rate (%)</label>
                  <Input type="number" step="0.1" value={interestRate} onChange={e => setInterestRate(Number(e.target.value))} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Loan Term (Years)</label>
                  <Input type="number" value={loanTerm} onChange={e => setLoanTerm(Number(e.target.value))} />
                </div>
              </CardContent>

              <div className="bg-primary p-8 text-white flex flex-col justify-center rounded-r-xl md:rounded-l-none rounded-b-xl">
                <h3 className="text-xl font-semibold mb-6 opacity-90">Payment Breakdown</h3>
                <div className="mb-8">
                  <p className="text-sm opacity-80 mb-1">Estimated Monthly Payment</p>
                  <p className="text-5xl font-bold">AED {monthlyPayment ? Math.round(monthlyPayment).toLocaleString() : 0}</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between border-b border-white/20 pb-2">
                    <span className="opacity-80">Principal Amount</span>
                    <span className="font-semibold">AED {principal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/20 pb-2">
                    <span className="opacity-80">Total Interest</span>
                    <span className="font-semibold">AED {monthlyPayment ? Math.round((monthlyPayment * numberOfPayments) - principal).toLocaleString() : 0}</span>
                  </div>
                </div>

                <Button className="w-full bg-white text-primary hover:bg-gray-100 font-bold">Get Pre-Approved</Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
