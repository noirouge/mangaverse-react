import Footer from "./layout/Footer"
import Header from "./layout/Header"
import HomePage from "./pages/HomePage"

function App() {

  return (
    <>
<Header />
<div className="container mx-auto p-2 flex flex-col items-center">
<HomePage />
</div>
<Footer />
    </>
  )
}

export default App
