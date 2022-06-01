import { Cards } from "../model/Cards";
import BaseDataBase from "./BaseDatabase";

export class MarvelDatabase extends BaseDataBase {

   protected tableName: string = "super_trunfo_marvel";

   private toModel(dbModel?: any): Cards | undefined {
      return (
         dbModel &&
         new Cards(
            dbModel.id,
            dbModel.nome,
            dbModel.tipo,
            dbModel.imagem,
            dbModel.forca,
            dbModel.velocidade,
            dbModel.habilidade,
            dbModel.equipamento,
            dbModel.inteligencia,
         )
      );
   }



   public async getAllCards(): Promise<void | any> {
      try {
         const result = await BaseDataBase.connection.raw(`
         SELECT * from ${this.tableName};
         `);

         return result[0].map((res: any) => {
            return this.toModel(res);
         });
      } catch (error) {
         if (error instanceof Error) {
            throw new Error(error.message)
         }
      }
   }

}
