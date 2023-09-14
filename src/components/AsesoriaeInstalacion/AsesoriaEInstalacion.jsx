import LayoutPrincipal from '../../layout/LayoutPrincipal'
import Asesoria from '../../assets/cortinas.png'
import Whastapp from '../WhatsappBTN/Whastapp'

const AsesoriaEInstalacion = () => {
  return (
    <div className="asesoria" id="persianas">
      <LayoutPrincipal>
        <div className="asesoria_container">
            <div className="asesoria_container_info">
                <h3>ASESORÍA E INSTALACIÓN DE</h3>
                <h2>Cortinas y persianas</h2>
                <p>Te acompañamos de principio a fin en el proceso de decoración de tu ambiente para darle un toque único y diferente. Ofrecemos una amplia variedad en telas y estilos para adecuar la tecnología y el diseño a tus necesidades.</p>
                <p>Somos una empresa que cumple lo que promete, te entregamos instaladas tus cortinas modernas en el tiempo acordado y sin contratiempos.</p>
                <Whastapp />
            </div>
            <div className="asesoria_container_img">
                <img src={Asesoria} alt="Asesoria e Instalacion" />
            </div>
        </div>
      </LayoutPrincipal>
    </div>
  )
}

export default AsesoriaEInstalacion
