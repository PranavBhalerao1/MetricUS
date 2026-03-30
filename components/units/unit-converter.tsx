"use client";

import { ArrowRightLeft } from "lucide-react";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ConverterCategory,
  convertValue,
  converterUnitOptions,
  formatConvertedValue,
} from "@/lib/converter";

const categoryOptions: { label: string; value: ConverterCategory }[] = [
  { label: "Length", value: "length" },
  { label: "Mass", value: "mass" },
  { label: "Temperature", value: "temperature" },
  { label: "Volume", value: "volume" },
];

export function UnitConverter() {
  const [category, setCategory] = useState<ConverterCategory>("length");
  const [fromUnit, setFromUnit] = useState("m");
  const [toUnit, setToUnit] = useState("ft");
  const [inputValue, setInputValue] = useState("1");

  const availableUnits = converterUnitOptions[category];

  const conversionResult = useMemo(() => {
    const numericValue = Number(inputValue);
    if (!Number.isFinite(numericValue)) {
      return "Enter a valid number";
    }

    try {
      const converted = convertValue(category, numericValue, fromUnit, toUnit);
      return `${formatConvertedValue(converted)} ${toUnit}`;
    } catch {
      return "Select valid units";
    }
  }, [category, fromUnit, inputValue, toUnit]);

  function handleCategoryChange(nextCategory: ConverterCategory) {
    const nextUnits = converterUnitOptions[nextCategory];
    setCategory(nextCategory);
    setFromUnit(nextUnits[0].id);
    setToUnit(nextUnits[1]?.id ?? nextUnits[0].id);
  }

  function swapUnits() {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  }

  return (
    <Card className="border-border/70 bg-white/80 shadow-sm dark:bg-slate-900/50">
      <CardHeader>
        <CardTitle className="text-xl text-metric-deep dark:text-white">Live Unit Converter</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-2 sm:grid-cols-2">
          <label className="text-sm font-medium" htmlFor="converter-category">
            Category
          </label>
          <select
            id="converter-category"
            className="rounded-lg border border-input bg-background px-3 py-2 text-sm"
            value={category}
            onChange={(event) => handleCategoryChange(event.target.value as ConverterCategory)}
          >
            {categoryOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr]">
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="from-unit">
              From
            </label>
            <select
              id="from-unit"
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
              value={fromUnit}
              onChange={(event) => setFromUnit(event.target.value)}
            >
              {availableUnits.map((unit) => (
                <option key={unit.id} value={unit.id}>
                  {unit.label}
                </option>
              ))}
            </select>
            <input
              aria-label="Input value"
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              inputMode="decimal"
            />
          </div>

          <div className="flex items-end justify-center pb-1">
            <Button variant="outline" size="icon" aria-label="Swap units" onClick={swapUnits}>
              <ArrowRightLeft className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="to-unit">
              To
            </label>
            <select
              id="to-unit"
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
              value={toUnit}
              onChange={(event) => setToUnit(event.target.value)}
            >
              {availableUnits.map((unit) => (
                <option key={unit.id} value={unit.id}>
                  {unit.label}
                </option>
              ))}
            </select>
            <div className="rounded-lg border border-dashed border-metric-green/40 bg-metric-green/5 px-3 py-2 text-sm font-semibold text-metric-deep dark:text-white">
              {conversionResult}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

