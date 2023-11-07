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
  padding-top: ${spacing.xxsmall};
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 150px;



  @media only screen and (min-width: 600px) {
    /* For tablets: */
   
  }

  @media only screen and (min-width: 768px) {
    /* For desktop: */
   

 
`;

export const PageContent = styledComponents.div<StyleProps>`

 
  padding: 0px ${spacing.xxsmall};

  @media only screen and (min-width: 600px) {
    /* For tablets: */

  }

  @media only screen and (min-width: 768px) {
    /* For desktop: */
    width: ${({ secondaryView }) => (secondaryView ? '34vw' : '100vw')};
    min-width: ${({ secondaryView }) => (secondaryView ? '500px' : '100vw')};
    margin-left: auto;
    margin-right: auto;

  }
`;

export const btnHeight = '56px';
export const btnHeightInt = 56;
