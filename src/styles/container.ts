import styledComponents from 'styled-components';

import { colors, spacing } from '../utils';

interface StyleProps {
  secondaryView?: boolean;
}

export const AppContainer = styledComponents.div`
  display: flex;
  flex-direction: column;
  padding-left: 200px;
  @media (max-width: 768px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`;

export const PageContainer = styledComponents.div<StyleProps>`
  padding-top: ${spacing.medium};
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-left: auto;
  margin-right: auto;

  @media only screen and (min-width: 600px) {
    /* For tablets: */
    margin-left: auto;
    margin-right: auto;
  }

  @media only screen and (min-width: 768px) {
    /* For desktop: */
    // width: 34vw;
    // min-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const PageContent = styledComponents.div<StyleProps>`
  padding-top: ${spacing.medium};
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 600px) {
    /* For tablets: */
    // padding-left: ${({ secondaryView }) => (secondaryView ? '0px' : spacing.large)};
    // padding-right: ${({ secondaryView }) => (secondaryView ? '0px' : spacing.large)};
  }

  @media only screen and (min-width: 768px) {
    /* For desktop: */
    // padding-left: ${({ secondaryView }) => (secondaryView ? '0px' : spacing.large)};
    // padding-right: ${({ secondaryView }) => (secondaryView ? '0px' : spacing.large)};
  }
`;

export const btnHeight = '56px';
export const btnHeightInt = 56;
