import { CoffeeContainer, IntroContainer, IntroContent, IntroImage, IntroItens, IntroTitle, ItensContainer } from "./styles"

import cupImage from "../../assets/coffee-delivery-cup-image.svg"
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react"
import { CoffeeList } from "./components/CoffeeList"

export function Home() {
  return (
    <div>
      <IntroContainer>
        <IntroContent>
          <IntroTitle>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h2>
              Com o Coffee Delivery você recebe seu café onde estiver, a<br />
              qualquer hora
            </h2>
          </IntroTitle>

          <ItensContainer>
            <IntroItens $itemColor="orange">
              <div>
                <ShoppingCart size={16} weight="fill" />
              </div>
              <p>Compra simples e segura</p>
            </IntroItens>
            <IntroItens $itemColor="gray">
              <div>
                <Package size={16} weight="fill" />
              </div>
              <p>Embalagem mantém o café intacto</p>
            </IntroItens>
            <IntroItens $itemColor="yellow">
              <div>
                <Timer size={16} weight="fill" />
              </div>
              <p>Entrega rápida e rastreada</p>
            </IntroItens>
            <IntroItens $itemColor="purple">
              <div>
                <Coffee size={16} weight="fill" />
              </div>
              <p>O café chega fresquinho até você</p>
            </IntroItens>
          </ItensContainer>
        </IntroContent>
        <IntroImage>
          <img src={cupImage} alt="" />
        </IntroImage>
      </IntroContainer>

      <CoffeeContainer>
        <div>
          <h1>Nossos cafés</h1>
        </div>
        <CoffeeList />
      </CoffeeContainer>
    </div>
  )
}
