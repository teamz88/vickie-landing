"use client";

import React, { useState } from "react";
import { Input, Slider } from "@heroui/react";
import { TrendingUp, Phone } from "lucide-react";
import Image from "next/image";

export default function ROICalculator() {
  // Basic Business Metrics
  const [avgJobValue, setAvgJobValue] = useState(2500);
  
  // Revenue Leak Metrics
  const [missedCallsWeekly, setMissedCallsWeekly] = useState(25);
  
  // Conversion Rate (now user-configurable)
  const [conversionRatePercent, setConversionRatePercent] = useState(33);
  const conversionRate = conversionRatePercent / 100; // Convert percentage to decimal
  const monthsPerYear = 12;
  
  // Derived Calculations
  const missedCallsMonthly = missedCallsWeekly * 4.33; // Monthly missed calls
  
  // Core ROI Calculations
  const missedCallLoss_raw = missedCallsMonthly * conversionRate * avgJobValue;
  const missedCallLoss = Math.round(missedCallLoss_raw);
  
  // Total Loss Calculations
  const totalMonthlyLoss = missedCallLoss;
  const annualLoss = totalMonthlyLoss * monthsPerYear;
  
  // Recovery Potential
  const totalAnnualBenefit = annualLoss;

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 xl:px-8 py-8 xl:py-12 bg-white">
      {/* Header */}
      <div className="text-center mb-8 xl:mb-12">
        <h2 className="text-3xl sm:text-4xl xl:text-[62px] leading-tight sm:leading-tight xl:leading-[79px] font-bold text-[#19331B] mb-4 px-4">
         ROI Calculator
        </h2>
        <p className="text-lg xl:text-xl text-[#535353] mx-auto font-medium px-4 max-w-4xl">
          Comprehensive Revenue Loss Analysis & Recovery Assessment - Discover exactly how much revenue you're losing and your recovery potential.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-8">
        {/* Left Section - Comprehensive Input Form */}
        <div className="bg-green-50 p-6 xl:p-8 rounded-2xl space-y-6">
          <h3 className="text-2xl sm:text-3xl xl:text-[32px] leading-tight xl:leading-[36px] font-semibold text-[#19331B] mb-6">
            Revenue Metrics
          </h3>

          {/* Average Job Value */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-[18px] font-medium text-[#535353]">
                Average Job Value
              </label>
              <Input
                type="number"
                value={avgJobValue.toString()}
                onChange={(e) => setAvgJobValue(Number(e.target.value))}
                className="w-32"
                size="sm"
                startContent="$"
                classNames={{
                  input: "bg-green-100 text-center",
                  inputWrapper: "bg-green-100 border-green-300",
                }}
              />
            </div>
            <Slider
              size="md"
              step={100}
              minValue={200}
              maxValue={25000}
              value={avgJobValue}
              onChange={(value) => setAvgJobValue(Array.isArray(value) ? value[0] : value)}
              className="w-full"
              classNames={{
                track: "bg-green-200",
                filler: "bg-green-500",
                thumb: "bg-green-600 border-green-700",
              }}
            />
            <p className="text-[16px] text-[#535353] mt-2 font-medium">
              Average revenue per job/project
            </p>
          </div>

          {/* Missed Calls Weekly */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-[18px] font-medium text-[#535353]">
                Missed Calls Weekly
              </label>
              <Input
                type="number"
                value={missedCallsWeekly.toString()}
                onChange={(e) => setMissedCallsWeekly(Number(e.target.value))}
                className="w-20"
                size="sm"
                classNames={{
                  input: "bg-green-100 text-center",
                  inputWrapper: "bg-green-100 border-green-300",
                }}
              />
            </div>
            <Slider
              size="md"
              step={1}
              minValue={0}
              maxValue={100}
              value={missedCallsWeekly}
              onChange={(value) => setMissedCallsWeekly(Array.isArray(value) ? value[0] : value)}
              className="w-full"
              classNames={{
                track: "bg-green-200",
                filler: "bg-green-500",
                thumb: "bg-green-600 border-green-700",
              }}
            />
            <p className="text-[16px] text-[#535353] mt-2 font-medium">
              Number of missed calls per week
            </p>
          </div>
          
          {/* Conversion Rate */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-[18px] font-medium text-[#535353]">
                Conversion Rate
              </label>
              <Input
                type="number"
                value={conversionRatePercent.toString()}
                onChange={(e) => setConversionRatePercent(Number(e.target.value))}
                className="w-20"
                size="sm"
                endContent="%"
                classNames={{
                  input: "bg-green-100 text-center",
                  inputWrapper: "bg-green-100 border-green-300",
                }}
              />
            </div>
            <Slider
              size="md"
              step={1}
              minValue={1}
              maxValue={100}
              value={conversionRatePercent}
              onChange={(value) => setConversionRatePercent(Array.isArray(value) ? value[0] : value)}
              className="w-full"
              classNames={{
                track: "bg-green-200",
                filler: "bg-green-500",
                thumb: "bg-green-600 border-green-700",
              }}
            />
            <p className="text-[16px] text-[#535353] mt-2 font-medium">
              Percentage of calls that convert to jobs
            </p>
          </div>
        </div>

        {/* Right Section - Results Dashboard */}
        <div className="space-y-6">

          {/* Combined Revenue Loss & Recovery Potential Card */}
          <div className="bg-green-50 p-6 xl:p-8 rounded-2xl">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-8">
              {/* Monthly Loss Section */}
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border border-red-200">
                <div className="text-center">
                  <div className="bg-red-600 rounded-full p-3 w-fit mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 text-white rotate-180" />
                  </div>
                  <h4 className="text-lg xl:text-xl font-semibold text-red-900 mb-3">
                    Monthly Revenue Loss
                  </h4>
                  <div className="text-3xl xl:text-4xl font-bold text-red-600 mb-2">
                    ${Math.round(totalMonthlyLoss).toLocaleString()}
                  </div>
                  <p className="text-sm text-red-700 font-medium">
                    Lost due to missed calls & poor follow-up
                  </p>
                </div>
              </div>

              {/* Annual Recovery Section */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
                <div className="text-center">
                  <div className="bg-green-600 rounded-full p-3 py-4 w-fit shrink-0 mx-auto mb-4">
                    <Image
                      src="/icons/trend.svg"
                      alt="trend"
                      width={24}
                      height={16}
                      className="filter brightness-0 invert"
                    />
                  </div>
                  <h4 className="text-lg xl:text-xl font-semibold text-green-900 mb-3">
                    Annual Recovery Potential
                  </h4>
                  <div className="text-3xl xl:text-4xl font-bold text-green-600 mb-2">
                    ${totalAnnualBenefit.toLocaleString()}
                  </div>
                  <p className="text-sm text-green-700 font-medium">
                    With optimized processes
                  </p>
                </div>
              </div>
            </div>

            
          </div>

          {/* Detailed Recovery Opportunities */}
          <div className="bg-green-50 p-6 rounded-2xl">
            <h3 className="text-2xl xl:text-3xl font-semibold text-gray-900 mb-6 text-center">
              Recovery Opportunities Breakdown
            </h3>
            <div className="space-y-4">
              {/* Missed Call Recovery */}
              <div className="bg-white p-4 rounded-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-red-100 p-2 rounded-lg">
                      <Phone className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Missed Call Recovery</h4>
                      <p className="text-sm text-gray-600">
                        {missedCallsWeekly} missed calls × {conversionRatePercent}% conversion × ${avgJobValue}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-red-600">
                      -${Math.round(missedCallLoss).toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-500">per month</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
