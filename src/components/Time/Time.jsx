import styles from './style.module.scss'

const Time = () => {
  return (
    <p className={styles.text}><span className={styles.select}>5</span> ГОДИН <span className={styles.select}>10</span> ХВИЛИН <span className={styles.select}>12</span> СЕКУНД</p>
  )
}

export default Time