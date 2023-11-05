import { styled } from 'styled-components';

import { colors, spacing } from '../../utils';

interface StyleProps {
  isactive: boolean;
}

export const Container = styled.div`
  width: 80px;
`;

export const BarContainer = styled.div<StyleProps>`
  height: 4px;
  border-radius: 8px;
  background-color: ${({ isactive }) => (isactive ? colors.primary : colors.smokeWhite)};
  margin-bottom: ${spacing.mini};
`;
