"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export interface ImageCardProps {
  url: string;
  description: string;
}

export default function ImageCard({ url, description }: ImageCardProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={url} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Description
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={url} target="_blank">
          <Button size="small">Ver Imagen</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
