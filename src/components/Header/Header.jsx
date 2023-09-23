import LayoutPrincipal from '../../layout/LayoutPrincipal'
import Logo from '../../../public/logo.png'

import Cel from '../../../public/mobile3.png'
import Location from '../../../public/location1.png'
import Email from '../../../public/envelop1.png'

const Header = () => {
  const menu = [
    {id: 1, nombre: 'Persianas', tag: '#persianas'},
    {id: 2, nombre: 'Cortinas', tag: '#productos'},
    {id: 3, nombre: 'Motorización', tag: '#motorizacion'},
    {id: 4, nombre: 'Toldos', tag: '#productos'},
    {id: 5, nombre: 'Promociones', tag: 'https://www.instagram.com/johncortinasypersianas/'},
    {id: 6, nombre: 'Servicios', tag: '#servicios'},
    {id: 7, nombre: 'Contacto', tag: '#contacto'}
  ]

  const data = [
    {id:1, nombre: '321 274 0192', photo: Cel},
    {id:2, nombre: 'Carrera 80 # 68a-08 Bogota, Colombia', photo: Location},
    {id:3, nombre: 'johncortinasypersianas@gmail.com', photo: Email}
  ]

  return (
    <div className="header">
      <div className="header_redes">
        <LayoutPrincipal>
          <div className="header_redes_container">
            {
              data.map(item => (
                <div className="header_redes_container_item" key={item.id}>
                  <img src={item.photo} alt={item.nombre} />
                  <p>{item.nombre}</p>
                </div>
              ))
            }
          </div>
        </LayoutPrincipal>
      </div>
      <div className="header_container">
        <LayoutPrincipal>
          <div className="header_container">
            <div className="header_container_logo">
              <img src={Logo} alt="JohnCortinas" />
            </div>
            <div className="header_container_menu">
              {
                menu.map(item => (
                  <a href={item.tag} key={item.id}>{item.nombre}</a>
                ))
              }
            </div>
          </div>
        </LayoutPrincipal>
      </div>
    </div>
  )
}

export default Header