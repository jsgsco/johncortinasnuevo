import { Carousel } from 'react-responsive-carousel'

const Slider = () => {

    const data = [
        {id: 1, photo: '/public/bg1.png'},
        {id: 2, photo: '/public/bg2.png'},
        {id: 3, photo: '/public/bg3.png'},
        {id: 4, photo: '/public/bg4.png'},
        {id: 5, photo: '/public/bg5.png'}
    ]

  return (
    <div className="slider">
        <Carousel showArrows={false} showThumbs={false} autoPlay={true} infiniteLoop={true}>
            {
                data.map(item => (
                    <div key={item.id} className="slider_item">
                        <img src={item.photo} alt={item.id} />
                    </div>
                ))
            }
        </Carousel>
    </div>
  )
}

export default Slider
