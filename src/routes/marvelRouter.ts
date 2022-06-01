import express from "express";
import { MarvelController } from "../controller/MarvelController";

export const marvelRouter = express.Router();

const marvelController = new MarvelController();

marvelRouter.get("/cards", marvelController.cards);//Retorna todos cards

marvelRouter.post("/start", marvelController.start); // sorteia e separa os cards em dois


