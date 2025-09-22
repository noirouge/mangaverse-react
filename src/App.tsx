import { RouterProvider } from "react-router"
import Footer from "./layout/Footer"
import Header from "./layout/Header"
import router from "./router"

function App() {

  return (
    <>
<Header />

<RouterProvider router={router} />

<Footer />
    </>
  )
}

export default App
