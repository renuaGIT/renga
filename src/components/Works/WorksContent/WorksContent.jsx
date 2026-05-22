import styles from  './style.module.css'

const WorksContent = ({children}) => {
  return (
    <div className={styles.content}>
      {children}
    </div>
  )
}

export default WorksContent
