import { memo } from 'react';

import { H7 } from '../../styles';
import { colors } from '../../utils';

import { Container, ImageContent } from './style';

export interface PokemonCardIProps {
  text: string;
  isActive: boolean;
  imgSrc: string;
  onClick?: () => void;
}

function PokemonCard({ text, imgSrc, isActive, onClick }: PokemonCardIProps) {
  return (
    <Container isActive={isActive} onClick={onClick}>
      <ImageContent src={imgSrc} isActive={isActive} alt="pokemon image" />
      <H7 fw={isActive ? '700' : '500'} ta="center" color={isActive ? colors.white : colors.greyOne}>
        {text}
      </H7>
    </Container>
  );
}

export default memo(PokemonCard);
