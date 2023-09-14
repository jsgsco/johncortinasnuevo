import LayoutPrincipal from '../../layout/LayoutPrincipal'
import Location from '../../assets/location.png'
import Mobile from '../../assets/mobile2.png'
import Email from '../../assets/envelop.png'

const Contacto = () => {

  const data = [
    {id: 1, nombre: 'Dirección', descripcion: 'Carrera 80 # 68a-08 Bogota, Colombia', photo: Location},
    {id: 2, nombre: 'Llámenos', descripcion: '321 274 0192', photo: Mobile},
    {id: 3, nombre: 'Correo', descripcion: 'johncortinasypersianas@gmail.com', photo: Email}
  ]

  return (
    <div className="contacto" id="contacto">
      <LayoutPrincipal>
        <div className="contacto_container">
            <div className="contacto_container_info">
                <h3>COMUNICATE CON NOSOTROS</h3>
                <h2>Contáctenos</h2>
                <p>No dude en contactarnos para una propuesta de proyecto, cotización, o simplemente para saludarnos. 
Aquí está nuestra información de contacto.</p>
            </div>
            <div className="contacto_container_items">
              {
                data.map(item => (
                  <div className="contacto_container_items_item" key={item.id}>
                    <img src={item.photo} alt={item.nombre} className="contacto_container_items_item_img" />
                    <div className="contacto_container_items_item_info">
                      <h2>{item.nombre}</h2>
                      <p>{item.descripcion}</p>
                    </div>
                  </div>
                ))
              }
            </div>
        </div>
      </LayoutPrincipal>
    </div>
  )
}

export default Contacto
