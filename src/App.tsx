import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import { baseTheme } from '././styles/theme';
import { Navigation } from './components/Navigation';
import { ROUTERS } from './constants/constantsRouter';
import { ErrorBoundary } from './error/Error';
import { getComponentByKey } from './helpers/getComponentByKey';

type RouteKey = keyof typeof ROUTERS;

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={baseTheme}>
        <Router>
          <Navigation />
          <Routes>{listOfRoutes}</Routes>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

const listOfRoutes = Object.entries(ROUTERS).map(([key, path]) => (
  <Route key={key} path={path} element={getComponentByKey(key as RouteKey)} />
));

export default App;
