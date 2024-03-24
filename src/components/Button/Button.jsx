import styles from './style.module.scss'

const Button = (props) => {
  const { text, className, href, onSubmit, onClick, type } = props;

  return (
    <div>
      <a className={styles.a} href={href}>
        <button onSubmit={onSubmit} onClick={onClick} className={className} type={type}>
          {text}
        </button>
      </a>
    </div>
  );
};

export default Button;
