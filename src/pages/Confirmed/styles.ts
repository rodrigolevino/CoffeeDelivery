import styled from "styled-components"

export const SuccessContainer = styled.div`
  max-width: 1120px;
  margin: auto;
  margin-top: 5rem;

  display: grid;
  grid-template-columns: auto auto;
  align-items: end;
  justify-content: space-between;

  @media (max-width: 1135px) {
    justify-content: center;
    grid-template-columns: auto;
    gap: 3rem;
    margin-top: 3rem;
  }

  @media (max-width: 565px) {
    padding: 0 1rem;

    img {
      width: 100%;
    }
  }
`

export const DeliveryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  h1 {
    color: ${(props) => props.theme["yellow-700"]};
    font-size: 2rem;
    font-weight: 800;
    line-height: 1.3;
  }

  p {
    color: ${(props) => props.theme["gray-800"]};
    font-size: 1.25rem;
    line-height: 1.3;
  }

  main {
    display: grid;
    grid-template-columns: auto;
    gap: 2rem;

    padding: 2.5rem;
    min-width: 32.875rem;
    min-height: 16.875rem;
    border: 1px solid transparent;
    background: linear-gradient(
          ${(props) => props.theme.white},
          ${(props) => props.theme.white}
        )
        padding-box,
      linear-gradient(
          135deg,
          ${(props) => props.theme["yellow-500"]},
          ${(props) => props.theme["purple-500"]}
        )
        border-box;
    mask-composite: exclude;
    border-radius: 6px 36px;

    @media (max-width: 565px) {
      min-width: 0;
    }
  }
`

const ITENS_COLORS = {
  orange: "yellow-700",
  yellow: "yellow-500",
  purple: "purple-500",
} as const

interface ItensProps {
  $itemColor: keyof typeof ITENS_COLORS
}

export const OrderInfo = styled.div<ItensProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    background: ${(props) => props.theme[ITENS_COLORS[props.$itemColor]]};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    aspect-ratio: 1/1;
    height: 2rem;
    border-radius: 50%;
  }

  svg {
    color: ${(props) => props.theme["gray-100"]};
  }

  p {
    color: ${(props) => props.theme["gray-700"]};
    font-size: 1rem;
    line-height: 1.3;
  }

  span {
    color: ${(props) => props.theme["gray-700"]};
    font-size: 1rem;
    line-height: 1.3;
    font-weight: bold;
  }
`
