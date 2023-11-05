import { memo } from 'react';

import { H7 } from '../../styles';
import { colors } from '../../utils';

import { Container } from './style';

export interface InputIProps {
  text: string;
  marginBottom?: number | string;
  color?: string;
}

function Label({ text, marginBottom, color }: InputIProps) {
  return (
    <Container marginBottom={marginBottom}>
      <H7 fw="500" ta="left" color={color ? color : colors.grey40}>
        {text}
      </H7>
    </Container>
  );
}

export default memo(Label);
