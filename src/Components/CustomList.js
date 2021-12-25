import * as React from "react";
import styled from "styled-components";
// MATERIAL UI
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ChipWrapper from "./ChipWrapper";
import { Link } from "react-router-dom";

const StyledList = styled(List)`
  margin-top: 0px;
  margin-bottom: 0px;
`;
const StyleListItem = styled(ListItem)`
  background: #fff;
  margin-bottom: 1rem;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
`;
const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;
`;
const ItemButton = styled(ListItemButton)`
  display: block !important;
`;

export default function CustomList({ list }) {
  return (
    <StyledList>
      {list.map((gist) => (
        <StyledLink key={gist.id} to={`/detail/${gist.id}`}>
          <StyleListItem disablePadding>
            <ItemButton>
              <ListItemText primary={gist?.description} />
              <ChipWrapper gistFiles={gist?.files} />
            </ItemButton>
          </StyleListItem>
        </StyledLink>
      ))}
    </StyledList>
  );
}
