import { styled } from 'styled-components';

import { colors, spacing, borderRadius } from '../../utils';

interface StyleProps {
  isActive: boolean;
}

export const Container = styled.div<StyleProps>`
  //   width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  border-radius: ${borderRadius.small};

  //   border: 1px solid ${colors.smokeWhite};
  border: 1px solid ${({ isActive }) => (isActive ? colors.primary : colors.smokeWhite)};
  cursor: pointer;
  transition: border-color 2s ease-out 100ms;
  background-color: ${({ isActive }) => (isActive ? '#1f2b55' : colors.white)};
  &:hover {
    border: 1px solid ${colors.primary};
  }
`;

export const ImageContent = styled.img<StyleProps>`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: ${({ isActive }) => (isActive ? colors.primary : colors.smokeWhite)};
  margin-bottom: ${spacing.xxsmall};
`;
