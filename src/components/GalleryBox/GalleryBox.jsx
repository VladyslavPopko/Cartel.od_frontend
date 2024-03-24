import styles from './style.module.scss'

const GalleryBox = (props) => {
    const {img} = props;
  return (
    <img className={styles.img} src={img}/>
  )
}

export default GalleryBox