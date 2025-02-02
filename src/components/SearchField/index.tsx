import React, { FC, useState } from "react";
import { SearchContainer, InputWrapper, Input, Label, SearchButton } from "./style";
//import search from "../../icons/search.png";

interface SearchFieldProps {
    onSearch: (username: string) => void;
}

export const SearchField: FC<SearchFieldProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <SearchContainer>
      <Label>GitHub info</Label>
      <InputWrapper>
        <Input
          type="text"
          placeholder="Search name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <SearchButton onClick={handleSearch}></SearchButton>
      </InputWrapper>
    </SearchContainer>
  );
};
