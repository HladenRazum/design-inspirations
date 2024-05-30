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
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5])
  const scale7 = useTransform(scrollYProgress, [0, 1], [1, 7])
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9])

  const pictures = [
    {
      src: img1,
      scale: scale4,
    },
    {
      src: img2,
      scale: scale5,
    },
    {
      src: img3,
      scale: scale7,
    },
    {
      src: img4,
      scale: scale9,
    },
    {
      src: img5,
      scale: scale5,
    },
  ]

  return (
    <>
      <div className='h-[50vh]'></div>
      <div className={classnames.container} ref={container}>
        <div className={classnames.sticky}>
          {pictures.map(({ src, scale }, i) => (
            <motion.div style={{ scale }} key={i} className={classnames.el}>
              <div className={classnames.imgContainer}>
                <img src={src} className='w-full h-full object-cover' />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className='h-[50vh]'></div>
    </>
  )
}
