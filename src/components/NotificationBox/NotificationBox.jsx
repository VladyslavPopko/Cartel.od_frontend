import styles from "./style.module.scss"
import cn from "classnames"

const NotificationBox = (props) => {
    const {text, img, isVisibleNotificationAddtoCart} = props;
  return (
    <div className={cn(styles.section, isVisibleNotificationAddtoCart && styles.active )}>
        <h2 className={styles.text}>{text}</h2>
        <img className={styles.img} src={img} alt="" />
    </div>
  )
}

export default NotificationBox