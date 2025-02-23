import React, { FC, useEffect, useState } from 'react';
import { fetchURL } from '@/api/index';
import { GitCard } from '@/components/GitCard';
import { SearchField } from '@/components/SearchField';
import { SwitchThemes } from '@/components/SwitchThemes';
import { useTheme } from '@/hooks/useTheme';

export const Settings: FC = () => {
  const { theme } = useTheme();
  const [userData, setUserData] = useState<{ login: string; avatar_url: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const savedUserData = localStorage.getItem('userData');
    if (savedUserData) {
      setUserData(JSON.parse(savedUserData));
    }
  }, []);

  const handleSearch = (userName: string) => {
    fetchURL(userName, setUserData, setError);
  };

  return (
    <div style={{ backgroundColor: theme.bgColor, color: theme.textColor }}>
      <SwitchThemes />
      <SearchField onSearch={handleSearch} />
      {error ? (
        <p>{error}</p>
      ) : (
        userData && <GitCard login={userData.login} userUrl={userData.avatar_url} />
      )}
    </div>
  );
};
