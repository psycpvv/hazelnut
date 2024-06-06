import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/utils/utils'

const buttonVariants = cva(
  'px-5 py-1.5 flex justify-center items-center min-w-24 h-[50px] transition-colors duration-300 font-nunito',
  {
    variants: {
      buttonColor: {
        default: 'var-button-primary-color',
        secondary: 'var-button-secondary-color',
      },
      variant: {
        contained:
          'bg-[var(--button-color)] text-white hover:bg-[var(--button-hover-color)] shadow-xl',
        outlined:
          'border border-[var(--button-color)] text-[--button-color] hover:text-white hover:bg-[var(--button-color)]',
      },
      size: {
        default: 'rounded-full text-sm/5',
      },
    },
    defaultVariants: {
      buttonColor: 'default',
      variant: 'contained',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, buttonColor, size, ...props }, ref) => {
    const Comp = 'button'
    return (
      <Comp
        className={cn(
          buttonVariants({ buttonColor, variant, size, className }),
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
