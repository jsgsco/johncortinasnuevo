import WhatsappLogo from '../../../public/whatsapplogo.svg'

const Whastapp = ({color = '', nombre = '', tipo = '', imagen = '', texto = 'Hablemos por Whatsapp'}) => {

  const handleWhatsapp = () => {
    
    if(!nombre && !tipo && !imagen) {
      const mensaje = `Hola, ¿cómo estás?, requiero una asesoria.`
      const linkContruit = `https://api.whatsapp.com/send?phone=573212740192&text=${encodeURIComponent(mensaje)}`
      window.open(linkContruit, '_blank')
    } else {
      const mensaje = `Hola, ¿cómo estás?, estoy interesado en este producto: ${nombre} - ${tipo}, imagen de referencia ${imagen}`
      const linkContruit = `https://api.whatsapp.com/send?phone=573212740192&text=${encodeURIComponent(mensaje)}`
      window.open(linkContruit, '_blank')
    }
  }

  return (
    <div className={color === 'blue' ? 'whatsapp-blue' : 'whatsapp'} onClick={ handleWhatsapp }>
      <span> <img src={WhatsappLogo} alt="Whatsapp" /> {texto}</span>
    </div>
  )
}

export default Whastapp
