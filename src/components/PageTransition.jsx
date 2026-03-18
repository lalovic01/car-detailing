import { motion } from 'framer-motion'

function PageTransition({ children }) {
  const MotionSection = motion.section

  return (
    <MotionSection
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      {children}
    </MotionSection>
  )
}

export default PageTransition
