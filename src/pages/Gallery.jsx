import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { galleryImages } from '../data/siteData'
import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'

function Gallery() {
  const MotionDiv = motion.div
  const [activeIndex, setActiveIndex] = useState(null)

  const activeImage = useMemo(() => {
    if (activeIndex === null) return null
    return galleryImages[activeIndex]
  }, [activeIndex])

  return (
    <PageTransition>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Portfolio</p>
            <h1>Real transformations, refined finishes</h1>
            <p>Browse before and after moments from correction, interior restoration, and coating jobs.</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container gallery-grid">
          {galleryImages.map((image, index) => (
            <Reveal key={image.src} delay={index * 0.04} className="gallery-card">
              <button className="gallery-button" onClick={() => setActiveIndex(index)}>
                <img src={image.src} alt={image.alt} loading="lazy" />
                <span>{image.tag}</span>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {activeImage && (
          <MotionDiv
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)}
          >
            <MotionDiv
              className="lightbox-panel"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button className="lightbox-close" onClick={() => setActiveIndex(null)} aria-label="Close image modal">
                <X size={20} />
              </button>
              <img src={activeImage.src} alt={activeImage.alt} loading="eager" />
              <p>{activeImage.alt}</p>
            </MotionDiv>
          </MotionDiv>
        )}
      </AnimatePresence>
    </PageTransition>
  )
}

export default Gallery
