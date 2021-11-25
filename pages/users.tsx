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
import GoogleIcon from "@mui/icons-material/Google";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { useGetAllUsers, useDeleteUser } from "../endpoints/User";

import Layout from "../components/Layout";
import { useQuery } from "react-query";
import PetSolverClient from "../endpoints";
import { User } from "../interfaces";

const Timeline: NextPage = () => {
  const [hasToFetchUsers, setHasToFetchUsers] = useState(true);
  const fetchAllUsers = async () => {
    return PetSolverClient.get<User[]>("/user");
  };
  const {
    data: users,
    isLoading,
    isSuccess,
  } = useQuery("getAllUsers", fetchAllUsers, {
    enabled: hasToFetchUsers,
    onSuccess: () => {
      setHasToFetchUsers(false);
    },
  });
  const deleteUser = useDeleteUser();

  const handleOnDeleteUser = (userId: string) => {
    deleteUser.mutate(userId, {
      onSuccess: () => {
        setHasToFetchUsers(true);
      },
    });
  };

  return (
    <Layout>
      <Head>
        <title>Usuários</title>
      </Head>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {isLoading ? (
                <Typography>carregando dados..</Typography>
              ) : (
                <Typography variant="h3">Usuários</Typography>
              )}
            </Grid>
            {isSuccess && users
              ? users.data.map((user) => (
                  <Grid key={user._id} item xs={12} sx={{ mt: 2 }}>
                    <Card elevation={0} variant="outlined">
                      <CardHeader
                        avatar={
                          <Avatar
                            sx={{ bgcolor: "primary.main" }}
                            aria-label="recipe"
                          >
                            {user.nome.charAt(0)}
                          </Avatar>
                        }
                        title={user.nome}
                        subheader={`contato: ${user.email}`}
                      />
                      <CardActions>
                        <Button
                          onClick={() =>
                            user._id && handleOnDeleteUser(user._id)
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
