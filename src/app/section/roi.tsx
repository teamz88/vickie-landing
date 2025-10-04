"use client";

import React, { useState } from "react";
import { Input, Slider, Select, SelectItem, Button } from "@heroui/react";
import { TrendingUp, Phone, BarChart3 } from "lucide-react";
import Image from "next/image";

export default function ROICalculator() {
  const [callsPerWeek, setCallsPerWeek] = useState(25);
  const [avgDealValue, setAvgDealValue] = useState(200);
  const [currentAnswerRate, setCurrentAnswerRate] = useState(38);
  const [businessHoursPerDay, setBusinessHoursPerDay] = useState(6.5);
  const [workDaysPerWeek, setWorkDaysPerWeek] = useState(5);

  // Constants
  const conversionRate = 0.33; // 33%
  const weeksPerYear = 52;

  // Calculations
  const missedCallsPerWeek = callsPerWeek * (1 - currentAnswerRate / 100);
  const missedCallsPerYear = missedCallsPerWeek * weeksPerYear;
  const revenueRecoveryPerCall = avgDealValue * conversionRate;
  const monthlyRecoveryPotential =
    (missedCallsPerWeek * revenueRecoveryPerCall * 52) / 12;
  const totalAnnualBenefit = missedCallsPerYear * revenueRecoveryPerCall;
  const revenueRecovery = totalAnnualBenefit * 0.05; // 5% of total potential

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 xl:px-8 py-8 xl:py-12 bg-white">
      {/* Header */}
      <div className="text-center mb-8 xl:mb-12">
        <h2 className="text-3xl sm:text-4xl xl:text-[62px] leading-tight sm:leading-tight xl:leading-[79px] font-bold text-[#19331B] mb-4 px-4">
          ROI Calculator
        </h2>
        <p className="text-lg xl:text-xl text-[#535353] mx-auto font-medium px-4 max-w-4xl">
          Discover How Much Revenue You're Losing To Missed Calls And See The
          Potential Return On Investment With Vickie Voice.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-8">
        {/* Left Section - Input Form */}
        <div className="bg-green-50 p-6 xl:p-8 rounded-2xl">
          <h3 className="text-2xl sm:text-3xl xl:text-[40px] leading-tight xl:leading-[44px] font-semibold text-[#19331B] mb-6">
            Fill In Your Business Metrics
          </h3>

          <div className="space-y-6 xl:space-y-8">
            {/* Calls per week */}
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-2">
                <label
                  htmlFor="calls-per-week"
                  className="text-base xl:text-[18px] font-medium text-gray-700"
                >
                  Calls per week
                </label>
                <Input
                  id="calls-per-week"
                  type="number"
                  value={callsPerWeek.toString()}
                  onChange={(e) => setCallsPerWeek(Number(e.target.value))}
                  className="w-full sm:w-20"
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
                minValue={1}
                maxValue={200}
                value={callsPerWeek}
                onChange={(value) =>
                  setCallsPerWeek(Array.isArray(value) ? value[0] : value)
                }
                className="w-full"
                aria-label="Calls per week slider"
                classNames={{
                  track: "bg-green-200",
                  filler: "bg-green-500",
                  thumb: "bg-green-600 border-green-700",
                }}
              />
              <p className="text-[18px] text-[#535353] mb-3 font-medium">
                Average number of incoming calls your business receives weekly
              </p>
            </div>

            {/* Average deal value */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label
                  htmlFor="avg-deal-value"
                  className="text-[18px] font-medium text-[#535353]"
                >
                  Average deal value
                </label>
                <Input
                  id="avg-deal-value"
                  type="number"
                  value={avgDealValue.toString()}
                  onChange={(e) => setAvgDealValue(Number(e.target.value))}
                  className="w-24"
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
                step={10}
                minValue={50}
                maxValue={5000}
                value={avgDealValue}
                onChange={(value) =>
                  setAvgDealValue(Array.isArray(value) ? value[0] : value)
                }
                className="w-full"
                aria-label="Average deal value slider"
                classNames={{
                  track: "bg-green-200",
                  filler: "bg-green-500",
                  thumb: "bg-green-600 border-green-700",
                }}
              />
              <p className="text-[18px] text-[#535353] mb-3 font-medium">
                Average revenue per customer/project
              </p>
            </div>

            {/* Current answer rate */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label
                  htmlFor="answer-rate"
                  className="text-[18px] font-medium text-[#535353]"
                >
                  Current answer rate
                </label>
                <Select
                  id="answer-rate"
                  size="sm"
                  selectedKeys={new Set([currentAnswerRate.toString()])}
                  onSelectionChange={(keys) => {
                    const value = Array.from(keys)[0] as string;
                    setCurrentAnswerRate(Number(value));
                  }}
                  className="w-20"
                  classNames={{
                    trigger: "bg-green-100 border-green-300 min-h-8",
                    value: "text-center text-gray-900 font-medium",
                    selectorIcon: "text-gray-600",
                  }}
                  aria-label="Current answer rate"
                  disallowEmptySelection
                  renderValue={(items) => {
                    return items.map((item) => (
                      <span key={item.key}>{item.textValue}</span>
                    ));
                  }}
                >
                  {[20, 25, 30, 35, 38, 40, 45, 50, 55, 60, 65, 70, 75, 80].map(
                    (rate) => (
                      <SelectItem key={rate.toString()} textValue={`${rate}%`}>
                        {rate}%
                      </SelectItem>
                    ),
                  )}
                </Select>
              </div>

              <Slider
                size="md"
                step={1}
                minValue={10}
                maxValue={90}
                value={currentAnswerRate}
                onChange={(value) =>
                  setCurrentAnswerRate(Array.isArray(value) ? value[0] : value)
                }
                className="w-full"
                aria-label="Current answer rate slider"
                classNames={{
                  track: "bg-green-200",
                  filler: "bg-green-500",
                  thumb: "bg-green-600 border-green-700",
                }}
              />
              <p className="text-[18px] text-[#535353] mb-3 font-medium">
                Percentage of calls your team currently answers
              </p>
            </div>

            {/* Business hours per day */}
            {/* <div>
              <div className="flex justify-between items-center mb-2">
                <label
                  htmlFor="business-hours"
                  className="text-[18px] font-medium text-[#535353]"
                >
                  Business hours per day
                </label>
                <Select
                  id="business-hours"
                  size="sm"
                  selectedKeys={new Set([businessHoursPerDay.toString()])}
                  onSelectionChange={(keys) => {
                    const value = Array.from(keys)[0] as string;
                    setBusinessHoursPerDay(Number(value));
                  }}
                  className="w-20"
                  classNames={{
                    trigger: "bg-green-100 border-green-300 min-h-8",
                    value: "text-center text-gray-900 font-medium",
                    selectorIcon: "text-gray-600",
                  }}
                  aria-label="Business hours per day"
                  disallowEmptySelection
                  renderValue={(items) => {
                    return items.map((item) => (
                      <span key={item.key}>{item.textValue}</span>
                    ));
                  }}
                >
                  {[
                    4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5,
                    11, 11.5, 12,
                  ].map((hours) => (
                    <SelectItem
                      key={hours.toString()}
                      textValue={hours.toString()}
                    >
                      {hours}
                    </SelectItem>
                  ))}
                </Select>
              </div>

              <Slider
                size="md"
                step={0.5}
                minValue={4}
                maxValue={12}
                value={businessHoursPerDay}
                onChange={(value) =>
                  setBusinessHoursPerDay(
                    Array.isArray(value) ? value[0] : value,
                  )
                }
                className="w-full"
                aria-label="Business hours per day slider"
                classNames={{
                  track: "bg-green-200",
                  filler: "bg-green-500",
                  thumb: "bg-green-600 border-green-700",
                }}
              />
              <p className="text-[18px] text-[#535353] mb-3 font-medium">
                Hours per day your business is officially open
              </p>
            </div> */}

            {/* Work days per week */}
            {/* <div>
              <div className="flex justify-between items-center mb-2">
                <label
                  htmlFor="work-days"
                  className="text-[18px] font-medium text-[#535353]"
                >
                  Work days per week
                </label>
                <Input
                  id="work-days"
                  type="number"
                  value={workDaysPerWeek.toString()}
                  onChange={(e) => setWorkDaysPerWeek(Number(e.target.value))}
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
                minValue={1}
                maxValue={7}
                value={workDaysPerWeek}
                onChange={(value) =>
                  setWorkDaysPerWeek(Array.isArray(value) ? value[0] : value)
                }
                className="w-full"
                aria-label="Work days per week slider"
                classNames={{
                  track: "bg-green-200",
                  filler: "bg-green-500",
                  thumb: "bg-green-600 border-green-700",
                }}
              />
              <p className="text-[18px] text-[#535353] mb-3 font-medium">
                Days per year your business operates
              </p>
            </div> */}
          </div>
        </div>

        {/* Right Section - Results Cards */}
        <div className="space-y-6">
          {/* Total Annual Benefit Card */}
          <div className="bg-green-50 p-6 h-full grid items-center justify-center rounded-2xl">
            <div className="flex flex-col gap-[30px] items-center mb">
              <div className="voice-bg rounded-[10px] p-3 py-5">
                <Image
                  src="/icons/trend.svg"
                  alt="trend"
                  width={50}
                  height={33}
                />
              </div>
              <h3 className="text-[40px] font-semibold text-[#19331B] leading-[44px]">
                Total Annual Benefit
              </h3>
            </div>
            <div className="flex items-center justify-center w-full mt-8">
              <div className="bg-green-700 text-center text-white rounded-[15px] font-semibold text-[36px] leading-[44px] p-[26px] mb-3 w-[330px]">
                ${totalAnnualBenefit.toLocaleString()}
                <p className="text-[18px] text-white font-medium">
                  Revenue recovery potential
                </p>
              </div>
            </div>
          </div>

          {/* Revenue Recovery Card */}
          {/* <div className="bg-green-50 p-6 rounded-2xl">
            <div className="flex flex-col xl:flex-row items-center gap-[18px] justify-center xl:justify-between">
              <div className="flex flex-col xl:flex-row items-center gap-[18px]">
                <div className="voice-bg rounded-[10px] p-3">
                  <Image
                    src="/icons/cash.svg"
                    alt="trend"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="text-center xl:text-left">
                  <h3 className="text-[40px] font-semibold text-[#19331B] leading-[44px]">
                    Revenue Recovery
                  </h3>
                  <p className="text-sm text-gray-600">
                    Annual potential with agent
                  </p>
                </div>
              </div>
              <div className="text-3xl font-semibold text-green-800">
                ${revenueRecovery.toLocaleString()}
              </div>
            </div>
          </div> */}

          {/* Quick Impact Stats Card */}
          {/* <div className="bg-green-50 p-6 rounded-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <div className="flex items-center mb-4">
                  <h3 className="text-[40px] font-semibold text-[#19331B] leading-[44px]">
                    Quick Impact Stats
                  </h3>
                </div>
                <div className="space-y-3">
                  <p className="text-xl font-semibold text-gray-500 flex items-center justify-between">
                    Missed calls per week:
                    <span className="font-semibold text-3xl text-[#19331B]">
                      {Math.round(missedCallsPerWeek)}
                    </span>
                  </p>
                  <div className="w-full h-[1px] bg-green-700"></div>
                  <p className="text-xl font-semibold text-gray-500 flex items-center justify-between">
                    Missed calls per year:
                    <span className="font-semibold text-3xl text-[#19331B]">
                      {Math.round(missedCallsPerYear)}
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center w-[230px] mt-5 xl:mt-0">
                <div className="bg-green-700 text-center text-white rounded-[15px] font-semibold text-[36px] leading-[44px] p-[26px] w-[230px]">
                  <p className="text-[18px] text-white font-medium leading-[22px] mb-3">
                    Monthly recovery potential
                  </p>
                  ${Math.round(monthlyRecoveryPotential).toLocaleString()}
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
