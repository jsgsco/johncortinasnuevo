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

const App = () => {
  return (
    <>
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
      <div className="whatsapp-button">
        <a
          href="https://api.whatsapp.com/send?phone=TUNUMERO&text=Hola%20desde%20mi%20sitio%20web"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Whastapp}
            alt="WhatsApp"
          />
        </a>
      </div>

    </>
  )
}

export default App