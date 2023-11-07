import { styled } from 'styled-components';

import { spacing, colors } from '../../utils';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: ${spacing.xxsmall};
  grid-row-gap: ${spacing.xxsmall};
`;

export const BtnContent = styled.div`
  margin-top: ${spacing.xxxsmall};
  width: 30%;
  margin-left: auto;
  margin-right: auto;
`;

export const FooterContent = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1;
  background-color: ${colors.greyFour};
`;
