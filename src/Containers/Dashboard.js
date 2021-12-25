import React from "react";
import styled from "styled-components";
// MATERIAL UI
import Container from "@mui/material/Container";
// CORE COMPONENT
import SearchInput from "../Components/SearchInput";
import CustomList from "../Components/CustomList";
import { connect } from "react-redux";
import { loadAllGists } from "../Redux/Actions/GistActions";
import Loader from "../Components/Loader";

// styled component for css
const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

// styled component for css
const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

// home dashboard
function Dashboard({ loadAllGists, gistList, isLoading, filterUsername }) {
  // search for gist
  function onSearch(username) {
    loadAllGists(username);
  }

  return (
    <Container>
      <SearchWrapper>
        <SearchInput onSearch={onSearch} />
      </SearchWrapper>
      <ListWrapper>
        {isLoading ? (
          <Loader />
        ) : gistList?.length > 0 ? (
          <CustomList list={gistList} />
        ) : (
          <div>
            {filterUsername
              ? `No gist found for username ${filterUsername}`
              : ""}
          </div>
        )}
      </ListWrapper>
    </Container>
  );
}
const mapStateToProps = (state) => ({
  gistList: state.Gist.gists,
  isLoading: state.Gist.isLoading,
  filterUsername: state.Gist.username,
});
export default connect(mapStateToProps, { loadAllGists })(Dashboard);
