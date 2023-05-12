import express from "express";
import VendasController from "../Controller/VendasController.js";

const VendasRouter = express.Router();

VendasRouter.get("/", VendasController.getVenda);

export default VendasRouter;
