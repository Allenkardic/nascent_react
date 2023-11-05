import { memo } from 'react';

import { H7 } from '../../styles';
import { colors } from '../../utils';

import { Container, ImageContent } from './style';

export interface PokemonCardIProps {
  text: string;
  isActive: boolean;
  imgSrc: string;
}

function PokemonCard({ text, imgSrc, isActive }: PokemonCardIProps) {
  return (
    <Container isActive={isActive}>
      <ImageContent src={imgSrc} isActive={isActive} />
      <H7 fw={isActive ? '700' : '500'} ta="center" color={isActive ? colors.white : colors.greyOne}>
        {text}
      </H7>
    </Container>
  );
}

export default memo(PokemonCard);
