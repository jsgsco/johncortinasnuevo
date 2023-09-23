import LayoutPrincipal from '../../layout/LayoutPrincipal'

const Llamada = () => {

  const handleWhatsapp = () => {
    const mensaje = `Hola, ¿cómo estás?, requiero una llamada.`
    const linkContruit = `https://api.whatsapp.com/send?phone=573212740192&text=${encodeURIComponent(mensaje)}`
    window.open(linkContruit, '_blank')
  }

  return (
    <div className="llamada">
        <LayoutPrincipal>
            <p>Estamos aquí para atender sus necesidades y responder a sus preguntas. No dude en ponerse en contacto con nosotros en cualquier momento o solicitar una llamada. Estamos ansiosos por ayudarle en todo lo que podamos</p>
            <button onClick={ handleWhatsapp }>Solicitar una Llamada</button>
        </LayoutPrincipal>
    </div>
  )
}

export default Llamada
