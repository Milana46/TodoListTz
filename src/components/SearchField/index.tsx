import React, { ChangeEvent, FC, useState } from 'react';

import { Input, InputWrapper, Label, SearchButton, SearchContainer } from './styled';

interface SearchFieldProps {
  onSearch: (username: string) => void;
}

export const SearchField: FC<SearchFieldProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <SearchContainer>
      <Label>GitHub info</Label>
      <InputWrapper>
        <Input type="text" placeholder="Search name..." value={query} onChange={handleChange} />
        <SearchButton onClick={handleSearch}>Search</SearchButton>
      </InputWrapper>
    </SearchContainer>
  );
};
