import React, { useState } from "react";
import { SwitchThemes } from "../components/SwitchThemes";
import { SearchField } from "../components/SearchField";
import { GitCard } from "../components/GitCard";

export const Settings: React.FC = () => {
  const [theme, setTheme] = useState("light");
  const [query, setQuery] = useState("");

  return (
    <>
      <SwitchThemes theme={theme} onChangeTheme={setTheme} />
      <SearchField onSearch={(searchValue) => setQuery(searchValue)} />
       <GitCard login={"IvanovIvan"} userUrl={"https://assets.techrepublic.com/uploads/2022/08/clone-github-repository.jpeg"}></GitCard> 
    </>
  );
};
