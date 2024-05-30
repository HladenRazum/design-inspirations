import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'

import img1 from '../../../public/images/1.jpg'
import img2 from '../../../public/images/IMG-7e580ff1961b324543556dc1d81ec92d-V.jpg'
import img3 from '../../../public/images/bg1.jpg'
import img4 from '../../../public/images/img1-horizontal.jpg'
import img5 from '../../../public/images/img1.jpg'

import classnames from './styles.module.css'

export default function Parallax() {
  const container = useRef(null)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4])

  return (
    <>
      <div className="h-[50vh]"></div>
      <div className={classnames.container} ref={container}>
        <div className={classnames.sticky}>
          <div className={classnames.el}>
            <motion.div
              style={{ scale: scale4 }}
              className={classnames.imgContainer}
            >
              <img src={img1} className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="h-[50vh]"></div>
    </>
  )
}
