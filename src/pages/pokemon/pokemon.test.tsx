import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { Pokemon } from '..';
import { store } from '../../services';
import 'jest-styled-components';

test('it renders correctly', () => {
  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Pokemon />
      </BrowserRouter>
    </Provider>,
  );
  expect(container).toMatchSnapshot();
});
