import { styled } from 'styled-components';

import { colors, spacing, borderRadius } from '../../utils';

interface StyleProps {
  backgroundColor?: string;
  borderColor?: string;
}

export const Container = styled.div<StyleProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-content: center;
  width: 100%;
`;

export const InputContainer = styled.div<StyleProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: ${spacing.xxsmall};
  border: 1px solid ${colors.greyThree};
  background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : 'transparent')};
  border-radius: ${borderRadius.medium};
  width: 80%;
`;

export const InputContent = styled.input`
  color: ${colors.primary};
  background-color: transparent;
  border: 0px solid ${colors.primary};
  height: 30px;
  width: 100%;
  padding-left: ${spacing.xxsmall};
  transition: all 0.3s ease;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 0px ${colors.primary};
  }
`;

export const BtnContainer = styled.div`
  margin-left: ${spacing.xxsmall};
`;
