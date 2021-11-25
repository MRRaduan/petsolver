import React from "react";
import { useMutation } from "react-query";
import PetSolverClient from "../index";

const useDeletePS = () => {
  return useMutation((PSId: string) =>
    PetSolverClient.delete(`/produtoservico/${PSId}`)
  );
};

export default useDeletePS;
