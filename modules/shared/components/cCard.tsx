import React, { FC } from "react";
// External libraries
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

interface Props {
  title: string;
  text: string;
  imgPath: string;
}

export const MyCard: FC<Props> = ({ title, text, imgPath }) => {
  return (
    <Card sx={{ width: "100%" }}>
      <CardMedia component="img" alt={title} height="140" image={imgPath} />
      <CardContent>
        <Typography color="info.main" variant="h5" component="div">
          {title}
        </Typography>
        <Typography color="primary.main" variant="body2">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};
