import { styled } from 'styled-components';

import { spacing } from '../../utils';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: ${spacing.xxsmall};
  grid-row-gap: ${spacing.xxsmall};
`;

export const BtnContent = styled.div`
  margin-top: ${spacing.large};
  width: 200px;
  margin-left: auto;
  margin-right: auto;
`;
