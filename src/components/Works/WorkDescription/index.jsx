import styles from './style.module.css'

const WorkDescription = ({data}) => {
  return (
    <section className={styles.WorkDescription}>
      <h2 className={styles.WorkDescriptionTitle}>Project information for {data.hiddenTitle}</h2>
      <div className={styles.WorkDescriptionInfo}>
        {
          data.listsData.map((item) => (
            <div key={item.label}>
              <b>{item.label}</b>
              <ul>
                {
                  item.list.map((data) => <li key={data}>{data}</li>)
                }
              </ul>
            </div>
          ))
        }
      </div>
      <ul className={styles.WorkDescriptionTexts}>
        {
          data.textData.map((item, index) => <li key={index}>{item}</li>)
        }
      </ul>
    </section>
  );
};

export default WorkDescription;
