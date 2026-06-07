import Link from 'next/link'
import styles from './style.module.css'

const NotFoundPage = () => {
  return (
    <div className={styles.content}>
      <section>
        <b>404</b>
        <p>Wrong page. Right direction.</p>
        <span>Explore our work, services and selected collaborations.</span>
        <footer className={styles.contentFooter}>
          <Link href='/'>Back to Home  →</Link>
          <Link href='/work'>View Work  →</Link>
        </footer>
      </section>
    </div>
  )
}

export default NotFoundPage
