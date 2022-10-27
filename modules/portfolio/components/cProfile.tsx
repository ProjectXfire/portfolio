import React from "react";
// External libraries
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import { useTranslation } from "next-i18next";
// Components
import { TitleWithLine, MyCard } from "@/modules/shared/components";

export const Profile = () => {
  //******** Hooks ********//

  const { t } = useTranslation();

  //******** Renders ********//

  return (
    <Box sx={{ pl: { xs: 0, sm: 4 } }}>
      <TitleWithLine title={t("title_1")} />
      <Card
        sx={{
          display: "flex",
          mt: 5,
          paddingY: 4,
          paddingX: 2,
          gap: 2,
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
        }}
      >
        <CardMedia
          sx={{ width: 150, borderRadius: "50%" }}
          component="img"
          image="/assets/images/me.jpg"
          alt="my-photo"
        />
        <Box sx={{ display: "flex" }}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "0px !important",
            }}
          >
            <Typography color="primary.main">
              {t("about_hi")} 😄, {t("about_text_1")}{" "}
              <Chip
                sx={{ color: "primary.main" }}
                label="HTML"
                color="info"
                component="span"
              />
              {", "}
              <Chip
                sx={{ color: "primary.main" }}
                label="CSS"
                color="info"
                component="span"
              />{" "}
              {t("about_text_2")}{" "}
              <Chip
                sx={{ color: "primary.main" }}
                label="Javascript"
                color="info"
                component="span"
              />
              .
            </Typography>
            <Typography sx={{ mt: 1 }} color="primary.main">
              {t("about_text_3")}{" "}
              <Chip
                sx={{ color: "primary.main" }}
                label="React"
                color="info"
                component="span"
              />{" "}
              {t("about_text_4")}{" "}
              <Chip
                sx={{ color: "primary.main" }}
                label="Angular"
                color="info"
                component="span"
              />{" "}
              {t("about_text_5")}
            </Typography>
          </CardContent>
        </Box>
      </Card>
      <TitleWithLine title={t("title_2")} />
      <Grid sx={{ mb: 5 }} container spacing={2}>
        <Grid display="flex" item xs={12} sm={6}>
          <MyCard
            title={t("about_text_6")}
            text={t("about_text_8")}
            imgPath="/assets/images/hobbie_1.jpg"
          />
        </Grid>
        <Grid display="flex" item xs={12} sm={6}>
          <MyCard
            title={t("about_text_7")}
            text={t("about_text_9")}
            imgPath="/assets/images/hobbie_2.jpg"
          />
        </Grid>
      </Grid>
    </Box>
  );
};
