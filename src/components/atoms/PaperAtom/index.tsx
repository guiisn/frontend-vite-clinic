import { Paper } from "@mui/material";
import React from "react";

interface PaperAtomProps {
  children: React.ReactElement;
  size?: "100%" | "50%" | "75%" | "35%" | "25%" | string;
  padding?: 4 | number;
}

export default function PaperAtom({
  children,
  size,
  padding = 4,
}: PaperAtomProps) {
  return (
    <Paper
      sx={{ width: `${size}`, padding: padding, borderRadius: "25px" }}
      elevation={3}
    >
      {children}
    </Paper>
  );
}
