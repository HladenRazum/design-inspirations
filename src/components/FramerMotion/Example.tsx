import { AnimatePresence, AnimationProps, motion } from 'framer-motion'
import RefreshIcon from './RefreshIcon'
import { useRef, useState } from 'react'

export default function Example() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='h-screen w-full bg-neutral-900 overflow-x-hidden'>
      <motion.button
        whileTap={{
          scale: 1.05,
        }}
        className='p-10 border bg-neutral-500'
        onClick={() => setIsOpen(!isOpen)}
      >
        REMOVE ELEMENT
      </motion.button>

      <AnimatePresence>
        {!isOpen && (
          <motion.p
            initial={{
              opacity: 0,
              x: -1000,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: -1000,
            }}
            className='p-5 bg-neutral-200 my-20 py-20'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            dicta, culpa voluptatum expedita aliquam quis autem libero sed illo
            rem.
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}
