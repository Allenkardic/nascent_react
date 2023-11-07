import { memo } from 'react';

// import { FiBell, FiUser, FiSettings } from 'react-icons/fi';

import { ProgressFlow } from '../../atoms';
import { HA } from '../../styles';
import { ProgressBarIProps } from '../progressBar';
// import { colors, spacing } from '../../utils';

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
