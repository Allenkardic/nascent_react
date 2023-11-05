import { styled } from 'styled-components';

import { colors, spacing } from '../../utils';

export const Container = styled.div`
  display: grid;
  // grid-template-columns: 6fr 6fr 6fr 6fr;
  //   grid-template-columns: repeat(auto-fill, minmax(50px, 200px));
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  //   grid-template-rows: repeat(4, 200px);
  //   grid-template-rows: repeat(4, auto-fill);
  grid-column-gap: ${spacing.xxsmall};
  grid-row-gap: ${spacing.xxsmall};
  //   justify-items: stretch;
  //   align-items: stretch;
`;
