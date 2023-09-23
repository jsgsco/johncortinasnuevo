import { useEffect, useState, useMemo } from 'react'
import { Helmet } from 'react-helmet'
import Header from './components/Header/Header'
import Slider from './components/Slider/Slider'
import AsesoriaEInstalacion from './components/AsesoriaeInstalacion/AsesoriaEInstalacion'
import Productos from './components/Productos/Productos'
import Llamada from './components/Llamada/Llamada'
import Motorizacion from './components/Motorizacion/Motorizacion'
import Servicios from './components/Servicios/Servicios'
import { Mapa } from './components/Mapa/Mapa'
import Contacto from './components/Contacto/Contacto'
import Whastapp from '../public/whatsapp-logo.png'
import Instagram from '../public/instagram-logo.png'

import CortinasContext from './context/CortinasContext'

const App = () => {

  const [data, setData] = useState(undefined)

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('data.json')
        const data = await response.json()
        setData(data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  const dataList = useMemo(
    () => ({
      data
    }), [data]
  )

  if(!data) return

  const handleWhatsapp = () => {
      const mensaje = `Hola, ¿cómo estás?, requiero una asesoria.`
      const linkContruit = `https://api.whatsapp.com/send?phone=573212740192&text=${encodeURIComponent(mensaje)}`
      window.open(linkContruit, '_blank')
  }

  return (
    <>
      <CortinasContext.Provider value={dataList}>
        <Helmet>
          <title>John Cortinas & Persianas</title>
        </Helmet>
        <Header />
        <Slider/>
        <AsesoriaEInstalacion/>
        <Productos />
        <Llamada />
        <Motorizacion />
        <Servicios />
        <Mapa />
        <Contacto />
        <div className="whatsapp-button" onClick={ handleWhatsapp }>
          <a
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Whastapp}
              alt="WhatsApp"
            />
          </a>
        </div>
        <div className="instagram-button">
          <a
            href="https://www.instagram.com/johncortinasypersianas/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Instagram}
              alt="Instagram"
            />
          </a>
        </div>
      </CortinasContext.Provider>
    </>
  )
}

export default App