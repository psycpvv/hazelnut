'use client'

import 'animate.css/animate.min.css'
import 'react-toastify/dist/ReactToastify.css'

import { cssTransition, ToastContainer } from 'react-toastify'

export default function ToastProvider() {
  return (
    <ToastContainer
      icon={false}
      transition={cssTransition({
        enter: 'animate__animated animate__fadeInDown',
        exit: 'animate__animated animate__fadeOut',
      })}
    />
  )
}
