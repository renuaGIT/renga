import Image from 'next/image';
import styles from './style.module.css'
import LazyVideo from '@/components/LazyVideo';

const WorksDoubleGallery = ({items}) => {
  return (
    <div
      className={`${styles.gallery}`}
    >
      {items.map((item) => (
        <div key={item.src} className={styles.mediaWrapper}>
          {item.poster !== null ? (
            <LazyVideo src={item.src !== null ? item.src : null} poster={item.poster}/>
          ) : (
            <Image src={item.src}  width={758} height={969} alt="" />
          )}
        </div>
      ))}
    </div>
  );
}

export default WorksDoubleGallery
