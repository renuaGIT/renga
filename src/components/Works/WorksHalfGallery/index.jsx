import LazyVideo from '@/components/LazyVideo';
import styles from './style.module.css'
import Image from "next/image";

const WorksHalfGallery = ({ item , isReversed = false}) => {
  return (
    <div className={`${styles.gallery} ${isReversed ? styles["gallery--reversed"]: ''}`}>
      <span></span>
      {item.poster !== null ? (
        <LazyVideo src={item.src !== null ? item.src : null} poster={item.poster} />
      ) : (
        <Image src={item.src} width={758} height={800} alt="" />
      )}
    </div>
  );
};

export default WorksHalfGallery;
