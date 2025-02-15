import { useContext } from "react"
import {
  AdressFormContainer,
  CEPInput,
  CheckoutContainer,
  CoffeeActions,
  CoffeeInCheckout,
  CoffeeInfos,
  CoffeeTotalPrice,
  ComplementAndNumberInputs,
  ComplementInputContainer,
  ConfirmeButton,
  FormContainer,
  MainAdressForm,
  MethodsToPay,
  PaymentMethodContainer,
  RemoveButton,
  SelectedCoffees,
} from "./styles"
import { CheckoutContext } from "../../contexts/CheckoutContexts"
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from "@phosphor-icons/react"
import { QuantityButton } from "../Home/components/CoffeeCards/styles"
import { produce } from "immer"
import { v4 as uuidv4 } from "uuid"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

export interface CheckoutDataProps {
  bairro: string
  cep: number
  cidade: string
  complemento?: string
  numero: number
  rua: string
  uf: string
  method: string
}

export function Checkout() {
  const { coffeesInCart, handleSetCoffeesInCart, handleChangeAddressInfos } =
    useContext(CheckoutContext)
  const { register, handleSubmit, watch, reset } = useForm<CheckoutDataProps>()

  const navigate = useNavigate()

  const totalCoffeePrice = coffeesInCart.reduce(
    (state, coffee) => state + coffee.coffeeQuantity * 9.9,
    0
  )
  const formatedCoffeePrice = formatNumberToBrl(totalCoffeePrice)

  const shipPrice = 3.5
  const formatedShipPrice = formatNumberToBrl(shipPrice)

  const totalPrice = totalCoffeePrice + shipPrice
  const formatedTotalPrice = formatNumberToBrl(totalPrice)

  const bairro = watch("bairro")
  const cep = watch("cep")
  const cidade = watch("cidade")
  const numero = watch("numero")
  const rua = watch("rua")
  const uf = watch("uf")
  const method = watch("method")

  const isButtonDisabled =
    !bairro ||
    !cep ||
    !cidade ||
    !numero ||
    !rua ||
    !uf ||
    !method ||
    !totalCoffeePrice

  function formatNumberToBrl(numberToFormat: number) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(numberToFormat)
  }

  function handleConfirmOrder(data: CheckoutDataProps) {
    handleChangeAddressInfos(data)
    handleSetCoffeesInCart([])
    reset()
    navigate("/confirmed")
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleConfirmOrder)}>
        <FormContainer>
          <AdressFormContainer>
            <span>
              <MapPinLine size={24} />
              <div>
                <h2>Endereço de Entrega</h2>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </span>
            <MainAdressForm>
              <CEPInput
                type="number"
                id="cepInput"
                placeholder="CEP"
                min={1}
                {...register("cep", { required: true, valueAsNumber: true })}
              />
              <input
                type="text"
                id="ruaInput"
                placeholder="Rua"
                maxLength={35}
                {...register("rua", { required: true })}
              />
              <ComplementAndNumberInputs>
                <input
                  type="number"
                  id="numeroInput"
                  placeholder="Número"
                  max={99999}
                  min={1}
                  {...register("numero", {
                    required: true,
                    valueAsNumber: true,
                  })}
                />
                <ComplementInputContainer>
                  <input
                    type="text"
                    id="complementoInput"
                    placeholder="Complemento"
                    {...register("complemento")}
                  />
                  <span>Opcional</span>
                </ComplementInputContainer>
              </ComplementAndNumberInputs>
              <main>
                <input
                  type="text"
                  id="bairroInput"
                  placeholder="Bairro"
                  maxLength={17}
                  {...register("bairro", { required: true })}
                />
                <input
                  type="text"
                  id="cidadeInput"
                  placeholder="Cidade"
                  maxLength={20}
                  {...register("cidade", { required: true })}
                />
                <input
                  type="text"
                  id="ufInput"
                  placeholder="UF"
                  maxLength={2}
                  {...register("uf", { required: true })}
                />
              </main>
            </MainAdressForm>
          </AdressFormContainer>
          <PaymentMethodContainer>
            <span>
              <CurrencyDollar size={24} />
              <div>
                <h2>Pagamento</h2>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </span>
            <MethodsToPay>
              <input
                type="radio"
                id="credit"
                value="Cartão de Crédito"
                {...register("method", { required: true })}
              />
              <label htmlFor="credit">
                <CreditCard size={16} />
                CARTÃO DE CRÉDITO
              </label>
              <input
                type="radio"
                id="debit"
                value="Cartão de Débito"
                {...register("method", { required: true })}
              />
              <label htmlFor="debit">
                <Bank size={16} />
                CARTÃO DE DÉBITO
              </label>
              <input
                type="radio"
                id="money"
                value="Dinheiro"
                {...register("method", { required: true })}
              />
              <label htmlFor="money">
                <Money size={16} />
                DINHEIRO
              </label>
            </MethodsToPay>
          </PaymentMethodContainer>
        </FormContainer>
        <aside>
          <SelectedCoffees>
            {coffeesInCart.map((coffee, coffeeIndex) => {
              return (
                <CoffeeInCheckout key={uuidv4()}>
                  <span>
                    <img src={coffee.coffeeImage} />
                  </span>
                  <CoffeeInfos>
                    <p>{coffee.title}</p>
                    <CoffeeActions>
                      <QuantityButton>
                        <button
                          onClick={() => {
                            handleSetCoffeesInCart(
                              produce(coffeesInCart, (draft) => {
                                if (coffee.coffeeQuantity > 1) {
                                  draft[coffeeIndex].coffeeQuantity -= 1
                                }
                              })
                            )
                          }}
                        >
                          <Minus weight="bold" />
                        </button>
                        <input
                          type="number"
                          min={1}
                          value={coffee.coffeeQuantity}
                          onChange={() => {}}
                          disabled={true}
                        />
                        <button
                          onClick={() => {
                            handleSetCoffeesInCart(
                              produce(coffeesInCart, (draft) => {
                                if (coffee.coffeeQuantity < 9) {
                                  draft[coffeeIndex].coffeeQuantity += 1
                                }
                              })
                            )
                          }}
                        >
                          <Plus weight="bold" />
                        </button>
                      </QuantityButton>
                      <RemoveButton
                        onClick={() => {
                          const coffeesWithoutDeletedOne = coffeesInCart.filter(
                            (eachCoffee) => eachCoffee !== coffee
                          )

                          handleSetCoffeesInCart(coffeesWithoutDeletedOne)
                        }}
                      >
                        <Trash size={16} />
                        REMOVER
                      </RemoveButton>
                    </CoffeeActions>
                  </CoffeeInfos>
                </CoffeeInCheckout>
              )
            })}
            <CoffeeTotalPrice>
              <div>
                <p>Total de itens</p>
                <h2>{formatedCoffeePrice}</h2>
              </div>
              <div>
                <p>Entrega</p>
                <h2>
                  {totalCoffeePrice ? formatedShipPrice : formatedCoffeePrice}
                </h2>
              </div>
              <div>
                <h1>Total</h1>
                <h1>
                  {totalCoffeePrice ? formatedTotalPrice : formatedCoffeePrice}
                </h1>
              </div>
            </CoffeeTotalPrice>
            <ConfirmeButton type="submit" disabled={isButtonDisabled}>
              CONFIRMAR PEDIDO
            </ConfirmeButton>
          </SelectedCoffees>
        </aside>
      </form>
    </CheckoutContainer>
  )
}
