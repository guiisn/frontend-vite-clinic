import { Typography } from "@mui/material";

interface SubtitleTextProps {
  color: "secondary.contrastText";
  variant: "subtitle1" | "subtitle2";
  children: string;
}

export default function SubtitleText({
  color,
  variant,
  children,
}: SubtitleTextProps) {
  return (
    <Typography color={color} variant={variant}>
      {children}
    </Typography>
  );
}
