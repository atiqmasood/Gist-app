import * as React from "react";
import Chip from "@mui/material/Chip";

export default function CustomChip({ label, variant, size }) {
  return (
    <Chip
      label={label}
      variant={variant ?? "filled"}
      size={size ?? "small"}
      color="info"
    />
  );
}
