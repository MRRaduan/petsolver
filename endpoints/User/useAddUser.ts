import React from "react";
import { useMutation } from "react-query";
import PerSolverClient from "../index";

const useAddUser = () => {
  return useMutation((newUser) => PerSolverClient.post(`/user`, newUser));
};

export default useAddUser;
