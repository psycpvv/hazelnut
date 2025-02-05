import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/utils/utils'

const linkButtonVariants = cva(
  'flex justify-center items-center transition-colors duration-300 font-nunito',
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
        default:
          'px-5 xl:px-6 rounded-full text-sm/5 xl:text-base min-w-32 sm:min-w-40 h-[50px] xl:h-[60px]',
        small:
          'px-5 xl:px-6 rounded-full text-sm/5 xl:text-base min-w-32 sm:min-w-[120px] h-[50px]',
      },
    },
    defaultVariants: {
      buttonColor: 'default',
      variant: 'contained',
      size: 'default',
    },
  },
)

export interface LinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkButtonVariants> {}

const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ className, variant, buttonColor, size, ...props }, ref) => {
    return (
      <a
        className={cn(
          linkButtonVariants({ buttonColor, variant, size, className }),
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
LinkButton.displayName = 'Button'

export { LinkButton, linkButtonVariants }
