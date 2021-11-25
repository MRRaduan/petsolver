import React from "react";
import { useQuery } from "react-query";
import PetSolverClient from "../index";
import { User } from "../../interfaces";

const fetchAllUsers = async () => {
  return PetSolverClient.get<User[]>("/user");
};

const useGetAllUsers = (config?: any) => {
  return useQuery("getAllUsers", fetchAllUsers, config);
};

export default useGetAllUsers;
