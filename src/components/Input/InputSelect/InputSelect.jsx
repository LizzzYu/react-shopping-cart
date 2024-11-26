import clsx from 'clsx';
import styles from './InputSelect.module.scss';
import { useState } from 'react';

const InputSelect = ({ title, options, placeholder }) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{title}</p>
      <select
        className={clsx(styles.select, {
          [styles.selected]: selectedValue !== '',
        })}
        name={title}
        value={selectedValue}
        onChange={handleChange}
        defaultValue=''
      >
        <option value='' disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputSelect;
