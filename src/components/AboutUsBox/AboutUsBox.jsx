import styles from './style.module.scss'

const AboutUsBox = (props) => {
    const {img, title, text} = props;
  return (
    <div className={styles.section}>
        <img className={styles.img} src={img} alt="" />
        <h2 className={styles.title}>{title}<span className={styles.select}>+</span></h2>
        <h3 className={styles.text}>{text}</h3>
        
    </div>
  )
}

export default AboutUsBox