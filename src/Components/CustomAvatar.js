import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import styled from "styled-components";

const ForkWrapper = styled.div`
  margin-top: 1rem:
`;

export default function CustomAvatar({ list }) {
  const forks = list?.length > 3 ? list.splice(0, 3) : list;
  return (
    <ForkWrapper>
      <h3>Forks</h3>
      <Stack direction="row" spacing={2}>
        {forks?.length > 0 ? (
          forks.map((fork) => (
            <Avatar
              key={fork.id}
              alt={fork?.user?.login}
              src={fork?.user?.avatar_url}
            />
          ))
        ) : (
          <div>No fork found</div>
        )}
      </Stack>
    </ForkWrapper>
  );
}
