import { ProgressBarIProps } from '../components/progressBar';

const getHistoryStepper = (step: number) => {
  let processFlowData: ProgressBarIProps[] = [];
  if (step && step === 2) {
    processFlowData = [
      {
        text: 'User details',
        isActive: true,
      },
      {
        text: 'Pokemon',
        isActive: true,
      },
      {
        text: 'Review',
        isActive: false,
      },
    ];
  } else if (step && step === 3) {
    processFlowData = [
      {
        text: 'User details',
        isActive: true,
      },
      {
        text: 'Pokemon',
        isActive: true,
      },
      {
        text: 'Review',
        isActive: true,
      },
    ];
  } else {
    processFlowData = [
      {
        text: 'User details',
        isActive: true,
      },
      {
        text: 'Pokemon',
        isActive: false,
      },
      {
        text: 'Review',
        isActive: false,
      },
    ];
  }

  return processFlowData;
};

export default getHistoryStepper;
