import LayoutPrincipal from '../../layout/LayoutPrincipal'
import Motori from '../../../public/Motorizacion.png'

const Motorizacion = () => {
  return (
    <div className="motorizacion" id="motorizacion">
      <LayoutPrincipal>
        <div className="motorizacion_container">
            <div className="motorizacion_container_img">
                <img src={Motori} alt="motorizacion e Instalacion" />
            </div>
            <div className="motorizacion_container_info">
                <h3>MOTORIZACIÓN Y DOMÓTICA</h3>
                <h2>Comodidad elegancia y estilo</h2>
                <p>Sistemas de automatización adaptados a cualquier tipo de cortinas o persianas con el que podrá programar desde su celular y desde cualquier lugar.
                </p>
            </div>
        </div>
      </LayoutPrincipal>
    </div>
  )
}

export default Motorizacion
