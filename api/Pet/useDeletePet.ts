import React from "react";
import { useMutation } from "react-query";
import PetSolverClient from "../index";

const useDeletePet = () => {
  return useMutation((petId) => PetSolverClient.delete(`/pet/${petId}`));
};

export default useDeletePet;
