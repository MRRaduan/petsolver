import type { NextPage } from "next";

import { useRouter } from "next/router";
import Head from "next/head";
import React, { useState } from "react";
import {
  Button,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  TextField,
  Typography,
} from "@mui/material";

import Layout from "../components/Layout";
import { useCreatePS } from "../api/ProdutoServico";

import { useForm } from "react-hook-form";

const Timeline: NextPage = () => {
  const [tipo, setTipo] = React.useState<string | "produto" | "servico">(
    "produto"
  );

  const router = useRouter();

  const { register, handleSubmit } = useForm();

  const createProdutoServico = useCreatePS();
  const handleChangeTipo = (
    event: React.MouseEvent<HTMLElement>,
    newTipo: string
  ) => {
    setTipo(newTipo);
  };
  const handleOnSubmitForm = (data: any) =>
    createProdutoServico.mutate(
      { ...data, tipo },
      {
        onSuccess: () => {
          router.push(`/${tipo}s`);
        },
      }
    );
  return (
    <Layout>
      <Head>
        <title>Novo produto / serviço</title>
      </Head>
      <form onSubmit={handleSubmit((data) => handleOnSubmitForm(data))}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h3">Novo produto / serviço</Typography>
              </Grid>
              <Grid item xs={10}>
                <TextField
                  {...register("nome", { required: true })}
                  variant="outlined"
                  fullWidth
                  label="Nome"
                />
              </Grid>
              <Grid item xs={10}>
                <TextField
                  {...register("descricao", { required: true })}
                  variant="outlined"
                  fullWidth
                  label="Descrição"
                />
              </Grid>
              <Grid item xs={10}>
                <TextField
                  {...register("preco", { required: true, min: 1 })}
                  variant="outlined"
                  fullWidth
                  type="number"
                  label="Preço"
                />
              </Grid>
              <Grid item xs={10}>
                <TextField
                  {...register("qtd", { required: tipo === "produto", min: 1 })}
                  variant="outlined"
                  fullWidth
                  type="number"
                  label="Quantidade"
                />
              </Grid>
              <Grid item xs={10}>
                <ToggleButtonGroup
                  color="primary"
                  value={tipo}
                  exclusive
                  onChange={handleChangeTipo}
                >
                  <ToggleButton value="produto">produto</ToggleButton>
                  <ToggleButton value="servico">serviço</ToggleButton>
                </ToggleButtonGroup>
              </Grid>
              <Grid item xs={10}>
                <Button type="submit" variant="contained" color="primary">
                  criar
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Layout>
  );
};

export default Timeline;
