import { motion } from 'framer-motion'

function Reveal({ children, delay = 0, className = '' }) {
  const MotionDiv = motion.div

  return (
    <MotionDiv
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
    >
      {children}
    </MotionDiv>
  )
}

export default Reveal
