import Input from '../../../Input/Input';
import InputSelect from '../../../Input/InputSelect/InputSelect';
import { STEP_NAMES } from '../../Stepper.constants';
import {
  CITY_OPTIONS,
  TITLE_OPTIONS,
} from './StepperContainerAdress.constants';
import styles from './StepperContainerAdress.module.scss';

const StepperContainerAdress = ({ currentStep }) => {
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>{STEP_NAMES[currentStep]}</h4>
      <div className={styles.container}>
        <div className={styles.columnStyleTwoFour}>
          <InputSelect
            title='稱謂'
            options={TITLE_OPTIONS}
            placeholder='請選擇稱謂'
          />
          <Input title='姓名' placeholder='請輸入姓名' />
        </div>
        <div className={styles.columnStyleHalf}>
          <Input title='電話' placeholder='請輸入電話' />
          <Input title='Email' placeholder='請輸入電子郵件' />
        </div>
        <div className={styles.columnStyleTwoFour}>
          <InputSelect
            title='縣市'
            options={CITY_OPTIONS}
            placeholder='請選擇縣市'
          />
          <Input title='地址' placeholder='請輸入地址' />
        </div>
      </div>
    </div>
  );
};

export default StepperContainerAdress;
