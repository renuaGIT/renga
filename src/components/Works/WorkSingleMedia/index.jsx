import LazyVideo from '@/components/LazyVideo';
import styles from './style.module.css'
import Image from "next/image";

const WorkSingleMedia = ({ item }) => {
  return (
    <>
      {item.poster !== null ? (
        <LazyVideo src={item.src !== null ? item.src : null} poster={item.poster} className={styles.singleMedia} />
      ) : (
        <Image
          className={styles.singleMedia}
          src={item.src}
          alt=""
          width={1528}
          height={900}
        />
      )}
    </>
  );
};

export default WorkSingleMedia;
