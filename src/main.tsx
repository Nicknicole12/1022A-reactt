import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './componentes/header/Header'
import Main from './componentes/main/Main'
import Footer from './componentes/footer/Footer'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    <Main/>
    <Footer></Footer>
  </React.StrictMode>,
)
