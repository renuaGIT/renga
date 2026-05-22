import LazyVideo from '../LazyVideo';
import styles from './style.module.css'

const CommonHero = ({title = null, descr, posterUrl, videoUrl = null}) => {

  console.log(videoUrl)
  return (
    <section className={styles.commonHero}>
      {title && <h1 className={styles.commonHero__title}>{title}</h1>}
      <p className={styles.commonHero__descr}>{descr}</p>
      <LazyVideo src={videoUrl !== null ? videoUrl : null} poster={posterUrl} className={styles.commonHero__video} />
    </section>
  )
}

export default CommonHero;
