import React, { useContext } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
// External libraries
import { Drawer, Typography, Box, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import styled from "styled-components";
import { useTranslation } from "next-i18next";
// Styles
import { colors } from "@/styles/themes/colors";
// Data
import { links } from "@/modules/portfolio/data";
import { UIContext } from "../context";

export const Sidebar = () => {
  //******* Hooks *******//

  const { t } = useTranslation("common");
  const {
    state: { openSidebar },
    setToggleSidebar,
  } = useContext(UIContext);
  const router = useRouter();

  //******* Methods ********//

  const onCloseSidebarAndNavigate = (url: string) => {
    setToggleSidebar();
    router.push(url);
  };

  //******* Renders *******//

  return (
    <Drawer
      sx={{ display: { xs: "flex", md: "none" } }}
      open={openSidebar}
      onClose={setToggleSidebar}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
          borderBottom: `2px solid ${colors.primary}`,
        }}
      >
        <Typography
          sx={{
            textShadow: `1px 1px 10px ${colors.primary}`,
            color: "white",
          }}
        >
          GvbDeveloper
        </Typography>
        <IconButton type="button" onClick={setToggleSidebar}>
          <Close />
        </IconButton>
      </Box>
      <SLinks textColor={colors.primary}>
        {links.map((link) => (
          <li key={link.id}>
            <button
              type="button"
              onClick={() => onCloseSidebarAndNavigate(link.url)}
            >
              {t(link.translate)}
            </button>
          </li>
        ))}
      </SLinks>
    </Drawer>
  );
};

interface Props {
  textColor: string;
}

const SLinks = styled.ul<Props>`
  padding: 0;
  margin: 0;
  & li button {
    min-width: 250px;
    padding: 15px 10px;
    color: ${(props) => props.textColor};
    text-shadow: 1px 1px 10px ${(props) => props.textColor};
    text-align: left;
    background-color: transparent;
    border: none;
    list-style: none;
    cursor: pointer;
    transition: all 500ms;
    &:hover {
      color: white;
      text-shadow: 1px 1px 10px white;
      background-color: ${(props) => props.textColor};
    }
  }
`;
