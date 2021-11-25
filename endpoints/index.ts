import axios from "axios";

const PetSolverClient = axios.create({
  baseURL:
    "https://i7axlovbcb.execute-api.us-east-1.amazonaws.com/dev/petsolver",
  timeout: 100000,
});

export default PetSolverClient;
