import TextField from "@mui/material/TextField";

import { ChangeEvent, KeyboardEvent, useState } from "react";


import type { ISearchInput } from "./SearchInput";

const SearchInput = ({ label, keyPressAction }: ISearchInput) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value);
  const handleKeyPress = ({ key } :KeyboardEvent<HTMLInputElement>) => {
    if(key === "Enter"){
      keyPressAction(value);
      setValue('');
    }
  }

  return (
    <TextField 
      sx={{ width: "100%" }} 
      id="outlined-basic"
      label={label}
      variant="outlined"
      value={value}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
    />
  );
};

export default SearchInput;