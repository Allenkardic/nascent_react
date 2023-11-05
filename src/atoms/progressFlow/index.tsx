import { ProgressBar } from '../../components';
import { ProgressBarIProps } from '../../components/progressBar';

import { Container } from './style';

export interface ProgressFlowIProps {
  data: ProgressBarIProps[];
}

function ProgressFlow({ data }: ProgressFlowIProps) {
  return (
    <Container>
      {data.map(item => (
        <ProgressBar key={item.text} text={item.text} isActive={item.isActive} />
      ))}
    </Container>
  );
}

export default ProgressFlow;
