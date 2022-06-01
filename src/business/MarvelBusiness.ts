import { MarvelDatabase } from "../data/MarvelDatabase";

export class MarvelBusiness {

   constructor(
      private marvelDatabase: MarvelDatabase,
   ) {

   }
   public async cards(test:String) {
      try {

         const cards = await this.marvelDatabase.getAllCards();

         if (!cards || cards.length === 0) {

            throw new Error("Erro ao retornar lista de pokemons");
         }

         return (cards);
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Erro ao retornar pokemons")
         }
      }
   }

   public async start() {
      try {

         const cards = await this.marvelDatabase.getAllCards();
         let cardsJogador:any[] = []
         let cardsPC:any[] = []

         const distribuirCards =()=>{
            let arrayCards = cards.slice();
            
           for (var i = 0; i < 15; i++) {

              let sorteio1 = Math.floor(Math.random() * arrayCards.length)
          
              cardsJogador.push(arrayCards[sorteio1])
         
              arrayCards.splice(sorteio1, 1);
         

              let sorteio2 = Math.floor(Math.random() * arrayCards.length)
         
              cardsPC.push(arrayCards[sorteio2])
         
              arrayCards.splice(sorteio2, 1);

         }

      }

      distribuirCards()

         return ({cardsJogador,cardsPC});
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Erro ao retornar pokemons")
         }
      }
   }

}
export default new MarvelBusiness(
   new MarvelDatabase(),
)