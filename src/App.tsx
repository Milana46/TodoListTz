import React, { JSX } from 'react';
import { ThemeProvider } from 'styled-components';
import { baseTheme } from 'styles/theme';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { ROUTERS } from './public/constants';
import { Home } from './pages/Home';
import { Settings } from './pages/Settings';
import { GlobalStyle } from './styles/globalStyle';

type RouteKey = keyof typeof ROUTERS;

function App() {
  return (
    <>
      <ThemeProvider theme={baseTheme}>
        <GlobalStyle />
        <Router>
          <Navigation />
          <Routes>{listOfRoutes}</Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

const listOfRoutes = Object.entries(ROUTERS).map(([key, path]) => (
  <Route key={key} path={path} element={getComponentByKey(key as RouteKey)} />
));

function getComponentByKey(key: RouteKey): JSX.Element {
  const components: Record<RouteKey, JSX.Element> = {
    home: <Home />,
    settings: <Settings />,
  };
  return (
    components[key] || (
      <section>
        <h1>404 Not Found</h1>
        <p>The page you are looking for does not exist.</p>
      </section>
    )
  );
}

export default App;
