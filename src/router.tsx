import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Confirmed } from "./pages/Confirmed"
import { DefaultLayout } from "./layouts/DefaultLayout"
import { Checkout } from "./pages/Checkout"

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Confirmed" element={<Confirmed />} />
      </Route>
    </Routes>
  )
}
