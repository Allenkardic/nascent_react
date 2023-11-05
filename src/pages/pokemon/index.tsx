import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { AppContainer } from '../../atoms';
import { PokemonCard } from '../../components';
import { spacing, routesPath, colors } from '../../utils';

import { Container } from './style';
const processFlowData = [
  {
    text: 'User details',
    isActive: false,
  },
  {
    text: 'Pokemon',
    isActive: true,
  },
  {
    text: 'Review',
    isActive: false,
  },
];

const { POKEMON } = routesPath;
function Pokemon() {
  const [count, setCount] = useState(50);

  useEffect(() => {
    const onScroll = () => {
      // if scrolled to the bottom
      if (window.innerHeight + window.scrollY >= window.document.body.offsetHeight) {
        // update the state
        setCount(count + 50);
        console.log('its at the end');
      }
    };

    // scroll event
    window.addEventListener('scroll', onScroll);

    // memory cleanup, remove listener
    return () => window.removeEventListener('scroll', onScroll);
  }, [count]);

  const elements = [];
  for (let i = 0; i < count; i++) {
    elements.push(<div key={i}>{i}</div>);
  }

  return (
    <AppContainer secondaryView={true} navHeaderText="Select Pokemon" processFlowData={processFlowData}>
      <div style={{ border: '1px solid red' }}>
        <div>Pokemon page</div>
        <Container>
          <PokemonCard
            imgSrc="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"
            isActive={false}
            text="Pokemon"
          />
          <PokemonCard
            imgSrc="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"
            isActive={true}
            text="Pokemon"
          />
          <PokemonCard
            imgSrc="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"
            isActive={true}
            text="Pokemon"
          />
          <PokemonCard
            imgSrc="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"
            isActive={true}
            text="Pokemon"
          />
          <PokemonCard
            imgSrc="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"
            isActive={true}
            text="Pokemon"
          />
          <PokemonCard
            imgSrc="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"
            isActive={true}
            text="Pokemon"
          />
          <PokemonCard
            imgSrc="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"
            isActive={true}
            text="Pokemon"
          />
        </Container>
        {elements}
      </div>
    </AppContainer>
  );
}

export default Pokemon;
