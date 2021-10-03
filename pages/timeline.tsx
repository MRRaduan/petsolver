import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Grid,
  Paper,
  Button,
  Typography,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";

import Layout from "../components/Layout";

const Timeline: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>petSolver - Timeline</title>
      </Head>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h3">Linha do tempo</Typography>
            </Grid>
            {[0, 1, 2].map((index) => (
              <Grid key={index} item xs={12} sx={{ mt: 2 }}>
                <Card elevation={0} variant="outlined">
                  <CardHeader
                    avatar={
                      <Avatar
                        sx={{ bgcolor: "primary.main" }}
                        aria-label="recipe"
                      >
                        R
                      </Avatar>
                    }
                    title="Matheus Raduan"
                    subheader="September 14, 2016"
                  />
                  <Paper
                    elevation={0}
                    sx={{
                      backgroundColor: "secondary.main",
                      width: "100%",
                      height: 300,
                      borderRadius: 0,
                    }}
                  />
                  <CardActions>
                    <IconButton>
                      <FavoriteBorderRoundedIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Box>
            <Typography>Meus interesses: </Typography>
            <Typography variant="caption">
              #interesse1, #interesse2, #interesse3
            </Typography>
          </Box>
          <Box sx={{ mt: 3 }}>
            <Typography>Categorias: </Typography>
            <Typography variant="caption">
              #categoria1, #categoria2, #categoria3
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Timeline;
