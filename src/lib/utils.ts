import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// py-2 px-2 -> p-2
// optimizes the classnames that we pass it for better readibility