import { styled } from 'styled-components';

import { spacing } from '../../utils';

export const LogoContainer = styled.div`
  display: flex;
  display: webkit-flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${spacing.xlarge};
`;

export const InAppNavContainer = styled.div`
  display: flex;
  display: webkit-flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-content: center;
`;

export const BackIconContainer = styled.div`
  width: 10%;
  display: flex;
  display: webkit-flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  align-self: flex-start;
  cursor: pointer;
`;

export const MiddleContainer = styled.div`
  width: 80%;
  display: flex;
  display: webkit-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-content: center;
`;

export const LastContainer = styled.div`
  width: 10%;
  display: flex;
  display: webkit-flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-content: center;
`;
