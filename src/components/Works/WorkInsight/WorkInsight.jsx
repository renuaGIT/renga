import styles from './style.module.css'

const WorkInsight = ({title, descr, isReversed = false}) => {
  return (
    <div className={`${styles.WorkInsight} ${isReversed ? styles["WorkInsight--reversed"] : ""}`}>
      <span></span>
      <section className={styles.WorkInsight__section}>
        <h2 className={styles.WorkInsight__title}>
          {title}
        </h2>
        <p className={styles.WorkInsight__descr}>
          {descr}
        </p>
      </section>
    </div>
  );
};

export default WorkInsight;
