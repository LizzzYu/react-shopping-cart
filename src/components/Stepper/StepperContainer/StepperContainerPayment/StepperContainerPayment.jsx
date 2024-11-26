import Input from '../../../Input/Input';
import { STEP_NAMES } from '../../Stepper.constants';

import styles from './StepperContainerPayment.module.scss';

const StepperContainerPayment = ({ currentStep }) => {
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>{STEP_NAMES[currentStep]}</h4>
      <div className={styles.container}>
        <Input title='持卡人姓名' placeholder='John Doe' />
        <Input title='卡號' placeholder='1111 2222 3333 4444' />
        <div className={styles.columnStyleHalf}>
          <Input title='有效期限' placeholder='MM/YY' />
          <Input title='CVC / CCV' placeholder='123' />
        </div>
      </div>
    </div>
  );
};

export default StepperContainerPayment;
