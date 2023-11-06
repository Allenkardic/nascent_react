import { memo } from 'react';

import { H5 } from '../../styles';
import { colors } from '../../utils';

import { BtnContainer, BtnContent } from './style';

export interface BorderedTextIProps {
  text: string;
  marginBottom?: number | string;
  borderColor?: string;
  color?: string;
  onClick?: () => void;
}

function BorderedText({ onClick, text, marginBottom, borderColor, color }: BorderedTextIProps) {
  return (
    <BtnContainer onClick={onClick} marginBottom={marginBottom} borderColor={borderColor}>
      <BtnContent>
        <H5 color={color ? color : colors.white}>{text}</H5>
      </BtnContent>
    </BtnContainer>
  );
}

export default memo(BorderedText);
