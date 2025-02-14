import React, { useState } from 'react';

import { GitCard } from '../components/GitCard';
import { SearchField } from '../components/SearchField';
import { SwitchThemes } from '../components/SwitchThemes';
//import gitImage from '../images/git.png';

export const Settings: React.FC = () => {
  const [theme, setTheme] = useState('light');
  const [, setQuery] = useState('');

  return (
    <>
      <SwitchThemes theme={theme} onChangeTheme={setTheme} />
      <SearchField onSearch={(searchValue) => setQuery(searchValue)} />
      <GitCard login={'IvanovIvan'} userUrl={'../images/git.png'} />
    </>
  );
};
