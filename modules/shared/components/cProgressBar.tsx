import React, { FC } from "react";
// External libraries
import { Box, LinearProgress, Typography } from "@mui/material";
// Themes
import { colors } from "@/styles/themes";

interface Props {
  title: string;
  value: number;
}

export const ProgressBar: FC<Props> = ({ title, value }) => {
  return (
    <Box
      sx={{
        mb: 1,
        display: "flex",
        alignItems: "center",
        gap: 1,
      }}
    >
      <Typography sx={{ width: 150 }} color="primary.main">
        {title}
      </Typography>
      <Box sx={{ width: "100%" }}>
        <LinearProgress
          sx={{
            height: 10,
            borderRadius: 5,
            backgroundColor: "primary.main",
            boxShadow: `0px 0px 5px 2px ${colors.primary}`,
          }}
          color="secondary"
          classes={{ barColorPrimary: "info.main" }}
          variant="determinate"
          value={value}
        />
      </Box>
    </Box>
  );
};
