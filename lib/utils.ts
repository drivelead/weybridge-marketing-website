import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateUniqueId() {
  const baseChars = "0123456789abcdefghijklmnopqrstuvwxyz"; // Only numbers and lowercase letters
  const base = baseChars.length;

  // Convert number to a base string
  function toBase(num: number) {
    let result = "";
    do {
      result = baseChars[num % base] + result;
      num = Math.floor(num / base);
    } while (num > 0);
    return result;
  }

  // Add timestamp for uniqueness
  const timestampPart = toBase(Date.now());

  // Add random characters for extra randomness
  const randomPart = Array.from(
    { length: 16 },
    () => baseChars[Math.floor(Math.random() * base)]
  ).join("");

  return `${timestampPart}${randomPart}`;
}
