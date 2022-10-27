import React, { useEffect, useState } from "react";
// External libraries
import { Box, Tabs, Tab, Typography, Chip } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "next-i18next";
// Themes
import { colors } from "@/styles/themes";
// Components
import { ProjectsPanel } from "./cProjectsPanel";

const tags = ["All", "HTML", "CSS", "Responsive", "React", "NextJS", "Angular"];

export const Projects = () => {
  //******** Hooks ********//

  const [value, setValue] = React.useState(0);
  const isMobile = useMediaQuery({ minWidth: 0, maxWidth: 600 });
  const [isVerticalMenu, setIsVerticalMenu] = useState<
    "vertical" | "horizontal"
  >("vertical");
  const { t } = useTranslation("common");

  //******** Methods ********//

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  //******** Effects ********//

  useEffect(() => {
    if (isMobile) {
      setIsVerticalMenu("horizontal");
    } else {
      setIsVerticalMenu("vertical");
    }
  }, [isMobile]);

  //******** Renders ********//

  return (
    <>
      <Typography sx={{ mb: 4, maxWidth: 800 }} color="primary.main">
        {t("project_text") + " "}
        <a href="https://devchallenges.io" target="_blank" rel="noreferrer">
          <Chip
            sx={{ color: "primary.main", cursor: "pointer" }}
            color="info"
            label="https://devchallenges.io/"
            component="span"
          />
        </a>
      </Typography>
      <Box
        sx={{
          display: { xs: "block", sm: "flex" },
        }}
      >
        <Box
          sx={{
            mr: { sm: 4 },
            mb: { xs: 4, sm: 0 },
          }}
        >
          <Tabs
            orientation={isVerticalMenu}
            variant="scrollable"
            value={value}
            onChange={handleChange}
            scrollButtons="auto"
            allowScrollButtonsMobile
            sx={{
              borderRight: { xs: 0, sm: 1 },
              borderBottom: { xs: 1, sm: 0 },
              borderColor: colors.primary,
            }}
          >
            {tags.map((tag) => (
              <Tab
                sx={{ textShadow: `1px 1px 10px ${colors.primary}` }}
                key={tag}
                label={tag}
              />
            ))}
          </Tabs>
        </Box>
        <ProjectsPanel tag={tags[value]} />
      </Box>
    </>
  );
};
