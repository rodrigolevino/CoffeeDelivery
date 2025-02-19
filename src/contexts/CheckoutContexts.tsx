import { createContext, ReactNode, useEffect, useState } from "react"
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
  const [coffeesInCart, setCoffeesInCart] = useState<CoffeeCartProps[]>(() => {
    const storedCoffeesAsJSON = localStorage.getItem(
      "@coffee-delivery:coffees-in-cart-1.0.0"
    )

    if (storedCoffeesAsJSON) {
      return JSON.parse(storedCoffeesAsJSON)
    }

    return []
  })
  const [addressInfos, setAddressInfos] = useState<CheckoutDataProps>(() => {
    const storedAddressAsJSON = localStorage.getItem(
      "@coffee-delivery:address-infos-1.0.0"
    )

    if (storedAddressAsJSON) {
      return JSON.parse(storedAddressAsJSON)
    }

    return {
      bairro: "",
      cep: 1,
      cidade: "",
      complemento: "",
      numero: 1,
      rua: "",
      uf: "",
      method: "",
    }
  })

  useEffect(() => {
    const coffeesJSON = JSON.stringify(coffeesInCart)
    const addressJSON = JSON.stringify(addressInfos)

    localStorage.setItem("@coffee-delivery:coffees-in-cart-1.0.0", coffeesJSON)
    localStorage.setItem("@coffee-delivery:address-infos-1.0.0", addressJSON)
  }, [coffeesInCart, addressInfos])

  function handleSetCoffeesInCart(newCoffeesInCart: CoffeeCartProps[]) {
    setCoffeesInCart(newCoffeesInCart)
  }

  function handleChangeAddressInfos(data: CheckoutDataProps) {
    setAddressInfos(data)
  }

  return (
    <CheckoutContext.Provider
      value={{
        coffeesInCart,
        handleSetCoffeesInCart,
        handleChangeAddressInfos,
        addressInfos,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}
