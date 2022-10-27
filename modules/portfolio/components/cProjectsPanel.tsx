import React, { FC, useEffect, useState } from "react";
// External libraries
import { Box, Grid, Pagination } from "@mui/material";
// Data
import { projects } from "../data";
// Hooks
import { usePagination } from "../hooks";
// Components
import { ProjectCard } from "./cProjectCard";

interface Props {
  tag: string;
}

export const ProjectsPanel: FC<Props> = ({ tag }) => {
  //******** Hooks ********//

  const { dataPerPage, pages, setData, setNextPage } = usePagination();

  //******** Effects ********//

  useEffect(() => {
    const projectsByTag = projects.filter((project) =>
      project.tags.some((pTag) => pTag.toLowerCase() === tag.toLowerCase())
    );
    setData(projectsByTag);
  }, [setData, tag]);

  //******** Renders ********//

  return (
    <>
      <Grid
        sx={{
          mb: 5,
        }}
        container
        spacing={1.5}
      >
        {dataPerPage.map((project) => (
          <Grid item key={project.id}>
            <ProjectCard project={project} />
          </Grid>
        ))}
        <Grid sx={{ mt: 4 }} item xs={12}>
          <Pagination
            count={pages}
            variant="outlined"
            shape="rounded"
            onChange={(_, page) => setNextPage(page)}
          />
        </Grid>
      </Grid>
    </>
  );
};
