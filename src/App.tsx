import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Navigation } from './components/Navigation';
import { ROUTERS } from './constants/constantsRouter';
import { ThemeProvider } from './context/themeContext';
import { ErrorBoundary } from './error/ErrorBoundary';
import { getComponentByKey } from './helpers/getComponentByKey';
import { GlobalStyle } from './styles/globalStyle';

type RouteKey = keyof typeof ROUTERS;

export function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <ErrorBoundary>
        <Router>
          <Navigation />
          <Routes>
            {Object.entries(ROUTERS).map(([key, path]) => (
              <Route key={key} path={path} element={getComponentByKey(key as RouteKey)} />
            ))}
          </Routes>
        </Router>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
