import LazyVideo from "@/components/LazyVideo";
import styles from "./style.module.css";
import Image from "next/image";

const WorksDiagonalGallery = ({ items }) => {
  const leftCol = [items[0], items[2]];
  const rightCol = [items[1], items[3]];

  const renderMedia = (item, isTall) => {
    const ratio = isTall ? "758/850" : "758/580";
    return (
      <div className={styles.mediaWrapper} key={item.poster ? item.poster : item.src} style={{ aspectRatio: ratio }}>
        {item.poster ? (
          <LazyVideo src={item.src !== null ? item.src : null} poster={item.poster} className={styles.media} />
        ) : (
          <Image src={item.src} width={758} height={isTall ? 850 : 580} alt="" className={styles.media} />
        )}
      </div>
    );
  };

  return (
    <div className={styles.gallery}>
      <div className={styles.column}>{leftCol.map((item) => renderMedia(item, item === items[0]))}</div>
      <div className={styles.column}>{rightCol.map((item) => renderMedia(item, item === items[3]))}</div>
    </div>
  );
};

export default WorksDiagonalGallery;
