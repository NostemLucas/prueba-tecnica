"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { fetchImages } from "@/context/useSession";
import ImageMasonry from "@/components/Massonry";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { Search } from "@mui/icons-material";
import ImageCard from "@/components/ImageCard";
import { ImageType } from "@/types/imageType";
import { useFormik } from "formik";
import SearchButton from "@/components/SearchButton";
import * as yup from "yup";
import { useFullScreenLoading } from "@/components/FullScreenLoadingProvider";

export default function Home() {
  const [images, setImages] = useState<ImageType[]>([]);

  const validationSchema = yup.object().shape({
    query: yup.string().trim().optional(),
  });
  const { hiddenFullScreen, showFullScreen } = useFullScreenLoading();

  useEffect(() => {
    fetchData("nature");
  }, []);

  const fetchData = async (query: string) => {
    try {
      showFullScreen("Cargando imágenes...");
      const { results } = await fetchImages(query);
      setImages(results);
    } catch (error) {
      console.error("Error loading images:", error);
    } finally {
      hiddenFullScreen();
    }
  };

  let initialValues = {
    query: "nature",
  };
  const onSubmit = (values: any) => {
    fetchData(values.query);
  };

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: false,
    onSubmit,
  });

  return (
    <Box padding={2}>
      <Stack spacing={2} paddingX={5} paddingY={2}>
        <Stack direction="row" spacing={2} alignItems="center">
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <SearchButton
                value={values.query}
                onChange={handleChange}
                name="query"
                placeholder="Buscar imágen"
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  borderRadius: "10px",
                  marginLeft: "10px",
                  height: "50px",
                }}
              >
                Buscar
              </Button>
            </Box>
          </form>
        </Stack>
        <Box sx={{ display: "flex" }}>
          <Grid container spacing={2} p={2}>
            {images.length > 0 ? (
              images.map((image, index) => (
                <Grid item xs={12} md={3} sm={6} key={index}>
                  <ImageCard
                    description={image.description}
                    url={image.urls.full}
                  />
                </Grid>
              ))
            ) : (
              <Grid
                item
                xs={12}
                sx={{
                  height: "500px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography>Sin imágenes</Typography>
              </Grid>
            )}
          </Grid>
        </Box>
      </Stack>
    </Box>
  );
}
