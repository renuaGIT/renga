import LazyVideo from "@/components/LazyVideo";
import styles from "./style.module.css";
import Image from "next/image";

const WorksDualDifferentHeightGallery = ({ items, isReversed = false }) => {
  return (
    <div
      className={`${styles.gallery} ${isReversed ? styles["gallery--reversed"] : ""}`}
    >
      {items.map((item) => {
        const key = item.src !== "" ? item.src : item.poster
        return (

        <div key={key} className={styles.mediaWrapper}>
          {item.poster ? (
            <LazyVideo
              src={item.src !== null ? item.src : null}
              poster={item.poster}
            />
          ) : (
            <Image
              src={item.src}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
            />
          )}
        </div>

        )
      })}
    </div>
  );
};

export default WorksDualDifferentHeightGallery;
