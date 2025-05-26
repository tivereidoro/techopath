import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * cn - Combines class names and conditions using clsx and merges them with tailwind-merge.
 * @param  {...any} inputs - Class names or conditions to combine
 * @returns
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
