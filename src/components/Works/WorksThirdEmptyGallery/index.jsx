import Image from "next/image";
import styles from "./style.module.css";
import LazyVideo from "@/components/LazyVideo";

const WorksThirdEmptyGallery = ({item, isReversed = false }) => {
  return (
    <div
      className={`${styles.gallery} ${isReversed ? styles["gallery--reversed"] : ""}`}
    >
      {item.poster !== null ? (
        <LazyVideo src={item.src !== null ? item.src : null} poster={item.poster} className={styles.media} />
      ) : (
        <Image src={item.src} className={styles.media} width={758} height={800} alt="" />
      )}
      <span></span>
    </div>
  );
};

export default WorksThirdEmptyGallery;
