import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './sass/index.sass'
import WebFont from 'webfontloader'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
 
WebFont.load({
  google: {
    families: ['Roboto:400,500,700', 'sans-serif']
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />,
)
