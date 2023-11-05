import { memo } from 'react';

import { HA, btnHeight } from '../../styles';
import { colors } from '../../utils';

import { Container } from './style';
export interface ButtonIProps {
  text: string;
  backgroundColor?: string;
  textColor?: string;
  secondary?: boolean;
  disabled?: boolean;
  onClick?: (event: unknown) => void;
  type?: 'button' | 'submit';
  height?: string;
  marginBottom?: string;
}

function Button({
  onClick,
  text,
  backgroundColor,
  disabled = false,
  textColor,
  type = 'button',
  height = btnHeight,
  secondary = false,
  marginBottom,
}: ButtonIProps) {
  return (
    <Container
      onClick={onClick}
      disabled={disabled}
      backgroundColor={backgroundColor}
      type={type}
      btnHt={height}
      secondary={secondary}
      marginBottom={marginBottom}>
      <HA fSize="14px" ta="center" fw="700" color={secondary ? colors.primary : textColor ? textColor : colors.primary}>
        {text}
      </HA>
    </Container>
  );
}

export default memo(Button);
