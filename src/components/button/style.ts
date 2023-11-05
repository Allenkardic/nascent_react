import { styled } from 'styled-components';

import { btnHeight } from '../../styles';
import { colors, borderRadius } from '../../utils';

interface StyleProps {
  backgroundColor?: string;
  secondary?: boolean;
  disabled?: boolean;
  btnHt?: string;
  marginBottom?: string;
}

export const Container = styled.button<StyleProps>`
  display: flex;
  display: webkit-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${colors.primary};
  background-color: ${({ backgroundColor, secondary }) =>
    secondary ? colors.white : backgroundColor ? backgroundColor : colors.secondary};
  border: 1px solid ${colors.secondary};
  height: ${({ btnHt }) => (btnHt ? btnHt : btnHeight)};
  width: 100%;
  border-radius: ${borderRadius.small};
  transition: all 0.3s ease;
  cursor: pointer;
  opacity: ${({ disabled }) => (disabled ? '50%' : '1')};
  margin-bottom: ${({ marginBottom }) => (marginBottom ? `${marginBottom}` : '0px')};
`;
