import React from "react";
import { useMutation } from "react-query";
import PerSolverClient from "../index";

const useCreatePet = () => {
  return useMutation((newPet) => PerSolverClient.post(`/pet`, newPet));
};

export default useCreatePet;
