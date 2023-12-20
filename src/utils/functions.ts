import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(...inputs))
}

export const stopPropagation = (event: React.MouseEvent) => {
  event.stopPropagation()
}
