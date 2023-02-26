import { Typography } from "@mui/material";

export const LabelComponent = ({
  children,
  labelColor,
}: {
  children: string;
  labelColor?: string;
}) => (
  <Typography color={labelColor} variant="body1">
    {children}
  </Typography>
);
