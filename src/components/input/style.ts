import { styled, css } from 'styled-components';

import { ff, btnHeight } from '../../styles';
import { colors, spacing, borderRadius, fontWeight } from '../../utils';

interface StyleProps {
  error?: string;
  marginBottom?: string | number;
  backgroundColor?: string;
  borderColor?: string;
  focus?: boolean;
  type?: string;
  name?: string;
}

export const FormInputContainer = styled.div<StyleProps>`
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : spacing.xsmall)};
`;

export const Container = styled.div<StyleProps>`
  display: flex;
  display: webkit-flex;
  flex-direction: row;
  align-items: center;
  color: ${colors.primary};
  background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : colors.white)};
  border: 1px solid ${({ borderColor, error }) => (borderColor ? borderColor : error ? colors.red : colors.grey20)};
  height: ${({ name }) => (name === 'searchValue' ? '40px' : btnHeight)};
  width: 100%;
  padding-left: ${spacing.xxxsmall};
  border-radius: ${borderRadius.small};
  transition: all 0.3s ease;
  ${props =>
    props.focus &&
    css`
      border: 1px solid ${colors.secondary};
      /* You can specify any valid CSS color value here */
    `}
`;

export const InputContent = styled.input<StyleProps>`
  color: ${colors.grey80};
  background-color: transparent;
  border: 0px solid transparent;
  font-weight: ${fontWeight.fw5};
  font-family: ${ff};
  font-size: 16px;
  height: 100%;
  padding-left: ${spacing.xxxsmall};
  width: ${'100%'};
  transition: all 0.3s ease;
  &:focus {
    outline: none;
  }
`;

export const TelContent = styled.input<StyleProps>`
  display: flex;
  display: webkit-flex;
  flex-direction: row;
  align-items: center;
`;
