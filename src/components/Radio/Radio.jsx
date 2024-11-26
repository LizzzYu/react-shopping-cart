import clsx from 'clsx';
import styles from './Radio.module.scss';

const Radio = ({
  label = '',
  description = '',
  price = 0,
  name,
  id,
  value,
  selected,
  onChange,
}) => {
  return (
    <div
      className={clsx(styles.wrapper, {
        [styles.selected]: selected === value,
      })}
    >
      <input
        type='radio'
        name={name}
        id={id}
        value={value}
        checked={selected === value}
        onChange={(e) => onChange(e.target.value)}
        className={styles.input}
      />
      <div className={styles.icon} />
      <div className={styles.container}>
        <div>
          <label>{label}</label>
          <p>{description}</p>
        </div>
        <span>{price}</span>
      </div>
    </div>
  );
};

export default Radio;
