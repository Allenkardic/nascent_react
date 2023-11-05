import { memo } from 'react';

import { H7 } from '../../styles';
import { colors } from '../../utils';

import { Container, BarContainer } from './style';

export interface ProgressBarIProps {
  text: string;
  isActive: boolean;
}

function ProgressBar({ text, isActive }: ProgressBarIProps) {
  return (
    <Container>
      <BarContainer isactive={isActive} />
      <H7 fw={isActive ? '700' : '500'} ta="center" color={isActive ? colors.robust : colors.greyOne}>
        {text}
      </H7>
    </Container>
  );
}

export default memo(ProgressBar);
