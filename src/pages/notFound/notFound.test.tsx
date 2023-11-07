import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { NotFound } from '..';
import { store } from '../../services';
import 'jest-styled-components';

test('it renders NotFound page correctly', () => {
  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    </Provider>,
  );
  expect(container).toMatchSnapshot();
});
