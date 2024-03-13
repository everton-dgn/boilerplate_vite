import type { ButtonProps } from './types'

export const Button = ({ label, ...props }: ButtonProps) => (
  <button
    className="flex size-fit cursor-pointer rounded-4 bg-tertiary px-20 py-8 text-14 font-500 text-white transition-colors ease-in-out center hover:bg-tertiary-hover"
    {...props}
  >
    {label}
  </button>
)
