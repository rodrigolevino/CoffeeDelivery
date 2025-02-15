import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react"
import {
  DeliveryContainer,
  OrderInfo,
  SuccessContainer,
} from "./styles"
import { useContext } from "react"
import { CheckoutContext } from "../../contexts/CheckoutContexts"
import deliveryImage from "../../assets/deliveryman.svg"

export function Confirmed() {
  const { addressInfos } = useContext(CheckoutContext)

  return (
    <SuccessContainer>
      <DeliveryContainer>
        <span>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </span>
        <main>
          <OrderInfo $itemColor="purple">
            <div>
              <MapPin size={16} weight="fill" />
            </div>
            <p>
              Entrega em{" "}
              <span>{addressInfos.rua + ", " + addressInfos.numero + " "}</span>
              <br />
              {addressInfos.bairro +
                " - " +
                addressInfos.cidade +
                ", " +
                addressInfos.uf}
            </p>
          </OrderInfo>
          <OrderInfo $itemColor="yellow">
            <div>
              <Timer size={16} weight="fill" />
            </div>
            <p>
              Previsão de entrega
              <br />
              <span>20 min - 30 min</span>
            </p>
          </OrderInfo>
          <OrderInfo $itemColor="orange">
            <div>
              <CurrencyDollar size={16} />
            </div>
            <p>
              Pagamento na entrega
              <br />
              <span>{addressInfos.method}</span>
            </p>
          </OrderInfo>
        </main>
      </DeliveryContainer>
      <img src={deliveryImage} alt="Um homem em uma moto fazendo o delivery" />
    </SuccessContainer>
  )
}
