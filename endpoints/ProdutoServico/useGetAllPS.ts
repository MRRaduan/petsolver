import React from "react";
import { useQuery } from "react-query";
import PetSolverClient from "../index";

const fetchAllPS = async () => {
  return PetSolverClient.get("/produtoservico");
};

const useGetAllPS = () => {
  return useQuery("getAllPS", fetchAllPS);
};

export default useGetAllPS;
