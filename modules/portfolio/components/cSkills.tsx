import React from "react";
// External libraries
import { Grid, Typography } from "@mui/material";
// Data
import { skillsBackEnd, skillsFrontEnd } from "@/modules/portfolio/data";
// Components
import { ProgressBar } from "@/modules/shared/components";

export const Skills = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Typography sx={{ mb: 2 }} color="info.main" variant="h4">
          Front-End
        </Typography>
        {skillsFrontEnd.map((skill) => (
          <ProgressBar
            key={skill.name}
            title={skill.name}
            value={skill.percent}
          />
        ))}
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography sx={{ mb: 2 }} color="info.main" variant="h4">
          Back-End
        </Typography>
        {skillsBackEnd.map((skill) => (
          <ProgressBar
            key={skill.name}
            title={skill.name}
            value={skill.percent}
          />
        ))}
      </Grid>
    </Grid>
  );
};
