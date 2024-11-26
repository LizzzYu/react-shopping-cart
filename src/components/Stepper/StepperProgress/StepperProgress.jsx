import clsx from 'clsx';
import { STEPS, STEP_NAMES } from '../Stepper.constants';
import styles from './StepperProgress.module.scss';
import Check from '../../../assets/ic_baseline-check.svg';

const StepperProgress = ({ currentStep }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {STEPS.map((step) => (
          <div key={step} className={styles.step}>
            <div className={styles.stepName}>
              {currentStep > step ? (
                <img src={Check} alt='checked' />
              ) : (
                <div
                  className={clsx(styles.circle, {
                    [styles.disabled]: currentStep < step,
                  })}
                >
                  {step}
                </div>
              )}
              <p className={clsx({ [styles.disabled]: currentStep < step })}>
                {STEP_NAMES[step]}
              </p>
            </div>
            {step !== 3 && (
              <div
                className={clsx(styles.line, {
                  [styles.disabled]: currentStep < step,
                })}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepperProgress;
