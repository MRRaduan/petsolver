import React from "react";
import { useMutation } from "react-query";
import PerSolverClient from "../index";

const useCreatePS = () => {
  return useMutation((newPS) => PerSolverClient.post(`/produtoservico`, newPS));
};

export default useCreatePS;
