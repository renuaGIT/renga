import LazyVideo from '@/components/LazyVideo'
import styles from './style.module.css'
import Image from 'next/image'

const WorksThirdSmallGallery = ({items, isReversed = false}) => {
  return (
    <div
      className={`${styles.gallery} ${isReversed ? styles["gallery--reversed"] : ""}`}
    >
      {items.map((item, index) => (
        <div key={index} className={styles.mediaWrapper}>
          {item.poster !== null ? (
            <LazyVideo src={item.src !== null ? item.src : null} poster={item.poster} />
          ) : (
            <Image src={item.src} width={988} height={754} alt="" />
          )}
        </div>
      ))}
    </div>
  )
}

export default WorksThirdSmallGallery
