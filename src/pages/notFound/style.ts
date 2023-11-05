import { styled } from 'styled-components';

import { colors, spacing, borderRadius } from '../../utils';

export const Container = styled.div`
  padding: ${spacing.xsmall};
  border: 1px solid ${colors.grey20};
  border-radius: ${borderRadius.small};
  margin-top: ${spacing.xsmall};
`;

export const ImgContainer = styled.div`
  margin-bottom: ${spacing.xxsmall};
  display: flex;
  display: webkit-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
