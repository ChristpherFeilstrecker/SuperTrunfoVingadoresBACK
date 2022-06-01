import { Request, Response } from "express";
import MarvelBusiness from "../business/MarvelBusiness";

export class MarvelController {

   public async cards(req: Request, res: Response) {
      try {
         const test = ""

         const result = await MarvelBusiness.cards(test);
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Algo de errado ao coletar cards" })
         }
      }
   }

   public async start(req: Request, res: Response) {
      try {
         
         const result = await MarvelBusiness.start();
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Algo de errado ao iniciar partida" })
         }
      }
   }

}

export default new MarvelController()