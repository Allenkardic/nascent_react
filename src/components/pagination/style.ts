import { styled } from 'styled-components';

import { colors, spacing, borderRadius } from '../../utils';

interface StyleProps {
  isPreviousActive?: boolean;
}

export const Container = styled.div<StyleProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 150px;
  margin-left: auto;
  margin-right: auto;
`;

export const Content = styled.div<StyleProps>`
  border-radius: ${borderRadius.small};
  width: 30%;
  align-self: center;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  align-self: center;
  background-color: ${({ isPreviousActive }) => (isPreviousActive ? colors.smokeWhite : colors.grey)};
  margin-top: ${spacing.xsmall};
  margin-bottom: ${spacing.xxsmall};
`;
