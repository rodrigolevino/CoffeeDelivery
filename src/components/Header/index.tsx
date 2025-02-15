import coffeeLogo from '../../assets/coffee-logo.svg'

import { MapPin, ShoppingCart } from "@phosphor-icons/react"
import { CheckoutNavigate, HeaderContainer, Location } from './styles'
import { useContext } from 'react'
import { CheckoutContext } from '../../contexts/CheckoutContexts'
import { NavLink } from 'react-router-dom'

export function Header() {
  const { coffeesInCart } = useContext(CheckoutContext)
  const CartLenght = coffeesInCart.length

  return (
    <HeaderContainer>
      <NavLink to={"/"}>
        <img src={coffeeLogo} alt="Logo Coffee Delivery" />
      </NavLink>
      <nav>
        <Location>
          <MapPin size={24} weight="fill" />
          <p>Maceió, AL</p>
        </Location>
        <NavLink to={"/checkout"}>
          <CheckoutNavigate $coffeeQuantity={CartLenght}>
            <ShoppingCart size={24} weight="fill" />
          </CheckoutNavigate>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
