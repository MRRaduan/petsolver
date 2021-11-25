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
import PetSolverClient from "../endpoints";
import { ProdutoServico } from "../interfaces";
import { useDeletePS } from "../endpoints/ProdutoServico";
import { currencyFormat } from "../utils";

const Timeline: NextPage = () => {
  const [hasToFetchProdutos, sethasToFetchProdutos] = useState(true);
  const fetchAllProdutos = async () => {
    return PetSolverClient.get<ProdutoServico[]>(
      "/produtoservico/tipo?tipo=produto"
    );
  };
  const {
    data: produtos,
    isLoading,
    isSuccess,
  } = useQuery("getAllProdutos", fetchAllProdutos, {
    enabled: hasToFetchProdutos,
    onSuccess: () => {
      sethasToFetchProdutos(false);
    },
  });
  const deleteProduto = useDeletePS();

  const handleOnDeleteUser = (produtoId: string) => {
    deleteProduto.mutate(produtoId, {
      onSuccess: () => {
        sethasToFetchProdutos(true);
      },
    });
  };

  return (
    <Layout>
      <Head>
        <title>Produtos</title>
      </Head>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {isLoading ? (
                <Typography>carregando dados..</Typography>
              ) : (
                <Typography variant="h3">Produtos</Typography>
              )}
            </Grid>
            {isSuccess && produtos
              ? produtos.data.map((produto: ProdutoServico) => (
                  <Grid key={produto._id} item xs={12} sx={{ mt: 2 }}>
                    <Card elevation={0} variant="outlined">
                      <CardHeader
                        avatar={
                          <Avatar
                            sx={{ bgcolor: "primary.main" }}
                            aria-label="recipe"
                          >
                            {produto.nome.charAt(0)}
                          </Avatar>
                        }
                        title={produto.nome}
                        subheader={`Valor: ${currencyFormat(
                          produto.preco
                        )} | Qtd: ${produto.qtd}`}
                      />
                      <CardContent>
                        <Typography variant="h6">Descrição</Typography>
                        <Typography> {produto.descricao}</Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          onClick={() =>
                            produto._id && handleOnDeleteUser(produto._id)
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
