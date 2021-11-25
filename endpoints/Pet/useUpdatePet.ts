import React from "react";
import { useMutation } from "react-query";
import PetSolverClient from "../index";
import { Pet } from "../../interfaces";

const fetchUpdatePet = async (petId: string, pet: Pet) => {
  return await PetSolverClient.put(`/user/${petId}`, pet);
};

const useUpdatePet = (petId: string, pet: Pet) => {
  return useMutation(() => fetchUpdatePet(petId, pet));
};

export default useUpdatePet;
