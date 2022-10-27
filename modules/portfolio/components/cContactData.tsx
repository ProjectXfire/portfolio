import React from "react";
// External libraries
import { Box, Typography } from "@mui/material";
import { Email, Phone } from "@mui/icons-material";
// Themes
import { colors } from "@/styles/themes";

export const ContactData = () => {
  //******** Renders ********//

  return (
    <>
      <Box
        sx={{ p: 1, border: `1px solid ${colors.primary}`, borderRadius: 2 }}
      >
        <Typography color="primary.main">Gabriel Vargas Bravo</Typography>
        <Typography
          sx={{ fontWeight: 500 }}
          color="secondary.main"
          variant="body2"
        >
          Front-End Developer
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          p: 1,
          border: `1px solid ${colors.primary}`,
          borderRadius: 2,
        }}
      >
        <Email color="secondary" />
        <Typography
          sx={{ overflow: "auto", fontSize: "0.8rem" }}
          color="primary.main"
        >
          gabriel.vargas.bravo@gmail.com
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          p: 1,
          border: `1px solid ${colors.primary}`,
          borderRadius: 2,
        }}
      >
        <Phone color="secondary" />
        <Typography sx={{ fontSize: "0.8rem" }} color="primary.main">
          (+011) 51 990 994 750
        </Typography>
      </Box>
    </>
  );
};
