import React from "react";
import { useQuery } from "react-query";
import PetSolverClient from "../index";

const fetchAllPets = async () => {
  return PetSolverClient.get("/pets");
};

const useGetAllPets = () => {
  return useQuery("getAllPets", fetchAllPets);
};

export default useGetAllPets;
