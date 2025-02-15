import styled from "styled-components"
import introBackground from "../../assets/coffee-delivery-background.png"

export const IntroContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: center;
  gap: 4.8125rem;
  background: url(${introBackground}) center no-repeat;
  background-size: cover;
  padding: 5.75rem 0.625rem;

  h1 {
    color: ${(props) => props.theme["gray-900"]};
    font-size: 3rem;
    font-weight: 800;
    line-height: 1.3;
    flex-wrap: wrap;
  }

  h2 {
    color: ${(props) => props.theme["gray-800"]};
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.3;
  }

  @media (max-width: 1135px) {
    grid-template-columns: auto;
    grid-row-start: auto;

    img {
      order: -1;
    }

    h1, h2 {
      text-align: center;
    }
  }
`

export const IntroImage = styled.div`
  @media (max-width: 1135px) {
      order: -1;
      margin: auto;
  }
`

export const IntroTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 588px;
`

export const IntroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;
`

const ITENS_COLORS = {
  orange: "yellow-700",
  yellow: "yellow-500",
  gray: "gray-700",
  purple: "purple-500",
} as const

interface ItensProps {
  $itemColor: keyof typeof ITENS_COLORS
}

export const ItensContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 1.25rem 2.5rem;
  max-width: 567px;
`



export const IntroItens = styled.div<ItensProps>`
  display: flex;
  align-items: center;
  font-size: 1rem;
  line-height: 1.3;
  gap: 0.75rem;

  div {
    background: ${props => props.theme[ITENS_COLORS[props.$itemColor]]};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    aspect-ratio: 1/1;
    height: 2rem;
    border-radius: 50%;
  }

  svg {
    color: ${(props) => props.theme['gray-100']};
  }
`

export const CoffeeContainer = styled.div`
  max-width: 1140px;
  margin: auto;
  margin-top: 2rem;
  margin-bottom: 10rem;

  h1 {
    color: ${props => props.theme["gray-800"]};
    font-size: 2rem;
    line-height: 1.3;
    font-weight: 800;
    margin-bottom: 3.375rem;
  }
`