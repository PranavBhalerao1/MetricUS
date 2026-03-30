export type ConverterCategory = "length" | "mass" | "temperature" | "volume";

export interface ConverterUnit {
  id: string;
  label: string;
}

type LinearUnits = Record<string, number>;

const lengthUnits: LinearUnits = {
  mm: 0.001,
  cm: 0.01,
  m: 1,
  km: 1000,
  in: 0.0254,
  ft: 0.3048,
  yd: 0.9144,
  mi: 1609.344,
};

const massUnits: LinearUnits = {
  mg: 0.000001,
  g: 0.001,
  kg: 1,
  t: 1000,
  oz: 0.028349523125,
  lb: 0.45359237,
};

const volumeUnits: LinearUnits = {
  mL: 0.001,
  L: 1,
  tsp: 0.00492892159375,
  tbsp: 0.01478676478125,
  cup: 0.2365882365,
  pt: 0.473176473,
  qt: 0.946352946,
  gal: 3.785411784,
};

export const converterUnitOptions: Record<ConverterCategory, ConverterUnit[]> = {
  length: [
    { id: "mm", label: "Millimeter (mm)" },
    { id: "cm", label: "Centimeter (cm)" },
    { id: "m", label: "Meter (m)" },
    { id: "km", label: "Kilometer (km)" },
    { id: "in", label: "Inch (in)" },
    { id: "ft", label: "Foot (ft)" },
    { id: "yd", label: "Yard (yd)" },
    { id: "mi", label: "Mile (mi)" },
  ],
  mass: [
    { id: "mg", label: "Milligram (mg)" },
    { id: "g", label: "Gram (g)" },
    { id: "kg", label: "Kilogram (kg)" },
    { id: "t", label: "Metric Ton (t)" },
    { id: "oz", label: "Ounce (oz)" },
    { id: "lb", label: "Pound (lb)" },
  ],
  temperature: [
    { id: "C", label: "Celsius (°C)" },
    { id: "F", label: "Fahrenheit (°F)" },
    { id: "K", label: "Kelvin (K)" },
  ],
  volume: [
    { id: "mL", label: "Milliliter (mL)" },
    { id: "L", label: "Liter (L)" },
    { id: "tsp", label: "Teaspoon (tsp)" },
    { id: "tbsp", label: "Tablespoon (tbsp)" },
    { id: "cup", label: "Cup (cup)" },
    { id: "pt", label: "Pint (pt)" },
    { id: "qt", label: "Quart (qt)" },
    { id: "gal", label: "Gallon (gal)" },
  ],
};

function convertLinear(value: number, from: string, to: string, map: LinearUnits) {
  const fromFactor = map[from];
  const toFactor = map[to];

  if (!fromFactor || !toFactor) {
    throw new Error("Unsupported conversion unit.");
  }

  const baseValue = value * fromFactor;
  return baseValue / toFactor;
}

function toCelsius(value: number, from: string) {
  if (from === "C") return value;
  if (from === "F") return ((value - 32) * 5) / 9;
  if (from === "K") return value - 273.15;
  throw new Error("Unsupported temperature unit.");
}

function fromCelsius(value: number, to: string) {
  if (to === "C") return value;
  if (to === "F") return (value * 9) / 5 + 32;
  if (to === "K") return value + 273.15;
  throw new Error("Unsupported temperature unit.");
}

export function convertValue(
  category: ConverterCategory,
  value: number,
  fromUnit: string,
  toUnit: string,
): number {
  if (!Number.isFinite(value)) {
    throw new Error("Value must be a finite number.");
  }

  if (category === "temperature") {
    return fromCelsius(toCelsius(value, fromUnit), toUnit);
  }

  if (category === "length") {
    return convertLinear(value, fromUnit, toUnit, lengthUnits);
  }

  if (category === "mass") {
    return convertLinear(value, fromUnit, toUnit, massUnits);
  }

  return convertLinear(value, fromUnit, toUnit, volumeUnits);
}

export function formatConvertedValue(value: number) {
  if (Math.abs(value) >= 1000 || Math.abs(value) < 0.01) {
    return value.toExponential(4);
  }

  return value.toFixed(4).replace(/0+$/, "").replace(/\.$/, "");
}

