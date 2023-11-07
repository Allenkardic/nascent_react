import { styled } from 'styled-components';

import { spacing, colors } from '../../utils';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: ${spacing.xxsmall};
  grid-row-gap: ${spacing.xxsmall};
`;

export const BtnContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${spacing.xxxsmall};
  padding: 0px ${spacing.xsmall};
  margin-left: auto;
  margin-right: auto;
`;

export const BtnContainer = styled.div`
  width: 150px;
`;

export const FooterContent = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: ${colors.greyFour};
`;
