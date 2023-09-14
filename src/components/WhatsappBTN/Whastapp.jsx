import WhatsappLogo from '../../assets/whatsapplogo.svg'

const Whastapp = ({color = ''}) => {
  return (
    <div className={color === 'blue' ? 'whatsapp-blue' : 'whatsapp'}>
      <span> <img src={WhatsappLogo} alt="Whatsapp" /> Hablemos por Whatsapp</span>
    </div>
  )
}

export default Whastapp
