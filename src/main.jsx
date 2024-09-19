import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
/*Importando as denpendências para criar as rotas*/
import GlobalStyle from './global-styled.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home/index.jsx'
import NoticiaTecnologia from './routes/NoticiaPages/NoticiaTecnologia/index.jsx'
import NoticiaCorrida from './routes/NoticiaPages/NoticiaCorrida/index.jsx'
import NoticiaEventos from './routes/NoticiaPages/NoticiaEventos/index.jsx'
import NoticiaSustentabilidade from './routes/NoticiaPages/NoticiaSustentabilidade/index.jsx'
import NoticiaPesquisa from './routes/NoticiaPages/NoticiaPesquisa/index.jsx'
import FormulaE from './routes/Formulae/index.jsx'
import Error from './routes/Error'

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
      { path: '/noticia-tecnologia', element: <NoticiaTecnologia/>},
      { path: '/noticia-corrida', element: <NoticiaCorrida/>},
      { path: '/noticia-eventos', element: <NoticiaEventos/>},
      { path: '/noticia-sustentabilidade', element: <NoticiaSustentabilidade/>},
      { path: '/noticia-pesquisa', element: <NoticiaPesquisa/>},
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    <GlobalStyle />
  </StrictMode>,
)
