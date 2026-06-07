import styles from "./style.module.css";
import LazyVideo from "@/components/LazyVideo";
import Image from "next/image";

const WorksDoubleGalleryAutoHeight = ({ items, isReversed = false }) => {
  return (
    <div
      className={`${styles.gallery} ${isReversed ? styles["gallery--reversed"] : ""}`}
    >
      {items.map((item) => {
        const key = item.src !== "" ? item.src : item.poster
        return (
          <div key={key} className={styles.mediaWrapper}>
            {item.poster !== null ? (
              <LazyVideo
                src={item.src !== null ? item.src : null}
                poster={item.poster}
              />
            ) : (
              <Image src={item.src} width={758} height={969} alt="" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default WorksDoubleGalleryAutoHeight;
