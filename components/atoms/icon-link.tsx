import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/utils/utils'

const iconLinkVariants = cva(
  'w-[50px] h-[50px] relative transition-colors duration-300 font-nunito flex justify-center items-center',
  {
    variants: {
      variant: {
        contained:
          'bg-[var(--button-color)] text-white hover:bg-[var(--button-hover-color)]',
        outlined:
          'border border-[var(--button-color)] text-[--button-color] hover:text-white hover:bg-[var(--button-color)]',
      },
      buttonColor: {
        default: 'var-button-primary-color',
        secondary: 'var-button-secondary-color',
      },
      effect: {
        default: '',
        pulse:
          'before:absolute before:content-empty before:left-0 before:top-0 before:h-full before:w-full before:-z-10 before:opacity-0 before:border-8 before:rounded-full before:border-solid before:border-white/20 before:animate-pulse-border-2 before:text-white before:box-border  after:absolute after:content-empty after:left-0 after:top-0 after:h-full after:w-full after:-z-10 after:opacity-0 after:border-8 after:rounded-full after:border-solid after:border-white/20 after:animate-pulse-border after:text-white after:box-border',
      },
      size: {
        default: 'rounded-full w-[50px] h-[50px] xl:w-[60px] xl:h-[60px]',
        small: 'rounded-full w-[50px] h-[50px] xl:w-[60px] xl:h-[60px]',
      },
    },
    defaultVariants: {
      variant: 'contained',
      buttonColor: 'default',
      size: 'default',
      effect: 'default',
    },
  },
)

export interface IconButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof iconLinkVariants> {}

const IconLink = React.forwardRef<HTMLAnchorElement, IconButtonProps>(
  ({ className, effect, buttonColor, variant, size, ...props }, ref) => {
    return (
      <a
        className={cn(
          iconLinkVariants({ effect, buttonColor, variant, size, className }),
        )}
        ref={ref}
        {...props}
      />
    )
  },
)

IconLink.displayName = 'IconLink'

export { IconLink, iconLinkVariants }
