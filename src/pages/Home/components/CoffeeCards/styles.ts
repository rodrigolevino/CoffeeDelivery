import styled from "styled-components"

export const CoffeeCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: ${(props) => props.theme["gray-200"]};
  padding: 0 1.5rem 1.25rem;
  border-radius: 6px 36px;
  max-width: 256px;
  max-height: 310px;

  h1 {
    font-size: 1.25rem;
    line-height: 1.3;
    font-weight: bold;
    margin-bottom: 0.5rem;
    margin-top: 1rem;
  }

  p {
    width: 13.5rem;
    color: ${(props) => props.theme["gray-600"]};
    font-size: 0.875rem;
    line-height: 1.3;
    text-align: center;
  }

  img {
    margin-top: calc(0px - 1.25rem);
  }
`

export const TagsContainer = styled.div`
  display: flex;
  gap: 0.25rem;
`

export const CoffeeTags = styled.div`
  background-color: ${(props) => props.theme["yellow-300"]};
  padding: 0.25rem 0.5rem;
  border-radius: 100px;
  color: ${(props) => props.theme["yellow-700"]};
  font-size: 0.625rem;
  line-height: 1.3;
  font-weight: bold;
  margin-top: 0.75rem;
`

export const ItemPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  gap: 1.5rem;

  display: flex;
  align-items: center;

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
    color: ${(props) => props.theme["gray-700"]};
    line-height: 1.3;
  }

  h1::before {
    content: "R$ ";
    font-family: "roboto", sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.3;
  }
`

export const AddItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
    height: 2.375rem;
    background: ${(props) => props.theme["gray-400"]};
    border: none;
    border-radius: 6px;
    padding: 0.5rem;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  cursor: pointer;
  color: ${(props) => props.theme["gray-200"]};
  background-color: ${(props) => props.theme["purple-700"]};
  padding: 0.4375rem;
  border-radius: 6px;
  transition: 0.1s ease;

  &:hover {
    background-color: ${(props) => props.theme["purple-500"]};
  }
`

export const QuantityButton = styled.div`
  position: relative;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    background: 0;
    border: 0;
    color: ${(props) => props.theme["purple-500"]};
    transition: 0.1s ease;

    &:hover {
      color: ${(props) => props.theme["purple-700"]};
    }

    &:focus {
      box-shadow: 0px 0px 0px 0px;
    }
  }

  button:first-of-type {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0.5rem;
  }

  button:last-of-type {
    position: absolute;
    top: 50%;
    transform: translate(-100%, -50%);
    left: calc(100% - 0.5rem);
  }
`
