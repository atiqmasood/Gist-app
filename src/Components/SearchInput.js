import React, { useState } from "react";
// MATERIAL UI
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

// search filter input
export default function SearchInput({ onSearch }) {
  const [searchValue, setSearch] = useState("");

  // onchange handler
  function onChange(e) {
    setSearch(e.target?.value);
  }

  // filter for username
  function onSubmit() {
    onSearch(searchValue);
  }
  // on enter press search
  function onEnterPress(e) {
    if (e.keyCode === 13) {
      onSearch(searchValue);
    }
  }
  return (
    <Paper
      component="div"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <InputBase
        onChange={onChange}
        value={searchValue}
        onKeyDown={onEnterPress}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Enter username, e.g atiqmasood"
        inputProps={{ "aria-label": "search google maps" }}
      />
      <IconButton onClick={onSubmit} sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
