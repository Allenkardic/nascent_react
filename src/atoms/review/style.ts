import { styled } from 'styled-components';

import { spacing, borderRadius, colors } from '../../utils';

export const Container = styled.div`
  display: flex;
  display: webkit-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`;

export const Content = styled.div`
  display: flex;
  //   position: relative;
  width: 100%;
`;

export const AmountContainer = styled.div`
  display: flex;
  display: webkit-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid ${colors.grey10};
  width: 100%;
  padding-top: ${spacing.xsmall};
  padding-bottom: ${spacing.xsmall};
  border-radius: ${borderRadius.small};
  margin-bottom: ${spacing.xsmall};
  margin-top: ${spacing.medium};
`;

export const DateContainer = styled.div`
  display: flex;
  display: webkit-flex;
  height: 42px;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
  border: 1px solid ${colors.grey10};
  border-radius: 30px;
  background-color: ${colors.white};
`;

export const DataContent = styled.div`
  margin-top: ${spacing.xxsmall};
  margin-bottom: ${spacing.xsmall};
  width: 100%;
`;

export const DataContainer = styled.div`
  display: flex;
  display: webkit-flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  width: 100%;
  margin-bottom: ${spacing.xxsmall};
`;

export const BackIconContainer = styled.div`
  display: flex;
  display: webkit-flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  cursor: pointer;
  margin-top: ${spacing.xxsmall};
`;
