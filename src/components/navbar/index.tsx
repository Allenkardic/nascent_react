import { memo } from 'react';

import { ProgressFlow } from '../../atoms';
import { HA } from '../../styles';
import { ProgressBarIProps } from '../progressBar';

import { Container, ProgressContainer } from './style';

export interface NavProps {
  title?: string;
  processFlowData?: ProgressBarIProps[];
}

function Navbar({ title, processFlowData }: NavProps) {
  return (
    <Container>
      {title && <HA>{title}</HA>}

      {processFlowData && (
        <ProgressContainer>
          <ProgressFlow data={processFlowData} />
        </ProgressContainer>
      )}
    </Container>
  );
}

export default memo(Navbar);
