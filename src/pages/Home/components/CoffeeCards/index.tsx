import {
  AddItem,
  CartButton,
  CoffeeCard,
  CoffeeTags,
  ItemPrice,
  QuantityButton,
  TagsContainer,
} from "./styles"

import { useContext, useState } from "react"
import { Minus, Plus, ShoppingCartSimple } from "@phosphor-icons/react"
import { v4 as uuidv4 } from "uuid"
import { produce } from "immer"
import { CheckoutContext } from "../../../../contexts/CheckoutContexts"

interface CoffeeCardProps {
  title: string
  description: string
  coffeeImage: string
  tags?: string[]
}

export function CoffeeCards({
  title,
  description,
  coffeeImage,
  tags = ["TRADICIONAL"],
}: CoffeeCardProps) {
  const [coffeeQuantity, setCoffeeQuantity] = useState(1)
  const { coffeesInCart, handleSetCoffeesInCart } = useContext(CheckoutContext)

  function handleDecreaseQuantity() {
    if (coffeeQuantity <= 1) {
      return null
    } else {
      setCoffeeQuantity(coffeeQuantity - 1)
    }
  }

  function handleIncreaseQuantity() {
    if (coffeeQuantity >= 9) {
      return null
    } else {
      setCoffeeQuantity(coffeeQuantity + 1)
    }
  }

  function handleChangeCart() {
    const changedCoffeeIndex = coffeesInCart.findIndex((coffee) => {
      return coffee.title === title
    })

    if (coffeesInCart.length >= 5 && changedCoffeeIndex < 0) {
      return null
    }

    if (changedCoffeeIndex < 0) {
      handleSetCoffeesInCart([
        ...coffeesInCart,
        { title, coffeeImage, coffeeQuantity },
      ])
      setCoffeeQuantity(1)
    } else {
      handleSetCoffeesInCart(
        produce(coffeesInCart, (draft) => {
          if (draft[changedCoffeeIndex].coffeeQuantity + coffeeQuantity > 99) {
            draft[changedCoffeeIndex].coffeeQuantity = 99
          } else {
            draft[changedCoffeeIndex].coffeeQuantity += coffeeQuantity
          }
        })
      )
      setCoffeeQuantity(1)
    }
  }

  return (
    <CoffeeCard>
      <img src={coffeeImage} alt="Imagem do café" />
      <TagsContainer>
        {tags.map((tag) => {
          return <CoffeeTags key={uuidv4()}>{tag}</CoffeeTags>
        })}
      </TagsContainer>
      <h1>{title}</h1>
      <p>{description}</p>
      <ItemPrice>
        <h1>9,90</h1>
        <AddItem>
          <QuantityButton>
            <button onClick={handleDecreaseQuantity}>
              <Minus weight="bold" />
            </button>
            <input
              type="number"
              min={1}
              value={coffeeQuantity}
              onChange={() => {}}
              disabled={true}
            />
            <button onClick={handleIncreaseQuantity}>
              <Plus weight="bold" />
            </button>
          </QuantityButton>

          <CartButton onClick={handleChangeCart}>
            <ShoppingCartSimple size={24} weight="fill" />
          </CartButton>
        </AddItem>
      </ItemPrice>
    </CoffeeCard>
  )
}
