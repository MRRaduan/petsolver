import React, { useState } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";
import {
  Grid,
  Box,
  Button,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import DateAdapter from "@mui/lab/AdapterDayjs";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

const Cadastro: NextPage = () => {
  const [alignment, setAlignment] = React.useState("sou prestador");

  const [dateValue, setDateValue] = React.useState<Date | null>(null);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };
  return (
    <Layout>
      <Head>
        <title>Cadastro</title>
        <meta name="description" content="Cadastro de conta petSolver" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <form>
          <Grid container spacing={2} sx={{ mt: 3 }}>
            <Grid item xs={12}>
              <Typography display="block" variant="h2">
                Selecione o seu perfil
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
              >
                <ToggleButton value="web">sou prestador</ToggleButton>
                <ToggleButton value="android">sou dono de pet</ToggleButton>
              </ToggleButtonGroup>
            </Grid>
            <Grid item xs={12}>
              <TextField variant="outlined" fullWidth label="Nome completo" />
            </Grid>
            <Grid item xs={12}>
              <TextField variant="outlined" fullWidth label="Cidade" />
            </Grid>
            <Grid item xs={12}>
              <TextField variant="outlined" fullWidth label="Estado" />
            </Grid>
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={DateAdapter}>
                <DatePicker
                  label="Basic example"
                  value={dateValue}
                  onChange={(newValue) => {
                    setDateValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
              <Button
                variant="outlined"
                color="primary"
                size="small"
                sx={{ ml: 2 }}
                endIcon={<AccountCircleRoundedIcon />}
              >
                upload foto de perfil
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Link href="/timeline">
                <Button variant="contained" color="primary">
                  criar conta
                </Button>
              </Link>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Layout>
  );
};

export default Cadastro;
