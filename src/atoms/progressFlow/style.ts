import { styled } from 'styled-components';

import { spacing } from '../../utils';

export const Container = styled.div`
  display: flex;
  display: webkit-flex;
  flex-direction: row;
  align-items: center;
  align-items: webkit-align-center;
  justify-content: center;
  column-gap: ${spacing.xxsmall};
`;
