import { styled } from 'styled-components';

import { spacing } from '../../utils';

interface StyleProps {
  marginBottom?: string | number;
}

export const Container = styled.div<StyleProps>`
  align-self: flex-start;
  background-color: transparent;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : spacing.xxxsmall)};
`;
