import isPropValid from '@emotion/is-prop-valid';
import { BrowserRouter } from 'react-router-dom';
import { StyleSheetManager } from 'styled-components';

import AppRoute from './routes';
import './assets/fonts/Moderat-Medium.ttf';
import './assets/fonts/Moderat-Bold.ttf';
import './assets/fonts/Millik.ttf';

function App() {
  return (
    <>
      <StyleSheetManager shouldForwardProp={prop => isPropValid(prop)}>
        <BrowserRouter>
          <AppRoute />
        </BrowserRouter>
      </StyleSheetManager>
    </>
  );
}

export default App;
