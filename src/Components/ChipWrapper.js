import * as React from "react";
// MATERIAL UI
import Stack from "@mui/material/Stack";
// CORE COMPONENT
import CustomChip from "./CustomChip";

export default function ChipWrapper({ spacing, direction, gistFiles }) {
  const files = gistFiles ? Object.keys(gistFiles) : [];
  const noOfFiles = files?.length;
  return (
    <React.Fragment>
      <div>{noOfFiles <= 1 ? `${noOfFiles} File` : `${noOfFiles} Files`}</div>
      <Stack spacing={spacing ?? 1} direction={direction ?? "row"}>
        {noOfFiles > 0 &&
          files.map((file, index) => (
            <CustomChip key={index} label={gistFiles?.[file]?.language} />
          ))}
      </Stack>
    </React.Fragment>
  );
}
