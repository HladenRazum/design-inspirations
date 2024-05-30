import { motion } from 'framer-motion'

export default function RefreshIcon() {
  return (
    <motion.button
      whileHover={{
        scale: 1.1,
        rotate: 360,
      }}
      className='absolute right-5 top-5 w-10 h-10 border border-blue-600 text-blue-600 rounded-lg flex items-center justify-center focus:outline-blue-500 outline-1 focus:ring-0'
    >
      R
    </motion.button>
  )
}
