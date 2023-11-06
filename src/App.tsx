import isPropValid from '@emotion/is-prop-valid';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { StyleSheetManager } from 'styled-components';

import AppRoute from './routes';
import { store } from './services/store';
import './assets/fonts/Moderat-Medium.ttf';
import './assets/fonts/Moderat-Bold.ttf';
import './assets/fonts/Millik.ttf';

function App() {
  return (
    <>
      <StyleSheetManager shouldForwardProp={prop => isPropValid(prop)}>
        <Provider store={store}>
          <BrowserRouter>
            <AppRoute />
          </BrowserRouter>
        </Provider>
      </StyleSheetManager>
    </>
  );
}

export default App;
