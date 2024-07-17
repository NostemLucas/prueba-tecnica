import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import { IconButton, InputBase, Stack, Typography } from "@mui/material";
import { Search } from "@mui/icons-material";
import ImageCard from "./ImageCard";
import { ImageType } from "@/types/imageType";

export interface ImageMasonryProps {
  itemData: ImageType[];
}
export default function ImageMasonry({ itemData }: ImageMasonryProps) {
  return (
    <Stack spacing={2} paddingX={5} paddingY={2}>
      <Stack direction="row" spacing={2} alignItems="center">
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
            borderRadius: "0.5rem",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Buscar imágen"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <Search />
          </IconButton>
        </Paper>
        <Stack direction="row" spacing={1}>
          <Typography>Filtros</Typography>
        </Stack>
      </Stack>
      <Box>
        <Masonry columns={5} spacing={2}>
          {itemData.map((item, index) => (
            <ImageCard
              key={`${item}-${index}`}
              description={item.description}
              url={item.urls.full}
            />
          ))}
        </Masonry>
      </Box>
    </Stack>
  );
}
