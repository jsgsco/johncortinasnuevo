import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const CardImagen = ({ imagenes = [], className }) => {

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    arrows: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1200
  }

  return (
    <Slider {...settings} className={className}>
        {
            imagenes.map((item, i) => (
                <div key={i} >
                    <img src={item} alt={item}/>
                </div>
            ))
        }
    </Slider>
  )
}

export default CardImagen
