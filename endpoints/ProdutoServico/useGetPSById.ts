import React from "react";
import { useQuery } from "react-query";
import PetSolverClient from "../index";

const fetchPSById = async (PSId: string) => {
  return PetSolverClient.get(`/produtoservico/${PSId}`);
};

const useGetPSById = (PSId: string) => {
  return useQuery("getPSById", () => fetchPSById(PSId));
};

export default useGetPSById;
