import React, { useState } from "react";
import { useRouter } from "next/router";
// External libraries
import {
  AppBar,
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu, Work, Language } from "@mui/icons-material";
import { useTranslation } from "next-i18next";
// Themes
import { colors } from "@/styles/themes";
// Hooks
import { useNavbar } from "../hooks";

export const Navbar = () => {
  //******** Hooks ********//

  const { menuActive, language, onNavigateTo, onChangeLanguage } = useNavbar();
  const { t } = useTranslation("common");

  //******** Renders ********/

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box display="flex" alignItems="center" gap={1}>
            <IconButton
              sx={{ display: { xs: "flex", md: "none" } }}
              size="medium"
              edge="start"
              color="info"
            >
              <Menu />
            </IconButton>
            <Box
              sx={{
                p: 1,
                display: "flex",
                alignItems: "center",
                gap: 1,
                border: `1px solid ${colors.primary}`,
                borderRadius: 2,
              }}
            >
              <Work color="info" />
              <Typography
                sx={{ textShadow: `1px 1px 10px ${colors.primary}` }}
                color="primary.main"
                variant="body1"
                component="div"
              >
                GvbDeveloper
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }} gap={2}>
            <Button
              sx={{ boxShadow: `0px 0px 5px 1px ${colors.primary}` }}
              variant={menuActive === "" ? "contained" : "outlined"}
              type="button"
              color="info"
              onClick={() => onNavigateTo("/")}
            >
              {t("menu_about")}
            </Button>
            <Button
              sx={{ boxShadow: `0px 0px 5px 1px ${colors.primary}` }}
              variant={menuActive === "projects" ? "contained" : "outlined"}
              type="button"
              color="info"
              onClick={() => onNavigateTo("/projects")}
            >
              {t("menu_projects")}
            </Button>
            <Button
              sx={{ boxShadow: `0px 0px 5px 1px ${colors.primary}` }}
              variant={menuActive === "skills" ? "contained" : "outlined"}
              type="button"
              color="info"
              onClick={() => onNavigateTo("/skills")}
            >
              {t("menu_skills")}
            </Button>
            <Button
              sx={{ boxShadow: `0px 0px 5px 1px ${colors.primary}` }}
              variant={menuActive === "contact" ? "contained" : "outlined"}
              type="button"
              color="info"
              onClick={() => onNavigateTo("/contact")}
            >
              {t("menu_contact")}
            </Button>
            <FormControl size="small">
              <InputLabel>
                <Language color="info" />
              </InputLabel>
              <Select
                value={language}
                label="abc"
                variant="outlined"
                color="info"
                onChange={(e) => onChangeLanguage(e.target.value)}
              >
                <MenuItem value="__">
                  <Typography color="primary.main"></Typography>
                </MenuItem>
                <MenuItem value="en-US">
                  <Typography color="primary.main">EN</Typography>
                </MenuItem>
                <MenuItem value="es">
                  <Typography color="primary.main">ES</Typography>
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
