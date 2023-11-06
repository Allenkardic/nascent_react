import { styled } from 'styled-components';

import { spacing, colors, borderRadius } from '../../utils';

interface StyleProps {
  marginBottom?: string | number;
  borderColor?: string;
  backgroundColor?: string;
}

export const BtnContainer = styled.div<StyleProps>`
  position: relative;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : '0px')};
`;

export const BtnContent = styled.div<StyleProps>`
  background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : colors.primary)};
  border: 1px solid ${({ borderColor }) => (borderColor ? borderColor : colors.primary)};
  display: flex;
  align-self: flex-start;
  height: 30px;
  align-items: center;
  justify-content: center;
  border-radius: ${borderRadius.small};
  padding: 0px ${spacing.xxsmall};
  cursor: pointer;
`;
