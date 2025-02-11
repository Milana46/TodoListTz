import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { baseTheme } from 'styles/theme';

import { Navigation } from './components/Navigation';
import { ROUTERS } from './public/constants';
import { GlobalStyle } from './styles/globalStyle';
import { getComponentByKey } from './helpers/getComponentByKey';

type RouteKey = keyof typeof ROUTERS;

function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      <GlobalStyle />
      <Router>
        <Navigation />
        <Routes>{listOfRoutes}</Routes>
      </Router>
    </ThemeProvider>
  );
}

const listOfRoutes = Object.entries(ROUTERS).map(([key, path]) => (
  <Route key={key} path={path} element={getComponentByKey(key as RouteKey)} />
));

export default App;
