import React, { FC } from "react";
// External libraries
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Tooltip,
  Typography,
} from "@mui/material";
import { useTranslation } from "next-i18next";
// Interfaces
import { IProject } from "../interfaces";
// Themes
import { colors } from "@/styles/themes";

interface Props {
  project: IProject;
}

export const ProjectCard: FC<Props> = ({ project }) => {
  //******** Hooks ********//

  const { t } = useTranslation("common");

  //******** Renders ********//

  return (
    <Card sx={{ maxWidth: 280 }}>
      <CardMedia
        component="img"
        height="140"
        image={project.image}
        alt={project.name}
      />
      <CardContent sx={{ height: 180 }}>
        <Typography variant="h5" color="info.main" component="div">
          {project.name}
        </Typography>
        <Typography variant="body2" color="primary.main">
          {project.description.length > 150
            ? `${project.description.slice(0, 170)}... `
            : project.description}
          {project.description.length > 150 && (
            <Tooltip title={project.description}>
              <Typography
                sx={{
                  color: "info.main",
                  borderBottom: `1px solid ${colors.primary}`,
                  fontSize: "0.8rem",
                }}
                variant="body2"
                component="span"
              >
                {t("project_btn_3")}
              </Typography>
            </Tooltip>
          )}
        </Typography>
      </CardContent>
      <CardActions sx={{ mb: 1 }}>
        <Link
          sx={{
            py: 0.5,
            px: 1,
            border: `1px solid ${colors.primary}`,
            borderRadius: 3,
            textShadow: `1px 1px 10px ${colors.primary}`,
          }}
          href={project.demo}
          target="_blank"
          underline="none"
        >
          {t("project_btn_2")}
        </Link>
        <Link
          sx={{
            py: 0.5,
            px: 1,
            border: `1px solid ${colors.primary}`,
            borderRadius: 3,
            textShadow: `1px 1px 10px ${colors.primary}`,
          }}
          href={project.code}
          target="_blank"
          underline="none"
        >
          {t("project_btn_1")}
        </Link>
      </CardActions>
    </Card>
  );
};
