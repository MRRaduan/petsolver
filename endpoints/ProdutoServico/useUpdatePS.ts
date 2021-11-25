import React from "react";
import { useMutation } from "react-query";
import PetSolverClient from "../index";
import { User } from "../../interfaces";

const fetchUpdatePS = async (PSId: string, PS: User) => {
  return await PetSolverClient.put(`/produtoservico/${PSId}`, PS);
};

const useUpdatePS = (PSId: string, PS: User) => {
  return useMutation(() => fetchUpdatePS(PSId, PS));
};

export default useUpdatePS;
