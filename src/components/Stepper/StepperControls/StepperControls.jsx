import clsx from 'clsx';
import styles from './StepperControls.module.scss';

const StepperControls = ({ currentStep, setCurrentStep }) => {
  const isLastStep = currentStep === 3;
  const isFirstStep = currentStep === 1;

  const onNextStepClick = () => {
    if (isLastStep) {
      console.log('place order');
    } else {
      setCurrentStep(currentStep + 1);
    }
  };
  return (
    <div className={styles.wrapper}>
      <button
        className={clsx(styles.button, {
          [styles.disabled]: isFirstStep,
        })}
        onClick={() => setCurrentStep(currentStep - 1)}
      >
        ← 上一步
      </button>
      <button
        className={clsx(styles.button, styles.colorButton)}
        onClick={onNextStepClick}
      >
        {isLastStep ? '確認下單' : '下一步 →'}
      </button>
    </div>
  );
};

export default StepperControls;
