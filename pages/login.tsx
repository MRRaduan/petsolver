import type { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { Box, Paper, Button, Grid, TextField, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import LoginLayout from "../components/Layout/LoginLayout";

const Login: NextPage = () => {
  return (
    <LoginLayout>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="90vh"
      >
        <Paper elevation={16} sx={{ px: 8, py: 4 }}>
          <Typography variant="h4" textAlign="center">
            Faça seu login
          </Typography>
          <form>
            <Grid container spacing={2} mt={2}>
              <Grid item xs={12}>
                <TextField label="Usuário" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Senha" type="password" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <Link href="/users">
                  <Button type="submit" variant="contained" color="primary">
                    Entrar
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </form>
          <Link href="/cadastro">
            <Button
              startIcon={<GoogleIcon />}
              variant="outlined"
              sx={{ marginTop: 2 }}
              size="large"
            >
              acessar com uma conta Google
            </Button>
          </Link>
        </Paper>
      </Box>
    </LoginLayout>
  );
};

export default Login;
