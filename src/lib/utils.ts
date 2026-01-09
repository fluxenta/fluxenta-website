import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * The 'cn' utility merges tailwind classes safely.
 * This is the standard utility for elite Next.js projects.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}