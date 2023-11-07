import { styled } from 'styled-components';

import { spacing, borderRadius, colors } from '../../utils';

export const Container = styled.div`
  display: flex;
  display: webkit-flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  width: 100%;
  margin-bottom: ${spacing.xxsmall};
  border: 1px solid ${colors.smokeWhite};
  padding: 0px ${spacing.xxsmall};
  border-radius: ${borderRadius.small};
  cursor: pointer;
`;

export const Content = styled.div`
  display: flex;
  display: webkit-flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  width: 100%;
  margin: ${spacing.xxxsmall} 0px;
`;

export const ProgressContaniner = styled.div`
  margin-top: ${spacing.xxsmall};
  margin-bottom: ${spacing.xxxsmall};
`;
