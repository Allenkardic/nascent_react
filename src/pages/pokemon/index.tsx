import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { AppContainer } from '../../atoms';
import { PokemonCard, Pagination, Button } from '../../components';
import { PokemonCardIProps } from '../../components/pokemonCard';
import { useAppDispatch, useAppSelector } from '../../services/redux-hooks';
import { pokemonRequest, pokemonReset } from '../../services/slice';
import { Dictionary } from '../../types';
import { spacing, routesPath, colors } from '../../utils';

// import { useGetPokemonByNameQuery } from "../store/pokemon";
import { Container, BtnContent } from './style';
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
  const dispatch = useAppDispatch();

  const [page, setPage] = useState(0);
  const [selectedPokemon, setSelectedPokemon] = useState({});
  const [data, setData] = useState<PokemonCardIProps[]>([]);

  // redux state
  const pokemonState = useAppSelector(state => state.pokemon);
  const { status: pokemonStatus } = pokemonState;

  useEffect(() => {
    dispatch(pokemonRequest({ page: page }));
  }, [page]);

  useEffect(() => {
    if (pokemonStatus === 'succeeded') {
      const updatedList: PokemonCardIProps[] = [];

      pokemonState.data.data.forEach((item: Dictionary) => {
        updatedList.push({
          isActive: false,
          text: item.name,
          imgSrc: item?.sprites?.other?.home?.front_default,
        });
      });

      setData(updatedList);
    }
  }, [pokemonState]);

  console.log(pokemonState.data.previous, 'pokemonState');

  const handleSelect = (item: PokemonCardIProps) => {
    const updatedList: PokemonCardIProps[] = [
      ...data.map((el: PokemonCardIProps) => {
        if (el.text === item.text) {
          el.isActive = true;
        } else {
          el.isActive = false;
        }

        return el;
      }),
    ];
    setSelectedPokemon(item);
    setData(updatedList);
  };

  // useEffect(() => {
  //   const onScroll = () => {
  //     // if scrolled to the bottom
  //     if (window.innerHeight + window.scrollY >= window.document.body.offsetHeight) {
  //       // update the state
  //       setPage(prevState => prevState + 30);
  //       dispatch(pokemonRequest({ page }));

  //       console.log('its at the end');
  //     }
  //   };

  //   // scroll event
  //   window.addEventListener('scroll', onScroll);

  //   // memory cleanup, remove listener
  //   return () => window.removeEventListener('scroll', onScroll);
  // }, [page]);

  return (
    <AppContainer secondaryView={true} navHeaderText="Select Pokemon" processFlowData={processFlowData}>
      <div style={{ border: '1px solid red' }}>
        <Container>
          {data.map(item => (
            <div key={item.text}>
              <PokemonCard
                imgSrc={item.imgSrc}
                isActive={item.isActive}
                text={item.text}
                onClick={() => handleSelect(item)}
              />
            </div>
          ))}
        </Container>

        <BtnContent>
          <Button
            onClick={() => console.log('hello')}
            text="Continue"
            disabled={selectedPokemon?.hasOwnProperty('text') ? false : true}
          />
        </BtnContent>
        <Pagination
          isPreviousActive={pokemonState.data.previous === null ? false : true}
          onClickNext={() => setPage(pokemonState.data.next)}
          onClickPrevious={() => setPage(pokemonState.data.previous)}
        />
      </div>
    </AppContainer>
  );
}

export default Pokemon;
