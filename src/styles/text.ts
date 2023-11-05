// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components';

import { colors, fontWeight } from '../utils';

interface StyleProps {
  ta?: string;
  fw?: string;
  color?: string;
  fontFamily?: string | 'Millik';
  fSize?: string;
}

export const ff = 'Medium';
export const ffMillik = 'Millik';

export const HA = styled.div<StyleProps>`
  font-weight: ${({ fw }) => (fw ? fw : fontWeight.fw4)};
  color: ${({ color }) => (color ? color : colors.grey80)};
  font-size: ${({ fSize }) => (fSize ? fSize : '15px')};
  text-align: ${({ ta }) => (ta === 'right' ? 'right' : ta === 'center' ? 'center' : 'left')};
  font-family: ${({ fontFamily }) => (fontFamily === ffMillik ? ffMillik : ff)};
  @media (min-width: 48rem) {
    font-size: ${({ fSize }) => (fSize ? fSize : '15px')};
  }
`;

export const H1 = styled.div<StyleProps>`
  font-weight: ${({ fw }) => (fw ? fw : fontWeight.fw4)};
  color: ${({ color }) => (color ? color : colors.grey80)};
  font-size: ${({ fSize }) => (fSize ? fSize : '28px')};
  text-align: ${({ ta }) => (ta === 'right' ? 'right' : ta === 'center' ? 'center' : 'left')};
  font-family: ${({ fontFamily }) => (fontFamily === ffMillik ? ffMillik : ff)};
  @media (min-width: 48rem) {
    font-size: ${({ fSize }) => (fSize ? fSize : '28px')};
  }
`;

export const H2 = styled.div<StyleProps>`
  font-weight: ${({ fw }) => (fw ? fw : fontWeight.fw4)};
  color: ${({ color }) => (color ? color : colors.grey80)};
  font-size: px;
  text-align: ${({ ta }) => (ta === 'right' ? 'right' : ta === 'center' ? 'center' : 'left')};
  font-family: ${({ fontFamily }) => (fontFamily === ffMillik ? ffMillik : ff)};
  @media (min-width: 48rem) {
    font-size: 36px;
  }
`;

export const H3 = styled.div<StyleProps>`
  font-weight: ${({ fw }) => (fw ? fw : fontWeight.fw4)};
  color: ${({ color }) => (color ? color : colors.grey80)};
  font-size: 14px;
  text-align: ${({ ta }) => (ta === 'right' ? 'right' : ta === 'center' ? 'center' : 'left')};
  font-family: ${({ fontFamily }) => (fontFamily === ffMillik ? ffMillik : ff)};
  @media (min-width: 48rem) {
    font-size: 14px;
  }
`;

export const H4 = styled.div<StyleProps>`
  font-weight: ${({ fw }) => (fw ? fw : fontWeight.fw4)};
  color: ${({ color }) => (color ? color : colors.grey80)};
  font-size: 24px;
  text-align: ${({ ta }) => (ta === 'right' ? 'right' : ta === 'center' ? 'center' : 'left')};
  font-family: ${({ fontFamily }) => (fontFamily === ffMillik ? ffMillik : ff)};
  @media (min-width: 48rem) {
    font-size: 24px;
  }
`;

export const H5 = styled.div<StyleProps>`
  font-weight: ${({ fw }) => (fw ? fw : fontWeight.fw4)};
  color: ${({ color }) => (color ? color : colors.grey80)};
  font-size: 16px;
  text-align: ${({ ta }) => (ta === 'right' ? 'right' : ta === 'center' ? 'center' : 'left')};
  font-family: ${({ fontFamily }) => (fontFamily === ffMillik ? ffMillik : ff)};
  @media (min-width: 48rem) {
    font-size: 16px;
  }
`;

export const H6 = styled.div<StyleProps>`
  font-weight: ${({ fw }) => (fw ? fw : fontWeight.fw4)};
  color: ${({ color }) => (color ? color : colors.grey80)};
  font-size: 14px;
  text-align: ${({ ta }) => (ta === 'right' ? 'right' : ta === 'center' ? 'center' : 'left')};
  font-family: ${({ fontFamily }) => (fontFamily === ffMillik ? ffMillik : ff)};
  @media (min-width: 48rem) {
    font-size: 14px;
  }
`;

export const H7 = styled.div<StyleProps>`
  font-weight: ${({ fw }) => (fw ? fw : fontWeight.fw4)};
  color: ${({ color }) => (color ? color : colors.grey80)};
  font-size: 13px;
  text-align: ${({ ta }) => (ta === 'right' ? 'right' : ta === 'center' ? 'center' : 'left')};
  font-family: ${({ fontFamily }) => (fontFamily === ffMillik ? ffMillik : ff)};
  @media (min-width: 48rem) {
    font-size: 13px;
  }
`;
