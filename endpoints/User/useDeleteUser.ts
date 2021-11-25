import React from "react";
import { useMutation } from "react-query";
import PetSolverClient from "../index";

const useDeleteUser = () => {
  return useMutation((userId: string) =>
    PetSolverClient.delete(`/user/${userId}`)
  );
};

export default useDeleteUser;
