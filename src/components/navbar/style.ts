import { styled } from 'styled-components';

import { colors, spacing } from '../../utils';

export const Container = styled.div`
  display: flex;
  display: webkit-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
  padding: 0px 160px;
  border-bottom: 1px solid ${colors.grey30};
  background-color: transparent;
  @media (max-width: 768px) {
    padding: 0px ${spacing.xxsmall};
    height: 74px;
  }
`;

export const ProgressContainer = styled.div`
  margin-top: ${spacing.small};
`;
