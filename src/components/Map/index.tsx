import { LatLngExpression } from 'leaflet'
import { MapContainer, Marker, MarkerProps } from 'react-leaflet'

interface Props {
  center: LatLngExpression
  zoom?: number
  marker?: MarkerProps
}

const Map: React.FC<Props> = ({ center, marker, zoom = 13 }) => {
  return (
    <MapContainer center={center} zoom={zoom}>
      {marker && <Marker {...marker} />}
    </MapContainer>
  )
}

export default Map
