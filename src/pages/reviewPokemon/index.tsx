import { useNavigate, useLocation } from 'react-router-dom';

import { Review, AppContainer } from '../../atoms';
import { ReviewDataIProps } from '../../atoms/review';
import { useAppSelector } from '../../services/redux-hooks';
import { routesPath, showMessage } from '../../utils';
const { HISTORY } = routesPath;

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
  const navigate = useNavigate();

  const location = useLocation();

  const savedPokemonState = useAppSelector(state => state.savedPokemon);

  const id = location?.state?.id;

  const currentData = savedPokemonState.data.filter(el => el.id === id);

  const updateArray: ReviewDataIProps[] = [
    {
      id: 1,
      text: currentData[0]?.name,
      helperText: 'Pokemon',
    },
    {
      id: 2,
      text: currentData[0]?.firstName,
      helperText: 'First name',
    },
    {
      id: 3,
      text: currentData[0]?.lastName,
      helperText: 'Last name',
    },
    {
      id: 4,
      text: currentData[0]?.tel,
      helperText: 'Phone number',
    },
    {
      id: 5,
      text: currentData[0]?.address,
      helperText: 'Address',
    },
  ];

  const handleContinue = () => {
    showMessage({
      type: 'success',
      message: 'Completed successfully',
    });
    navigate(HISTORY);
  };

  return (
    <AppContainer navHeaderText="Review" processFlowData={processFlowData} secondaryView>
      <div>
        <Review
          image={currentData[0]?.image}
          data={updateArray}
          date={new Date().toDateString()}
          onClickDone={handleContinue}
        />
      </div>
    </AppContainer>
  );
}

export default ReviewPokemon;
