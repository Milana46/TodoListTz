import React, { JSX } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Navigation } from './components/Navigation';
import { ROUTERS } from './constants';
import { Home } from './pages/Home';
import { Settings } from './pages/Settings';
import { ErrorBoundary } from './error/Error';

type RouteKey = keyof typeof ROUTERS;

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Navigation />
        <Routes>{listOfRoutes}</Routes>
      </Router>
    </ErrorBoundary>
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
  return components[key] || <div>404 Not Found</div>;
}

export default App;
