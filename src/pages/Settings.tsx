import React, { useEffect, useState } from 'react';
import { GitCard } from '../components/GitCard';
import { SearchField } from '../components/SearchField';
import { SwitchThemes } from '../components/SwitchThemes';

export const Settings: React.FC = () => {
  const [theme, setTheme] = useState('light');
  const [userData, setUserData] = useState<{ login: string; avatar_url: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const savedUserData = localStorage.getItem('userData');
    if (savedUserData) {
      setUserData(JSON.parse(savedUserData));
    }
  }, []);

  const fetchURL = async (userName: string) => {
    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);
      if (!response.ok) {
        throw new Error('User is not found!');
      }
      const data = await response.json();
      const user = { login: data.login, avatar_url: data.avatar_url };
      
      localStorage.setItem('userData', JSON.stringify(user));
      
      setUserData(user);
    } catch (err) {
      setError('User is not found!');
    }
  };

  return (
    <>
      <SwitchThemes theme={theme} onChangeTheme={setTheme} />
      <SearchField onSearch={fetchURL} />
      {error ? (
        <p>{error}</p>
      ) : (
        userData && <GitCard login={userData.login} userUrl={userData.avatar_url} />
      )}
    </>
  );
};
