import { useState, useEffect } from 'react';

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

  const [data, setData] = useState<ReviewDataIProps[]>([]);
  const [imageSrc, setImageSrc] = useState('');
  const savedPokemonState = useAppSelector(state => state.savedPokemon);

  const id = location?.state?.id;

  useEffect(() => {
    const currentData = savedPokemonState.data.filter(el => el.id === id);

    const updateArray = [
      {
        id: 1,
        text: currentData[0]?.firstName,
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

    setData(updateArray);
    setImageSrc(currentData[0]?.image);
  }, []);

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
        <Review image={imageSrc} data={data} date={new Date().toDateString()} onClickDone={handleContinue} />
      </div>
    </AppContainer>
  );
}

export default ReviewPokemon;
