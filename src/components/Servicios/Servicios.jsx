import LayoutPrincipal from '../../layout/LayoutPrincipal'
import Reparacion from '../../../public/tools.png'
import Preventiva from '../../../public/hammer.png'
import Lavado from '../../../public/magic-wand.png'
import Motorizacion from '../../../public/mobile.png'

const Servicios = () => {

    const data = [
        {id: 1, nombre: 'Servicio de', titulo: 'Reparación', photo: Reparacion},
        {id: 2, nombre: 'Acciones Preventivas', titulo: 'Mantenimiento', photo: Preventiva},
        {id: 3, nombre: 'Servicio de', titulo: 'Lavado', photo: Lavado},
        {id: 4, nombre: 'Domotica &', titulo: 'Motorización', photo: Motorizacion}
    ]

  return (
    <div className="servicios" id="servicios">
      <LayoutPrincipal>
        <div className="servicios_container">
            <div className="servicios_container_items">
                {
                    data.map(item => (
                        <div className="servicios_container_items_item" key={item.id}>
                            <img src={item.photo} alt={item.nombre} />
                            <h3>{item.nombre}</h3>
                            <h2>{item.titulo}</h2>
                        </div>
                    ))
                }
            </div>
            <div className="servicios_container_info">
                <h3>SERVICIOS CON GRANTIA</h3>
                <h2>Nuestros Servicios</h2>
                <p>Estamos comprometidos con nuestros clientes a ofrecer el mejor servicio y productos de alta calidad.</p>
            </div>
        </div>
      </LayoutPrincipal>
    </div>
  )
}

export default Servicios