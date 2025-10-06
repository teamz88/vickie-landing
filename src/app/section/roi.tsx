"use client";

import React, { useState } from "react";
import { Input, Slider, Select, SelectItem, Button } from "@heroui/react";
import { TrendingUp, Phone, BarChart3, Clock, Target, DollarSign, MessageSquare, Star, AlertTriangle } from "lucide-react";
import Image from "next/image";

export default function ROICalculator() {
  // Basic Business Metrics
  const [industry, setIndustry] = useState("");
  const [annualRevenue, setAnnualRevenue] = useState(2000000);
  const [callVolumeWeekly, setCallVolumeWeekly] = useState(100);
  const [avgJobValue, setAvgJobValue] = useState(2500);
  
  // Revenue Leak Metrics
  const [missedCallRate, setMissedCallRate] = useState(25);
  const [responseTime, setResponseTime] = useState(60);
  const [estimateSpeed, setEstimateSpeed] = useState(2);
  const [followUpRate, setFollowUpRate] = useState(50);

  // Advanced ROI Calculation Constants (from get-revenue-back)
  const conversionRate = 0.33; // 33% baseline conversion rate
  const followUpConversionRate = 0.24; // 24% for follow-up calls
  const weeksPerYear = 52;
  const monthsPerYear = 12;
  
  // Derived Calculations
  const monthlyRevenue = annualRevenue / monthsPerYear;
  const leadsPerMonth = callVolumeWeekly * 4.33; // Average weeks per month
  const missedRate = missedCallRate / 100;
  const followUpRate_pct = followUpRate;
  const followUpRate_decimal = followUpRate / 100;
  
  // Core ROI Calculations (matching get-revenue-back logic)
  const missedCalls = leadsPerMonth * missedRate;
  const missedCallLoss_raw = missedCalls * conversionRate * avgJobValue;
  const missedCallLoss = Math.round(missedCallLoss_raw);
  
  // Follow-up Recovery Calculation
  const potentialFollowupRecovery_raw = leadsPerMonth * (1 - followUpRate_decimal) * followUpConversionRate * avgJobValue;
  const potentialFollowupRecovery = Math.round(potentialFollowupRecovery_raw);
  
  // Total Loss Calculations
  const totalMonthlyLoss = Math.round(missedCallLoss + potentialFollowupRecovery);
  const annualLoss = totalMonthlyLoss * monthsPerYear;
  
  // Revenue Efficiency Score Calculation
  const missedCallScore = Math.max(0, 100 - (missedRate * 100));
  const followUpScore = Math.max(0, followUpRate_pct);
  const revenueEfficiencyScore = Math.round((missedCallScore + followUpScore) / 2);
  
  // Additional Metrics
  const responseTimeScore = responseTime <= 15 ? 100 : responseTime <= 60 ? 80 : responseTime <= 240 ? 60 : 40;
  const estimateSpeedScore = estimateSpeed <= 1 ? 100 : estimateSpeed <= 2 ? 80 : estimateSpeed <= 5 ? 60 : 40;
  
  // Recovery Potential
  const totalAnnualBenefit = annualLoss;
  const monthlyRecoveryPotential = totalMonthlyLoss;

  // Score Labels
  const getScoreLabel = (score: number): string => {
    if (score >= 80) return "Excellent";
    if (score >= 60) return "Good"; 
    if (score >= 40) return "Needs Improvement";
    return "Critical Issues";
  };

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
            Business Profile & Revenue Metrics
          </h3>

          {/* Company Information */}
          <div className="space-y-4">
            <div>
              <label className="text-[18px] font-medium text-[#535353] mb-2 block">
                Industry
              </label>
              <Select
                 value={industry}
                 onSelectionChange={(value) => setIndustry(Array.from(value)[0] as string)}
                 placeholder="Select your industry"
                 className="w-full"
                 classNames={{
                   trigger: "bg-green-100 border-green-300",
                 }}
               >
                 <SelectItem key="hvac">🔥 HVAC (Heating/Cooling/Refrigeration)</SelectItem>
                 <SelectItem key="plumbing">🔧 Plumbing (Residential/Commercial)</SelectItem>
                 <SelectItem key="fire-safety">🚨 Fire Alarm & Safety Systems</SelectItem>
                 <SelectItem key="restoration">🏠 Restoration (Water/Fire/Mold Damage)</SelectItem>
                 <SelectItem key="cleaning">🧹 Cleaning Services</SelectItem>
                 <SelectItem key="moving">📦 Moving & Junk Removal</SelectItem>
               </Select>
            </div>
          </div>

          {/* Annual Revenue */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-[18px] font-medium text-[#535353]">
                Annual Revenue
              </label>
              <Input
                type="text"
                value={`$${(annualRevenue / 1000000).toFixed(1)}M`}
                readOnly
                className="w-24"
                size="sm"
                classNames={{
                  input: "bg-green-100 text-center",
                  inputWrapper: "bg-green-100 border-green-300",
                }}
              />
            </div>
            <Slider
              size="md"
              step={250000}
              minValue={500000}
              maxValue={20000000}
              value={annualRevenue}
              onChange={(value) => setAnnualRevenue(Array.isArray(value) ? value[0] : value)}
              className="w-full"
              classNames={{
                track: "bg-green-200",
                filler: "bg-green-500",
                thumb: "bg-green-600 border-green-700",
              }}
            />
            <p className="text-[16px] text-[#535353] mt-2 font-medium">
              Your total annual business revenue
            </p>
          </div>

          {/* Monthly Call Volume */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-[18px] font-medium text-[#535353]">
                Monthly Inbound Calls
              </label>
              <Input
                type="number"
                value={Math.round(leadsPerMonth).toString()}
                readOnly
                className="w-24"
                size="sm"
                classNames={{
                  input: "bg-green-100 text-center",
                  inputWrapper: "bg-green-100 border-green-300",
                }}
              />
            </div>
            <Slider
              size="md"
              step={10}
              minValue={40}
              maxValue={1000}
              value={callVolumeWeekly}
              onChange={(value) => setCallVolumeWeekly(Array.isArray(value) ? value[0] : value)}
              className="w-full"
              classNames={{
                track: "bg-green-200",
                filler: "bg-green-500",
                thumb: "bg-green-600 border-green-700",
              }}
            />
            <p className="text-[16px] text-[#535353] mt-2 font-medium">
              Weekly calls (leads, customers, vendors)
            </p>
          </div>

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

          {/* Revenue Leak Analysis */}
          <h4 className="text-xl font-semibold text-[#19331B] mt-8 mb-4">Revenue Leak Analysis</h4>

          {/* Missed Call Rate */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-[18px] font-medium text-[#535353]">
                Missed Call Rate
              </label>
              <Input
                type="number"
                value={missedCallRate.toString()}
                onChange={(e) => setMissedCallRate(Number(e.target.value))}
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
              minValue={0}
              maxValue={80}
              value={missedCallRate}
              onChange={(value) => setMissedCallRate(Array.isArray(value) ? value[0] : value)}
              className="w-full"
              classNames={{
                track: "bg-green-200",
                filler: "bg-green-500",
                thumb: "bg-green-600 border-green-700",
              }}
            />
            <p className="text-[16px] text-[#535353] mt-2 font-medium">
              Percentage of calls that go to voicemail
            </p>
          </div>

          {/* Follow-up Rate */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-[18px] font-medium text-[#535353]">
                Follow-up Rate
              </label>
              <Input
                type="number"
                value={followUpRate.toString()}
                onChange={(e) => setFollowUpRate(Number(e.target.value))}
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
              step={5}
              minValue={0}
              maxValue={100}
              value={followUpRate}
              onChange={(value) => setFollowUpRate(Array.isArray(value) ? value[0] : value)}
              className="w-full"
              classNames={{
                track: "bg-green-200",
                filler: "bg-green-500",
                thumb: "bg-green-600 border-green-700",
              }}
            />
            <p className="text-[16px] text-[#535353] mt-2 font-medium">
              Percentage of leads that get proper follow-up
            </p>
          </div>

          {/* Response Time */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-[18px] font-medium text-[#535353]">
                Response Time (minutes)
              </label>
              <Input
                type="number"
                value={responseTime.toString()}
                onChange={(e) => setResponseTime(Number(e.target.value))}
                className="w-24"
                size="sm"
                classNames={{
                  input: "bg-green-100 text-center",
                  inputWrapper: "bg-green-100 border-green-300",
                }}
              />
            </div>
            <Slider
              size="md"
              step={5}
              minValue={5}
              maxValue={480}
              value={responseTime}
              onChange={(value) => setResponseTime(Array.isArray(value) ? value[0] : value)}
              className="w-full"
              classNames={{
                track: "bg-green-200",
                filler: responseTime <= 60 ? "bg-green-500" : responseTime <= 240 ? "bg-yellow-500" : "bg-red-500",
                thumb: responseTime <= 60 ? "bg-green-600 border-green-700" : responseTime <= 240 ? "bg-yellow-600 border-yellow-700" : "bg-red-600 border-red-700",
              }}
              key={`response-time-${responseTime}`}
            />
            <p className="text-[16px] text-[#535353] mt-2 font-medium">
              Average time to respond to new leads
            </p>
          </div>
        </div>

        {/* Right Section - Results Dashboard */}
        <div className="space-y-6">

          {/* Combined Revenue Loss & Recovery Potential Card */}
          <div className="bg-green-50 p-6 xl:p-8 rounded-2xl">
            <div className="flex items-center justify-center mb-6">
              <div className="voice-bg rounded-full p-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h3 className="text-2xl xl:text-3xl font-semibold text-slate-900 text-center mb-8">
              Revenue Impact Analysis
            </h3>

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

            {/* Summary Stats */}
            <div className="mt-6 pt-6 border-t border-slate-200">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-slate-700">
                    {Math.round((totalMonthlyLoss / monthlyRevenue) * 100)}%
                  </div>
                  <div className="text-sm text-slate-600">Revenue at Risk</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-700">
                    {Math.round(missedCalls)}
                  </div>
                  <div className="text-sm text-slate-600">Missed Calls/Month</div>
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
                        {Math.round(missedCallRate)}% missed calls × {conversionRate * 100}% conversion
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

              {/* Follow-up Recovery */}
              <div className="bg-white p-4 rounded-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-orange-100 p-2 rounded-lg">
                      <MessageSquare className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Follow-up Recovery</h4>
                      <p className="text-sm text-gray-600">
                        {Math.round(100 - followUpRate)}% lack follow-up × {followUpConversionRate * 100}% conversion
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-orange-600">
                      -${Math.round(potentialFollowupRecovery).toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-500">per month</div>
                  </div>
                </div>
              </div>

              {/* Response Time Impact */}
              <div className="bg-white p-4 rounded-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${responseTime <= 60 ? 'bg-green-100' : responseTime <= 240 ? 'bg-yellow-100' : 'bg-red-100'}`}>
                      <Clock className={`w-5 h-5 ${responseTime <= 60 ? 'text-green-600' : responseTime <= 240 ? 'text-yellow-600' : 'text-red-600'}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Response Time Impact</h4>
                      <p className="text-sm text-gray-600">
                        {responseTime} min response time - {responseTime <= 15 ? 'Excellent' : responseTime <= 60 ? 'Good' : responseTime <= 240 ? 'Slow' : 'Critical'}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-lg font-bold ${responseTime <= 60 ? 'text-green-600' : responseTime <= 240 ? 'text-yellow-600' : 'text-red-600'}`}>
                      {responseTimeScore}%
                    </div>
                    <div className="text-sm text-gray-500">efficiency</div>
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
