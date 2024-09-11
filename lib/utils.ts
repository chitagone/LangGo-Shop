import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "LAK",
  currencyDisplay: "narrowSymbol", // Use "narrowSymbol" to display a symbol if supported
});

// Custom formatting function to append the symbol if not shown correctly
export function formatToKip(amount: number): string {
  const formattedAmount = formatter.format(amount);
  // Check if the symbol is missing and append it manually if necessary
  return formattedAmount.includes("LAK")
    ? formattedAmount.replace("LAK", "₭")
    : formattedAmount;
}
