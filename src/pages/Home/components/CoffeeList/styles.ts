import styled from "styled-components"

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 2.5rem 2rem;

  @media (max-width: 1135px) {
    grid-template-columns: auto auto auto;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
  }

  @media (max-width: 870px) {
    grid-template-columns: auto auto;
    gap: 2.5rem 5rem;
  }

  @media (max-width: 610px) {
    grid-template-columns: auto;
  }
`
