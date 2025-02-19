import styled from "styled-components"

export const HeaderContainer = styled.header`
  display: flex;
  margin: auto;
  justify-content: space-between;
  max-width: 1120px;
  align-items: center;
  padding: 2rem 0;

  img {
    cursor: pointer;
  }

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
  }

  @media (max-width: 1135px) {
    padding: 2rem;
  }

  @media (max-width: 375px) {
    img {
      width: 4.375rem;
    }
  }
`

export const Location = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  background-color: ${(props) => props.theme["purple-300"]};
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;

  svg {
    color: ${(props) => props.theme["purple-500"]};
  }

  p {
    color: ${(props) => props.theme["purple-700"]};
    font-size: 0.875rem;
    line-height: 1.3;
  }

  @media (max-width: 375px) {
    svg {
      width: 20px;
    }

    p{
      font-size: 0.8rem;
    }
  }
`

interface CheckoutNavigateProps {
  $coffeeQuantity: number 
}

export const CheckoutNavigate = styled.div<CheckoutNavigateProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  background: ${(props) => props.theme["yellow-300"]};
  color: ${(props) => props.theme["yellow-700"]};
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;

  &::after {
    content: "${(props) => props.$coffeeQuantity}";

    display: ${props => props.$coffeeQuantity ? "flex" : "none"};
    align-items: center;
    justify-content: center;
    text-align: center;
    position: absolute;
    bottom: calc(100% - 0.75rem);
    left: calc(100% - 0.75rem);

    color: ${(props) => props.theme.white};
    font-size: 0.75rem;
    font-weight: bold;
    line-height: 1.25rem;
    letter-spacing: -0.6px;

    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme["yellow-700"]};
  }
`
