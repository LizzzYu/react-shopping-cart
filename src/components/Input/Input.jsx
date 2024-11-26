import styles from './Input.module.scss';

const Input = ({ type = 'text', title, placeholder }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{title}</p>
      <input className={styles.input} type={type} placeholder={placeholder} />
    </div>
  );
};

export default Input;
