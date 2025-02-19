import styled from "styled-components"

export const CheckoutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2.5rem 0 2.5rem;

  form {
    display: flex;
    align-items: start;
    justify-content: space-between;
    max-width: 1120px;
    gap: 2rem;
  }

  aside {
    display: flex;
    flex-direction: column;
    gap: 0.9375rem;
  }

  aside::before {
    content: "Cafés selecionados";
    font-family: "baloo 2", sans-serif;
    font-size: 1.125rem;
    font-weight: bold;
    line-height: 1.3;
    color: ${(props) => props.theme["gray-800"]};
  }

  @media (max-width: 1135px) {
    form {
      flex-direction: column;
    }

    aside {
      width: 100%;
    }
  }

  @media (max-width: 670px) {
    aside {
      align-items: center;
    }
  }
`

export const SelectedCoffees = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  background: ${(props) => props.theme["gray-200"]};
  width: 28rem;

  border-radius: 6px 44px;
  padding: 2.5rem;

  @media (max-width: 1135px) {
    width: 100%;
  }

  @media (max-width: 670px) {
    width: 28rem;
  }

  @media (max-width: 465px) {
    width: 25rem;
  }

  @media (max-width: 425px) {
    width: 23rem;
  }

  @media (max-width: 390px) {
    width: 20rem;
  }

  @media (max-width: 345px) {
    width: 18rem;
  }
`

export const CoffeeInCheckout = styled.div`
  display: flex;
  gap: 1.25rem;
  border-bottom: 1px solid ${(props) => props.theme["gray-400"]};
  padding: 0.5rem 0.25rem 2rem;
  position: relative;

  img {
    width: 4rem;
  }

  &::after {
    content: "R$ 9,90";
    color: ${(props) => props.theme["gray-700"]};
    font-size: 1rem;
    line-height: 1.3;
    font-weight: bold;

    position: absolute;
    right: 0.25rem;

    @media (max-width: 425px) {
      font-size: 0.875rem;
    }

    @media (max-width: 345px) {
      right: 0;
      font-size: 0.8rem;
    }
  }
`

export const CoffeeInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  p {
    color: ${(props) => props.theme["gray-800"]};
    font-size: 1rem;
    line-height: 1.3;

    @media (max-width: 425px) {
      font-size: 0.875rem;
    }

    @media (max-width: 390px) {
      max-width: 100px;
    }

    @media (max-width: 345px) {
      font-size: 0.8rem;
    }
  }
