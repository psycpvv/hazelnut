// src/types/react-faq-component.d.ts

declare module 'react-faq-component' {
  interface FaqDataRow {
    title: string
    content: string | JSX.Element
  }

  interface FaqData {
    title: string | JSX.Element
    rows: FaqDataRow[]
  }

  interface FaqStyles {
    bgColor?: string
    titleTextColor?: string
    rowTitleColor?: string
    rowContentColor?: string
    arrowColor?: string
    rowContentPaddingTop?: string
    rowContentPaddingBottom?: string
    rowContentPaddingLeft?: string
    rowContentPaddingRight?: string
    transitionDuration?: string
    transitionTimingFunction?: string
    rowContentTextSize?: string
    arrowPadding?: string
    rowTitleTextSize?: string
    rowTitlePaddingTop?: string
    rowTitlePaddingBottom?: string
    rowTitlePaddingLeft?: string
    rowTitlePaddingRight?: string
  }

  interface FaqConfig {
    animate?: boolean
    arrowIcon?: string | JSX.Element
    tabFocus?: boolean
    openOnload?: number
    expandIcon?: string | JSX.Element
    collapseIcon?: string | JSX.Element
  }

  interface FaqProps {
    data: FaqData
    styles?: FaqStyles
    config?: FaqConfig
    getRowOptions?: any
  }

  const Faq: React.FC<FaqProps>

  export default Faq
}
