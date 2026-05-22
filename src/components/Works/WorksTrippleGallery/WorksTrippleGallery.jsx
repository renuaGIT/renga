import LazyVideo from "@/components/LazyVideo";
import styles from "./style.module.css";
import Image from "next/image";

function WorksTrippleGallery({ items, isReversed = false }) {
  return (
    <div
      className={`${styles.gallery} ${isReversed ? styles["gallery--reversed"] : ""}`}
    >
      {items.map((item, index) => (
        <div key={index} className={styles.mediaWrapper}>
          {item.poster !== null ? (
            <LazyVideo src={item.src !== null ? item.src : null} poster={item.poster} />
          ) : (
            <Image src={item.src} width={758} height={900} alt="" />
          )}
        </div>
      ))}
    </div>
  );
}

export default WorksTrippleGallery;
