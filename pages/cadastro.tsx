import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import LoginLayout from "../components/Layout/LoginLayout";

import {
  Grid,
  Box,
  Button,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";

import { useForm } from "react-hook-form";
import { useAddUser } from "../endpoints/User";

const Cadastro: NextPage = () => {
  const [alignment, setAlignment] = React.useState("sou prestador");
  const [dateValue, setDateValue] = React.useState<Date | null>(null);

  const { register, handleSubmit } = useForm();

  const addUser = useAddUser();

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  const handleOnSubmitForm = (data: any) => addUser.mutate(data);

  return (
    <LoginLayout>
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
        <form onSubmit={handleSubmit((data) => handleOnSubmitForm(data))}>
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
            <Grid item xs={10}>
              <TextField
                {...register("nome", { required: true })}
                variant="outlined"
                fullWidth
                label="Nome completo"
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                {...register("idade", { required: true })}
                variant="outlined"
                fullWidth
                label="Idade"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="email"
                {...register("email", { required: true })}
                variant="outlined"
                fullWidth
                label="Email"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                {...register("cidade")}
                variant="outlined"
                fullWidth
                label="Cidade"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                {...register("estado", { required: true })}
                variant="outlined"
                fullWidth
                label="Estado"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                {...register("bairro", { required: true })}
                variant="outlined"
                fullWidth
                label="Bairro"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                {...register("complemento")}
                variant="outlined"
                fullWidth
                label="Complemento"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...register("endereco", { required: true })}
                variant="outlined"
                fullWidth
                label="Endereço"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...register("senha", { required: true })}
                variant="outlined"
                fullWidth
                type="password"
                label="Senha"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...register("dataNascimento", { required: true })}
                variant="outlined"
                type="date"
                fullWidth
                label="Data de Nascimento"
              />
            </Grid>
            <Grid item xs={12}>
              {/* <Link href="/timeline"> */}
              <Button variant="contained" color="primary" type="submit">
                criar conta
              </Button>
              {/* </Link> */}
            </Grid>
          </Grid>
        </form>
      </Box>
    </LoginLayout>
  );
};

export default Cadastro;
