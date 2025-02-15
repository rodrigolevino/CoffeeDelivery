import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Router } from "./router";
import { BrowserRouter } from "react-router-dom";
import { CheckoutContextProvider } from "./contexts/CheckoutContexts";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CheckoutContextProvider>
          <Router />
          <GlobalStyle />
        </CheckoutContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
