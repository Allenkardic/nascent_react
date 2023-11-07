import { useNavigate } from 'react-router-dom';

import { AppContainer } from '../../atoms';
import { Button, HistoryCard } from '../../components';
import { useAppSelector } from '../../services/redux-hooks';
import { Dictionary } from '../../types';
import { getRouteNameByStepper, routesPath } from '../../utils';

import { BtnContent } from './style';

const { HOME } = routesPath;

const processFlowData = [
  {
    text: 'User details',
    isActive: true,
  },
  {
    text: 'Pokemon',
    isActive: true,
  },
  {
    text: 'Review',
    isActive: true,
  },
];

function History() {
  const navigate = useNavigate();

  const savedPokemonState = useAppSelector(state => state.savedPokemon);

  const onClick = ({ id, step }: Dictionary) => {
    navigate(getRouteNameByStepper(step), { state: { id } });
  };

  return (
    <AppContainer navHeaderText="Bookmarked" processFlowData={processFlowData}>
      <div>
        {savedPokemonState?.data.map((item, index) => (
          <div key={index}>
            <HistoryCard items={item} onClick={() => onClick(item)} />
          </div>
        ))}

        <BtnContent>
          <Button text="Home" onClick={() => navigate(HOME)} />
        </BtnContent>
      </div>
    </AppContainer>
  );
}

export default History;
