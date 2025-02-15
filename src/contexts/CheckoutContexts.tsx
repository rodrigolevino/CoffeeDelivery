import { createContext, ReactNode, useState } from "react"
import { CheckoutDataProps } from "../pages/Checkout"

interface CheckoutContextProviderProps {
  children: ReactNode
}

export interface CoffeeCartProps {
  title: string
  coffeeImage: string
  coffeeQuantity: number
}

interface CheckoutContextProps {
  coffeesInCart: CoffeeCartProps[]
  handleSetCoffeesInCart: (newCoffeesInCart: CoffeeCartProps[]) => void
  handleChangeAddressInfos: (data: CheckoutDataProps) => void
  addressInfos: CheckoutDataProps
}

export const CheckoutContext = createContext({} as CheckoutContextProps)

export function CheckoutContextProvider({
  children,
}: CheckoutContextProviderProps) {
  const [coffeesInCart, setCoffeesInCart] = useState<CoffeeCartProps[]>([])
  const [addressInfos, setAddressInfos] = useState<CheckoutDataProps>({
    bairro: "",
    cep: 1,
    cidade: "",
    complemento: "",
    numero: 1,
    rua: "",
    uf: "",
    method: "",
  })

  function handleSetCoffeesInCart(newCoffeesInCart: CoffeeCartProps[]) {
    setCoffeesInCart(newCoffeesInCart)
  }

  function handleChangeAddressInfos(data: CheckoutDataProps) {
    setAddressInfos(data)
  }

  return (
    <CheckoutContext.Provider value={{ coffeesInCart, handleSetCoffeesInCart, handleChangeAddressInfos, addressInfos }}>
      {children}
    </CheckoutContext.Provider>
  )
}
