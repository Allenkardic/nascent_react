import { useState, useLayoutEffect } from 'react';

import { useNavigate, useLocation } from 'react-router-dom';

import { Review, AppContainer } from '../../atoms';
import { ReviewDataIProps } from '../../atoms/review';
import { useAppDispatch, useAppSelector } from '../../services/redux-hooks';
import { routesPath, showMessage } from '../../utils';
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

function ReviewPokemon() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const location = useLocation();

  const [data, setData] = useState<ReviewDataIProps[]>([]);
  const savedPokemonState = useAppSelector(state => state.savedPokemon);

  const { id } = location.state;

  useLayoutEffect(() => {
    const currentData = savedPokemonState.data.filter(el => el.id === id);
    const { address, firstName, lastName, name, tel } = currentData[0];
    const updateArray = [
      {
        id: 1,
        text: name,
        helperText: 'Name',
      },
      {
        id: 2,
        text: firstName,
        helperText: 'First name',
      },
      {
        id: 3,
        text: lastName,
        helperText: 'Last name',
      },
      {
        id: 4,
        text: tel,
        helperText: 'Phone number',
      },
      {
        id: 5,
        text: address,
        helperText: 'Address',
      },
    ];
    setData(updateArray);
  }, []);

  const handleContinue = () => {
    showMessage({
      type: 'success',
      message: 'Item saved successfully',
    });
    navigate(HOME);
  };

  return (
    <AppContainer navHeaderText="Review" processFlowData={processFlowData}>
      <div>
        <Review data={data} date={new Date().toDateString()} onClickDone={handleContinue} />
      </div>
    </AppContainer>
  );
}

export default ReviewPokemon;
