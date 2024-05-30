import { motion } from 'framer-motion'

export default function List() {
  const list = { hidden: { opacity: 0 } }
  const item = { hidden: { x: -10, opacity: 0 } }

  return (
    <motion.ul>
      <motion.li>Item ONE</motion.li>
      <motion.li>Item TWO</motion.li>
      <motion.li>Item THREE</motion.li>
    </motion.ul>
  )
}
