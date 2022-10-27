import React, { FC } from "react";
// External libraries
import { Box, Divider, Typography } from "@mui/material";
// Themes
import { colors } from "@/styles/themes";

interface Props {
  title: string;
}

export const TitleWithLine: FC<Props> = ({ title }) => {
  return (
    <Box sx={{ my: 5, display: "flex", alignItems: "center", gap: 1 }}>
      <Divider sx={{ width: { xs: 50, sm: 200 }, borderColor: "info.main" }} />
      <Typography
        sx={{
          textShadow: `1px 1px 10px ${colors.primary}`,
          fontSize: { xs: "1.5rem", sm: "2rem" },
        }}
        color="primary.main"
      >
        {title}
      </Typography>
      <Divider sx={{ flexGrow: 1, borderColor: "info.main" }} />
    </Box>
  );
};
