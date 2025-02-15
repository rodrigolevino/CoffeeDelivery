import { CardsContainer } from "./styles"

import { CoffeeCards } from "../CoffeeCards"

export function CoffeeList() {
  return (
    <div>
      <CardsContainer>
        <CoffeeCards
          title={"Expresso Tradicional"}
          description={
            "O tradicional café feito com água quente e grãos moídos"
          }
          coffeeImage={"/coffees/Expresso.svg"}
        />
        <CoffeeCards
          title={"Expresso Americano"}
          description={"Expresso diluído, menos intenso que o tradicional"}
          coffeeImage={"/coffees/Americano.svg"}
        />
        <CoffeeCards
          title={"Expresso Cremoso"}
          description={"Café expresso tradicional com espuma cremosa"}
          coffeeImage={"/coffees/Expresso-Cremoso.svg"}
        />
        <CoffeeCards
          title={"Expresso Gelado"}
          description={"Bebida preparada com café expresso e cubos de gelo"}
          coffeeImage={"/coffees/Cafe-Gelado.svg"}
          tags={["TRADICIONAL", "GELADO"]}
        />
        <CoffeeCards
          title={"Café com Leite"}
          description={
            "Meio a meio de expresso tradicional com leite vaporizado"
          }
          coffeeImage={"/coffees/Cafe-com-Leite.svg"}
          tags={["TRADICIONAL", "COM LEITE"]}
        />
        <CoffeeCards
          title={"Latte"}
          description={
            "Uma dose de café expresso com o dobro de leite e espuma cremosa"
          }
          coffeeImage={"/coffees/Latte.svg"}
          tags={["TRADICIONAL", "COM LEITE"]}
        />
        <CoffeeCards
          title={"Capuccino"}
          description={
            "Bebida com canela feita de doses iguais de café, leite e espuma"
          }
          coffeeImage={"/coffees/Capuccino.svg"}
          tags={["TRADICIONAL", "COM LEITE"]}
        />
        <CoffeeCards
          title={"Macchiato"}
          description={
            "Café expresso misturado com um pouco de leite quente e espuma"
          }
          coffeeImage={"/coffees/Macchiato.svg"}
          tags={["TRADICIONAL", "COM LEITE"]}
        />
        <CoffeeCards
          title={"Mocaccino"}
          description={
            "Café expresso com calda de chocolate, pouco leite e espuma"
          }
          coffeeImage={"/coffees/Mochaccino.svg"}
          tags={["TRADICIONAL", "COM LEITE"]}
        />
        <CoffeeCards
          title={"Chocolate Quente"}
          description={
            "Bebida feita com chocolate dissolvido no leite quente e café"
          }
          coffeeImage={"/coffees/Chocolate-Quente.svg"}
          tags={["ESPECIAL", "COM LEITE"]}
        />
        <CoffeeCards
          title={"Cubano"}
          description={
            "Drink gelado de café expresso com rum, creme de leite e hortelã"
          }
          coffeeImage={"/coffees/Cubano.svg"}
          tags={["ESPECIAL", "ALCOÓLICO", "GELADO"]}
        />
        <CoffeeCards
          title={"Havaiano"}
          description={"Bebida adocicada preparada com café e leite de coco"}
          coffeeImage={"/coffees/Havaiano.svg"}
          tags={["ESPECIAL"]}
        />
        <CoffeeCards
          title={"Árabe"}
          description={"Bebida preparada com grãos de café árabe e especiarias"}
          coffeeImage={"/coffees/Arabe.svg"}
          tags={["ESPECIAL"]}
        />
        <CoffeeCards
          title={"Irlandês"}
          description={
            "Bebida a base de café, uísque irlandês, açúcar e chantilly"
          }
          coffeeImage={"/coffees/Irlandes.svg"}
          tags={["ESPECIAL", "ALCOÓLICO"]}
        />
      </CardsContainer>
    </div>
  )
}
