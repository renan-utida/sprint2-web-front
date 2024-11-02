import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Nav from "./components/Nav"

import { QuizProvider } from "./context/quiz";

function App() {


  return (
    <>
        <Nav/>
        <QuizProvider>
            <Outlet/>
        </QuizProvider>
        <Footer/>
    </>
  )
}

export default App
