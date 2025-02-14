import React, { JSX } from 'react';
import { Home } from '@/pages/Home';
import { Settings } from '@/pages/Settings';
import { ROUTERS } from '@/public/constants';

type RouteKey = keyof typeof ROUTERS;

export function getComponentByKey(key: RouteKey): JSX.Element {
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