`

export const CoffeeActions = styled.div`
  display: flex;
  gap: 0.5rem;

  input {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: ${(props) => props.theme["gray-900"]};
    font-size: 1rem;
    line-height: 1.3;
    width: 4.5rem;
    height: 2rem;
    background: ${(props) => props.theme["gray-400"]};
    border: none;
    border-radius: 6px;
    padding: 0.5rem;

    @media (max-width: 345px) {
      width: 4rem;
      font-size: 0.875rem;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  button svg {
    @media (max-width: 345px) {
      width: 14px;
      height: 14px;
    }
  }
`

export const RemoveButton = styled.button`
  cursor: pointer;
  background: ${(props) => props.theme["gray-400"]};
  border: 0;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0 0.5rem;

  svg {
    color: ${(props) => props.theme["purple-500"]};
  }

  color: ${(props) => props.theme["gray-700"]};
  font-size: 0.75rem;
  line-height: 1.6;
  transition: 0.1s ease;

  &:hover {
    background: ${(props) => props.theme["gray-500"]};
  }

  @media (max-width: 345px) {
    font-size: 0.6rem;
  }
`

export const CoffeeTotalPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${(props) => props.theme["gray-700"]};
  }

  p {
    font-size: 0.875rem;
    line-height: 1.3;
  }

  h2 {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3;
  }

  h1 {
    font-family: "roboto", sans-serif;
    color: ${(props) => props.theme["gray-800"]};
    font-size: 1.25rem;
    line-height: 1.3;
  }
`

export const ConfirmeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  background: ${(props) => props.theme["yellow-500"]};
  color: ${(props) => props.theme.white};
  font-size: 0.875rem;
  line-height: 1.6;
  font-weight: bold;
  border: 0;

  height: 2.875rem;
  border-radius: 6px;
  transition: 0.1s ease;

  &:not(:disabled):hover {
    background: ${(props) => props.theme["yellow-700"]};
  }

  &:disabled {
    opacity: 0.8;
    cursor: initial;
  }
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.75rem;

  @media (max-width: 670px) {
    align-items: center;
  }

  &::before {
    content: "Complete seu pedido";
    font-family: "baloo 2", sans-serif;
    font-size: 1.125rem;
    font-weight: bold;
    line-height: 1.3;
    padding-bottom: 0.1875rem;
    color: ${(props) => props.theme["gray-800"]};
  }
`

export const FormsContainerBase = styled.div`
  background: ${(props) => props.theme["gray-200"]};
  border-radius: 6px;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 100%;

  @media (max-width: 670px) {
    width: 28rem;
  }

  @media (max-width: 465px) {
    width: 25rem;
  }

  @media (max-width: 425px) {
    width: 23rem;
  }

  @media (max-width: 390px) {
    width: 20rem;
  }

  @media (max-width: 345px) {
    width: 18rem;
  }

  span {
    display: flex;
    gap: 0.5rem;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 0.125rem;
    }

    h2 {
      color: ${(props) => props.theme["gray-800"]};
      font-size: 1rem;
      line-height: 1.3;
      font-weight: 400;
    }

    p {
      color: ${(props) => props.theme["gray-700"]};
      font-size: 0.875rem;
      line-height: 1.3;
      font-weight: 400;
    }
  }
`

export const AdressFormContainer = styled(FormsContainerBase)`
  svg {
    color: ${(props) => props.theme["yellow-700"]};
  }
`

export const MainAdressForm = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    background: ${(props) => props.theme["gray-300"]};
    border: 1px solid ${(props) => props.theme["gray-400"]};
    border-radius: 6px;
    padding: 0.75rem;

    align-items: center;
    justify-content: center;

    color: ${(props) => props.theme["gray-600"]};
    font-size: 0.875rem;
    line-height: 1.3;

    @media (max-width: 670px) {
      width: 100%;
    }

    @media (max-width: 425px) {
      font-size: 0.75rem;
    }

    &:focus {
      box-shadow: 0 0 0 1px ${(props) => props.theme["yellow-700"]};
    }

    &:valid {
      color: ${(props) => props.theme["gray-700"]};
    }
  }

  main {
    display: grid;
    grid-template-columns: 12.5rem 17.25rem 3.75rem;
    gap: 0.75rem;

    @media (max-width: 670px) {
      grid-template-columns: 8.125rem 10.95rem 1fr;
      gap: 0.4875rem;
    }

    @media (max-width: 465px) {
      grid-template-columns: 7rem 9rem 1fr;
    }

    @media (max-width: 425px) {
      grid-template-columns: 6rem 8rem 1fr;
    }

    @media (max-width: 390px) {
      grid-template-rows: auto 1fr;
      grid-template-columns: 4fr 1fr;
      gap: 1rem 0.4875rem;
    }
  }

  #cidadeInput {
    @media (max-width: 390px) {
      grid-column: span 2;
    }
  }

  #bairroInput {
    @media (max-width: 390px) {
      grid-column: 1;
      grid-row: 2;
    }
  }
`

export const ComplementAndNumberInputs = styled.div`
  display: grid;
  grid-template-columns: 12.5rem 1fr;
  gap: 0.75rem;

  @media (max-width: 670px) {
    grid-template-columns: 8.125rem 1fr;
    gap: 0.4875rem;
  }

  @media (max-width: 465px) {
    grid-template-columns: 7rem 1fr;
  }

  @media (max-width: 425px) {
    grid-template-columns: 6rem 1fr;
  }

  @media (max-width: 390px) {
    grid-template-columns: 5rem 1fr;
  }
`

export const CEPInput = styled.input`
  max-width: 200px;

  @media (max-width: 670px) {
    max-width: 8.125rem;
  }

  @media (max-width: 465px) {
    max-width: 7rem;
  }

  @media (max-width: 425px) {
    max-width: 6rem;
  }

  @media (max-width: 390px) {
    max-width: 5rem;
  }
`

export const ComplementInputContainer = styled.div`
  background: ${(props) => props.theme["gray-300"]};
  border: 1px solid ${(props) => props.theme["gray-400"]};
  border-radius: 6px;
  padding: 0.75rem;

  display: grid;
  grid-template-columns: 1fr auto;
  gap: 0.25rem;
  align-items: center;
  justify-content: space-between;

  color: ${(props) => props.theme["gray-600"]};
  font-size: 0.875rem;
  line-height: 1.3;

  input {
    background: none;
    border: 0;
    border-radius: 0;
    padding: 0;

    &:focus {
      box-shadow: 0 0 0 0;
    }
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: fit-content;

    font-size: 0.75rem;
    line-height: 1.3;
    color: ${(props) => props.theme["gray-600"]};
    font-style: italic;

    @media (max-width: 425px) {
      font-size: 0.625rem;
    }
  }
`

export const PaymentMethodContainer = styled(FormsContainerBase)`
  svg {
    color: ${(props) => props.theme["purple-500"]};
  }
`

export const MethodsToPay = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.75rem;

  @media (max-width: 670px) {
    grid-template-columns: auto;
  }

  input:checked + label {
    background-color: ${(props) => props.theme["purple-300"]};
    border: 1px solid ${(props) => props.theme["purple-500"]};
  }

  input {
    display: none;
  }

  label {
    cursor: pointer;
    background-color: ${(props) => props.theme["gray-400"]};
    padding: 1rem;
    border-radius: 6px;
    border: 1px solid transparent;

    display: flex;
    align-items: center;
    justify-content: left;
    gap: 0.75rem;

    color: ${(props) => props.theme["gray-700"]};
    font-size: 0.75rem;
    line-height: 1.6;

    &:hover {
      background-color: ${(props) => props.theme["gray-500"]};
    }
  }
`
