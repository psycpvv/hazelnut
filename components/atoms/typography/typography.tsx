import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/utils/utils'

const typographyVariants = cva('', {
  variants: {
    variant: {
      default: '',
      h1: 'text-3xl md:text-5xl 2xl:text-[80px] leading-10 md:leading-[80px] 2xl:leading-[100px] font-bold',
      h2: 'text-[28px] font-nunito',
      h3: 'text-2xl font-nunito',
      h4: 'text-xl font-nunito',
      subtitle1: 'text-base/7 font-light',
      subtitle2: 'text-[15px]/7 font-light',
      text: 'text-xs/4 font-light',
    },
    textColor: {
      default: '',
      primary: 'text-primary',
      white: 'text-white',
    },
  },
  defaultVariants: {
    variant: 'default',
    textColor: 'default',
  },
})

export interface TypographyProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof typographyVariants> {}

const Typography = React.forwardRef<HTMLDivElement, TypographyProps>(
  ({ className, variant, textColor, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(typographyVariants({ variant, textColor, className }))}
        {...props}
      />
    )
  },
)
Typography.displayName = 'Typography'

export { Typography, typographyVariants }
