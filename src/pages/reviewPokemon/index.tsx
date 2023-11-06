import { useNavigate } from 'react-router-dom';

import { Review, AppContainer } from '../../atoms';
import { routesPath } from '../../utils';

const { HOME } = routesPath;

function ReviewPokemon() {
  const navigate = useNavigate();

  // const location = useLocation();

  // const { previousPage } = location.state;

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

  return (
    <AppContainer navHeaderText="Review" processFlowData={processFlowData}>
      <div>
        <Review
          data={data}
          date="15:50, July 10th, 2023"
          onClickDownload={() => {
            console.log('hello');
          }}
          onClickDone={() => navigate(HOME)}
        />
      </div>
    </AppContainer>
  );
}

export default ReviewPokemon;
