import React from "react";
import Image from "next/image";
// External libraries
import styled from "styled-components";
import { Box, Grid, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
// Components
import { TechIcons } from "./cTechIcons";
// Images
import HeroImg from "@/public/assets/images/hero2.jpg";
// Themes
import { colors } from "@/styles/themes";

export const Hero = () => {
  //******** Hooks ********//

  const { t } = useTranslation("common");

  //******** Renders ********//

  return (
    <SHero>
      <Image layout="fill" src={HeroImg} alt="hero" objectFit="cover" />
      <Grid sx={{ height: "400px", position: "absolute" }} container>
        <Grid
          sx={{ display: "flex", alignItems: "center" }}
          item
          xs={12}
          sm={6}
        >
          <Box sx={{ pl: 2, py: 1 }}>
            <Typography
              sx={{
                color: "primary.main",
                textShadow: `1px 1px 10px ${colors.primary}`,
                fontSize: { xs: "2rem", md: "3.5rem" },
              }}
            >
              {t("title_7")}
            </Typography>
            <Typography
              sx={{
                color: "primary.main",
                textShadow: `1px 1px 10px ${colors.primary}`,
              }}
            >
              {t("title_8")}
            </Typography>
          </Box>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          item
          xs={12}
          sm={6}
        >
          <TechIcons />
        </Grid>
      </Grid>
    </SHero>
  );
};

//******** Styles ********//

export const SHero = styled.section`
  width: 100%;
  height: 400px;
  position: relative;
`;
