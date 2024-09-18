import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface LogoProps extends HTMLAttributes<HTMLDivElement> {
  color?: string
}

export function Logo({ color = "currentColor", className, ...props }: LogoProps) {
  return (
    <div className={twMerge("flex items-center gap-2 font-semibold", className)} {...props}>
      <svg
        className="w-[30px]"
        fill="none"
        viewBox="0 0 163 86"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M69.5001 52.5002C69.5003 73.8071 112.317 77.6941 125.671 73.8073C144.551 68.3121 155.913 49.9713 149.616 35.1263C143.319 20.2813 133 16.4999 115 16.5"
          stroke={color}
          strokeLinecap="round"
          strokeWidth="21"
        />
        <path
          d="M85.4997 30.5002C85.4997 12.4246 50.0487 8.4606 36.7276 12.4246C17.8942 18.029 6.68712 36.4351 13.1096 51.2432C19.532 66.0514 27.9997 69.5 47.4997 69.5001"
          stroke={color}
          strokeLinecap="round"
          strokeWidth="21"
        />
      </svg>
      <span className="text-lg">LinkMentor</span>
    </div>
  )
}