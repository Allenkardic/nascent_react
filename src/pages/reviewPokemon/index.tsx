import { useNavigate, useLocation } from 'react-router-dom';

import { Review, AppContainer } from '../../atoms';
import { useAppDispatch, useAppSelector } from '../../services/redux-hooks';
import { routesPath, showMessage } from '../../utils';

const { HOME } = routesPath;

function ReviewPokemon() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const location = useLocation();

  const savedPokemonState = useAppSelector(state => state.savedPokemon);

  const { id } = location.state;

  console.log(savedPokemonState, 'savedPokemonState');
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

  const data = [
    {
      id: 1,
      text: 'Successful',
      helperText: 'Status',
    },

    {
      id: 2,
      text: 'Data',
      helperText: 'Service',
    },

    {
      id: 3,
      text: 'MTN',
      helperText: 'Network Operator',
    },

    {
      id: 4,
      text: '234 81458810',
      helperText: 'Mobile Number',
    },

    {
      id: 5,
      text: '234848843890881458810',
      helperText: 'Transaction ref',
    },
  ];

  const handleContinue = () => {
    showMessage({
      type: 'success',
      message: 'Item saved successfully',
    });
    // navigate(HOME);
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
