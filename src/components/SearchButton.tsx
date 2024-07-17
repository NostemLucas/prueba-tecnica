import React from "react";
import { IconButton, InputBase, Paper } from "@mui/material";
import { Search } from "@mui/icons-material";

export interface SearchButtonProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  placeholder: string;
}
const SearchButton = ({
  value,
  onChange,
  name,
  placeholder,
}: SearchButtonProps) => {
  return (
    <Paper
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
        borderRadius: "0.5rem",
      }}
    >
      <InputBase
        value={value}
        onChange={onChange}
        name={name}
        sx={{ ml: 1, flex: 1 }}
        placeholder={placeholder}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <Search />
      </IconButton>
    </Paper>
  );
};
export default SearchButton;
