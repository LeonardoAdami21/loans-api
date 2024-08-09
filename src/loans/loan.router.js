import express from "express";
import { loanController } from "./loan.contoller.js";
const loanRouter = express.Router();

loanRouter.get("/", loanController.findAll);
loanRouter.post("/", loanController.create);

export default loanRouter;
