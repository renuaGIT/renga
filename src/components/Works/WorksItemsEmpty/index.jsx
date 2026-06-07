import styles from './style.module.css'

const WorksItemsEmpty = () => {
  return (
    <div className={styles.emptyContainer}>
      <div className={styles.iconWrapper}>
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
        </svg>
      </div>
      <h3 className={styles.title}>Coming soon</h3>
      <p className={styles.description}>
        We are constantly working on new cases. Check back later or try selecting another category.
      </p>
    </div>
  );
}

export default WorksItemsEmpty
