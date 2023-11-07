import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { ReviewPokemon } from '..';
import { store } from '../../services';
import 'jest-styled-components';

test('it renders ReviewPokeman page correctly', () => {
  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <ReviewPokemon />
      </BrowserRouter>
    </Provider>,
  );
  expect(container).toMatchSnapshot();
});
