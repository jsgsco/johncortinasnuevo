import { Carousel } from 'react-responsive-carousel'

const Slider = () => {

    const data = [
        {id: 1, photo: 'https://i.imgur.com/8O0HZ82.png'},
        {id: 2, photo: 'https://i.imgur.com/MM5tbOe.png'},
        {id: 3, photo: 'https://i.imgur.com/A4LGXgV.png'},
        {id: 4, photo: 'https://i.imgur.com/kJOcm7R.png'},
        {id: 5, photo: 'https://i.imgur.com/8RwCzV0.png'}
    ]

  return (
    <div className="slider">
        <Carousel showArrows={false} showThumbs={false} autoPlay={true} infiniteLoop={true} showIndicators={false}>
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
