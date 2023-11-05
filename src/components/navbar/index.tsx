import { memo } from 'react';

// import { FiBell, FiUser, FiSettings } from 'react-icons/fi';

import { ProgressFlow } from '../../atoms';
import { HA } from '../../styles';
import { ProgressBarIProps } from '../progressBar';
// import { colors, spacing } from '../../utils';

import { Container, ProgressContainer } from './style';

export interface NavProps {
  title?: string;
  isSearchBar?: boolean;
  processFlowData: ProgressBarIProps[];
}

function Navbar({ title, isSearchBar, processFlowData }: NavProps) {
  return (
    <Container>
      {title && <HA>{title}</HA>}

      {isSearchBar && <HA>isSearchBar</HA>}

      <ProgressContainer>
        <ProgressFlow data={processFlowData} />
      </ProgressContainer>
    </Container>
  );
}

export default memo(Navbar);
