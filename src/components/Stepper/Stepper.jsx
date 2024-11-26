import StepperControls from './StepperControls/StepperControls';
import StepperProgress from './StepperProgress/StepperProgress';
import styles from './Stepper.module.scss';
import StepperContainer from './StepperContainer/StepperContainer';
import { useState } from 'react';

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <div className={styles.wrapper}>
      <StepperProgress currentStep={currentStep} />
      <StepperContainer currentStep={currentStep} />
      <StepperControls
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
    </div>
  );
};

export default Stepper;
