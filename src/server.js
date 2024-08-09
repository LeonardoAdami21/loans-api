import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json" assert { type: "json" };
import { appPort } from "./env/envoriment.js";
import loanRouter from "./loans/loan.router.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/loans", loanRouter);

app.listen(appPort, () => {
  console.log(`Server is running on port http://localhost:${appPort}/api-docs`);
});
