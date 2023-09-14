import LayoutPrincipal from '../../layout/LayoutPrincipal'
import Whatsapp from '../WhatsappBTN/Whastapp'
import Sheer from '../../assets/sheer.png'

const Productos = () => {
  return (
    <div className="productos" id="productos">
        <LayoutPrincipal>
            <h3>PRODUCTOS</h3>
            <h2>Nuestro portafolio</h2>
            <div className="productos_productos">
                <div className="productos_productos_producto">
                    <img className="productos_productos_producto_img" src={Sheer} alt="Tipo Sheer" />
                    <h3>TIPO</h3>
                    <h2>Sheer</h2>
                    <p>Sofisticadas y exclusivas, son un producto para espacios decorados con diseño, elegancia y sobriedad. Una alternativa única y diferente gracias al diseño, a la calidad de las telas y a la versatilidad del sistema en el que se fabrican.</p>
                    <Whatsapp color={"blue"}/>
                </div>
                <div className="productos_productos_producto">
                    <img className="productos_productos_producto_img" src={Sheer} alt="Tipo Sheer" />
                    <h3>TIPO</h3>
                    <h2>Sheer</h2>
                    <p>Sofisticadas y exclusivas, son un producto para espacios decorados con diseño, elegancia y sobriedad. Una alternativa única y diferente gracias al diseño, a la calidad de las telas y a la versatilidad del sistema en el que se fabrican.</p>
                    <Whatsapp color={"blue"}/>
                </div>
                <div className="productos_productos_producto">
                    <img className="productos_productos_producto_img" src={Sheer} alt="Tipo Sheer" />
                    <h3>TIPO</h3>
                    <h2>Sheer</h2>
                    <p>Sofisticadas y exclusivas, son un producto para espacios decorados con diseño, elegancia y sobriedad. Una alternativa única y diferente gracias al diseño, a la calidad de las telas y a la versatilidad del sistema en el que se fabrican.</p>
                    <Whatsapp color={"blue"}/>
                </div>
                <div className="productos_productos_producto">
                    <img className="productos_productos_producto_img" src={Sheer} alt="Tipo Sheer" />
                    <h3>TIPO</h3>
                    <h2>Sheer</h2>
                    <p>Sofisticadas y exclusivas, son un producto para espacios decorados con diseño, elegancia y sobriedad. Una alternativa única y diferente gracias al diseño, a la calidad de las telas y a la versatilidad del sistema en el que se fabrican.</p>
                    <Whatsapp color={"blue"}/>
                </div>
            </div>
        </LayoutPrincipal>
    </div>
  )
}

export default Productos
