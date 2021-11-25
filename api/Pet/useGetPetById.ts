import React from "react";
import { useQuery } from "react-query";
import PetSolverClient from "../index";

const fetchPetById = async (petId: string) => {
  return PetSolverClient.get(`/pet/${petId}`);
};

const useGetPetById = (petId: string) => {
  return useQuery("getPetById", () => fetchPetById(petId));
};

export default useGetPetById;
