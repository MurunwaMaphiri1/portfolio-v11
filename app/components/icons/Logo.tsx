'use client'
import * as React from 'react'
import { motion } from 'framer-motion'
import { SVGProps } from 'react'

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    href='/'
    viewBox="0 0 400 250"
    {...props}
  >
    <motion.path
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      d="M30 200 L60 100 L90 200 L120 100 L150 200 M180 200 L210 100 L240 200 L270 100 L300 200"
      stroke="white"
      fill="none"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default Logo
