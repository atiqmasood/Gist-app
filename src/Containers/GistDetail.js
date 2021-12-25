import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import ChipWrapper from "../Components/ChipWrapper";
import { connect } from "react-redux";
import { loadGistDetail } from "../Redux/Actions/GistActions";
import Loader from "../Components/Loader";
import { Container } from "@mui/material";
import styled from "styled-components";
import CustomAvatar from "../Components/CustomAvatar";

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

function GistDetail({ gistDetail, isLoading, loadGistDetail }) {
  const params = useParams();

  React.useEffect(() => {
    loadGistDetail(params?.id);
  }, []);

  return (
    <Container sx={{ mt: 10 }}>
      {isLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              {gistDetail?.description}
            </Typography>
            <ChipWrapper gistFiles={gistDetail?.files} />
            <CustomAvatar list={gistDetail?.forks ?? []} />
          </CardContent>
        </Card>
      )}
    </Container>
  );
}
const mapStateToProps = (state) => ({
  gistDetail: state.Gist.gistDetail,
  isLoading: state.Gist.isDetailLoading,
});
export default connect(mapStateToProps, { loadGistDetail })(GistDetail);
