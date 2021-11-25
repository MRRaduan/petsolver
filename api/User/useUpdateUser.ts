import React from "react";
import { useMutation } from "react-query";
import PetSolverClient from "../index";
import { User } from "../../interfaces";

const fetchUpdateUser = async (userId: string, user: User) => {
  return await PetSolverClient.put(`/user/${userId}`, user);
};

const useUpdateUser = (userId: string, user: User) => {
  return useMutation(() => fetchUpdateUser(userId, user));
};

export default useUpdateUser;
