import React, { useContext } from "react";
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
// Data
import { links } from "@/modules/portfolio/data";
// Themes
import { colors } from "@/styles/themes";
// Hooks
import { useNavbar } from "../hooks";
import { UIContext } from "../context";

export const Navbar = () => {
  //******** Hooks ********//

  const { menuActive, language, onNavigateTo, onChangeLanguage } = useNavbar();
  const { setToggleSidebar } = useContext(UIContext);
  const { t } = useTranslation("common");

  //******** Renders ********/

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box display="flex" alignItems="center" gap={1}>
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
          <IconButton
            type="button"
            sx={{ display: { xs: "flex", md: "none" } }}
            size="medium"
            edge="start"
            color="info"
            onClick={setToggleSidebar}
          >
            <Menu />
          </IconButton>
          <Box sx={{ display: { xs: "none", md: "flex" } }} gap={2}>
            {links.map((link) => (
              <Button
                key={link.id}
                sx={{ boxShadow: `0px 0px 5px 1px ${colors.primary}` }}
                variant={menuActive === link.menu ? "contained" : "outlined"}
                type="button"
                color="info"
                onClick={() => onNavigateTo(link.url)}
              >
                {t(link.translate)}
              </Button>
            ))}
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
