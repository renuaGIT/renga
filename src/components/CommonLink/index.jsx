import Link from "next/link";
import styles from './style.module.css';
import FollowCursor from "../FollowCursor";

const CommonLink = ({ children, url }) => {
  const isDisabled = !url || url === "";

  if (isDisabled) {
    return (
      <span className={`${styles.link} ${styles.disabled}`}>
        {children}
        <FollowCursor>Coming Soon</FollowCursor>
      </span>
    );
  }

  return (
    <Link href={url} scroll={true} className={styles.link}>
      {children}
    </Link>
  );
};

export default CommonLink;
