import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

import Layout from "../components/Layout";
import { useQuery } from "react-query";
import PetSolverClient from "../api";
import { ProdutoServico } from "../interfaces";
import { useDeletePS } from "../api/ProdutoServico";
import { currencyFormat } from "../utils";

const Timeline: NextPage = () => {
  const [hasToFetchServicos, setHasToFetchServicos] = useState(true);
  const fetchAllServicos = async () => {
    return PetSolverClient.get<ProdutoServico[]>(
      "/produtoservico/tipo?tipo=servico"
    );
  };
  const {
    data: servicos,
    isLoading,
    isSuccess,
  } = useQuery("getAllServicos", fetchAllServicos, {
    enabled: hasToFetchServicos,
    onSuccess: () => {
      setHasToFetchServicos(false);
    },
  });
  const deleteServico = useDeletePS();

  const handleOnDeleteUser = (servicoId: string) => {
    deleteServico.mutate(servicoId, {
      onSuccess: () => {
        setHasToFetchServicos(true);
      },
    });
  };

  return (
    <Layout>
      <Head>
        <title>Serviços</title>
      </Head>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {isLoading ? (
                <Typography>carregando dados..</Typography>
              ) : (
                <Typography variant="h3">Serviços</Typography>
              )}
            </Grid>
            {isSuccess && servicos
              ? servicos.data.map((servico: ProdutoServico) => (
                  <Grid key={servico._id} item xs={12} sx={{ mt: 2 }}>
                    <Card elevation={0} variant="outlined">
                      <CardHeader
                        avatar={
                          <Avatar
                            sx={{ bgcolor: "primary.main" }}
                            aria-label="recipe"
                          >
                            {servico.nome.charAt(0)}
                          </Avatar>
                        }
                        title={servico.nome}
                        subheader={`Valor: ${currencyFormat(servico.preco)} `}
                      />
                      <CardContent>
                        <Typography variant="h6">Descrição</Typography>
                        <Typography> {servico.descricao}</Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          onClick={() =>
                            servico._id && handleOnDeleteUser(servico._id)
                          }
                        >
                          deletar
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))
              : null}
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Timeline;
