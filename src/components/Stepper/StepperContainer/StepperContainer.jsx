import StepperContainerAdress from './StepperContainerAdress/StepperContainerAdress';
import StepperContainerShipping from './StepperContainerShipping/StepperContainerShipping';
import StepperContainerPayment from './StepperContainerPayment/StepperContainerPayment';
import style from './StepperContainer.module.scss';

const StepperContainer = ({ currentStep }) => {
  return (
    <div className={style.wrapper}>
      {currentStep === 1 && (
        <StepperContainerAdress currentStep={currentStep} />
      )}
      {currentStep === 2 && (
        <StepperContainerShipping currentStep={currentStep} />
      )}
      {currentStep === 3 && (
        <StepperContainerPayment currentStep={currentStep} />
      )}
    </div>
  );
};

export default StepperContainer;
