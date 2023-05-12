import express from "express";
import DetVendasController from "../Controller/DetVendasController.js";

const DetVendasRouter = express.Router();

DetVendasRouter.get("/", DetVendasController.getDetVenda);

export default DetVendasRouter;
