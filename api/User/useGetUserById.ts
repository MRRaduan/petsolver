import React from "react";
import { useQuery } from "react-query";
import PetSolverClient from "../index";

const fetchUserById = async (userId: string) => {
  return PetSolverClient.get(`/user/${userId}`);
};

const useGetUserById = (userId: string) => {
  return useQuery("getUserById", () => fetchUserById(userId));
};

export default useGetUserById;
