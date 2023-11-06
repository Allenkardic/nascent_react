import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { AppContainer } from '../../atoms';
import { PokemonCard, Pagination, Button, SearchInput } from '../../components';
import { PokemonCardIProps } from '../../components/pokemonCard';
import { useAppDispatch, useAppSelector } from '../../services/redux-hooks';
import { pokemonRequest, pokemonReset, singlPokemonRequest, singlPokemonReset } from '../../services/slice';
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

const { REVIEWPOKEMON } = routesPath;
function Pokemon() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [page, setPage] = useState(0);
  const [selectedPokemon, setSelectedPokemon] = useState({});
  const [data, setData] = useState<PokemonCardIProps[]>([]);
  const [searchValue, setSearchValue] = useState('');
  // redux state
  const pokemonState = useAppSelector(state => state.pokemon);
  const { status: pokemonStatus } = pokemonState;

  const singlePokemonState = useAppSelector(state => state.singlePokemon);
  const { status: singlePokemonStatus } = singlePokemonState;

  useEffect(() => {
    dispatch(pokemonRequest({ page: page, name: searchValue }));
  }, [searchValue, page]);

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

  // single pokemon
  useEffect(() => {
    if (singlePokemonStatus === 'succeeded') {
      const updatedList: PokemonCardIProps[] = [];
      singlePokemonState.data.data.forEach((item: Dictionary) => {
        updatedList.push({
          isActive: false,
          text: item.name,
          imgSrc: item?.sprites?.other?.home?.front_default,
        });
      });
      setData(updatedList);

      dispatch(singlPokemonReset());
    }
  }, [singlePokemonState]);

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

  const handleOnSearch = () => {
    dispatch(singlPokemonRequest({ name: searchValue }));
  };

  return (
    <AppContainer secondaryView={true} navHeaderText="Select Pokemon" processFlowData={processFlowData}>
      <div style={{ border: '1px solid red' }}>
        <SearchInput
          name="searchValue"
          value={searchValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e?.target?.value)}
          onClickSearch={handleOnSearch}
        />

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
            onClick={() => navigate(REVIEWPOKEMON)}
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
