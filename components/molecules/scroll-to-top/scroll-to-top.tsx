'use client'
import useMedia from '@/hooks/useMedia'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  motion,
  useAnimationControls,
  useScroll,
  Variants,
} from 'framer-motion'
import { useEffect } from 'react'
const ScrollToTopContainerVariants: Variants = {
  hide: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
}

export default function ScrollToTopButton() {
  const { scrollYProgress } = useScroll()
  const { isLg } = useMedia()
  const controls = useAnimationControls()
  function scrollToTop() {
    if (typeof window === 'undefined') return
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  useEffect(() => {
    return scrollYProgress.on('change', latestValue => {
      if (latestValue > 0.1 && isLg) {
        controls.start('show')
      } else {
        controls.start('hide')
      }
    })
  })

  return (
    <motion.button
      // @ts-ignore
      className="fixed bottom-[3%] right-0 h-11 w-10 rounded-md bg-secondary lg:right-[2%]"
      variants={ScrollToTopContainerVariants}
      initial="hide"
      animate={controls}
      onClick={scrollToTop}
    >
      <FontAwesomeIcon icon={faArrowUp} width={25} className="text-white" />
    </motion.button>
  )
}
