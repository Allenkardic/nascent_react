import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { Home } from '..';
import { store } from '../../services';
import 'jest-styled-components';

test('it renders Home page correctly', () => {
  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Provider>,
  );
  expect(container).toMatchSnapshot();
});
