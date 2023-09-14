import { Map, Marker } from 'pigeon-maps'

export function Mapa() {
  return (
    <div className="mapa">
      <Map height={300} defaultCenter={[4.688162, -74.1047537]} defaultZoom={18} animate={true} >
        <Marker width={50} anchor={[4.688162, -74.1047537]} />
      </Map>
    </div>
  )
}