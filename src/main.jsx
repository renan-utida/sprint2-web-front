import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
/*Importando as denpendências para criar as rotas*/
import FormulaE from './routes/Formulae/index.jsx'
import Error from './routes/Error'
import GlobalStyle from './global-styled.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home/index.jsx'
import NoticiaTecnologia from './routes/NoticiaTecnologia/index.jsx'

/*Criando a função createBrowserRouter*/
const router = createBrowserRouter ([
  {
    // Criando as rotas pai
    path: '/',
    element: <App/>,
    errorElement: <Error/>,

    // Criando as rotas filhas
    children: [
      { path: '/', element: <Home/> },
      { path: '/formulae', element: <FormulaE /> },
      { path: '/noticia-tecnologia', element: <NoticiaTecnologia/>}
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    <GlobalStyle />
  </StrictMode>,
)
