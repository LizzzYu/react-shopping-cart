import { useState } from 'react';
import Radio from '../../../Radio/Radio';
import { STEP_NAMES } from '../../Stepper.constants';
import styles from './StepperContainerShipping.module.scss';
import {
  DELIVERY_METHODS,
  DELIVERY_METHODS_KEYS,
} from './StepperContainerShipping.constants';

const StepperContainerShipping = ({ currentStep }) => {
  const [selectedValue, setSelectedValue] = useState(DELIVERY_METHODS_KEYS[0]);

  const handleChange = (value) => {
    setSelectedValue(value);
  };

  const getPrice = (price) => {
    if (price === 0) {
      return '免費';
    } else {
      return `$${price}`;
    }
  };

  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>{STEP_NAMES[currentStep]}</h4>
      <div className={styles.container}>
        {DELIVERY_METHODS_KEYS.map((delivery) => (
          <Radio
            key={delivery}
            name='delivery'
            label={DELIVERY_METHODS[delivery].label}
            description={DELIVERY_METHODS[delivery].description}
            price={getPrice(DELIVERY_METHODS[delivery].price)}
            id={DELIVERY_METHODS[delivery].id}
            value={delivery}
            selected={selectedValue}
            onChange={handleChange}
          />
        ))}
      </div>
    </div>
  );
};

export default StepperContainerShipping;
