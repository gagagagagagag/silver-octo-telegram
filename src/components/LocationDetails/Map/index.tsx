import { Box, Skeleton } from '@chakra-ui/react'
import GoogleMapReact from 'google-map-react'

import { LocationData } from '../../../core/models/locationData'
import Marker from '../../UI/Marker'

interface Props {
  location: LocationData
  loading: boolean
  zoom?: number
}

const Map: React.FC<Props> = ({ location, loading, zoom = 15 }) => {
  if (loading) return <Skeleton w={'700px'} h={'300px'} />

  return (
    <Box w={'700px'} h={'300px'}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY! }}
        center={{
          lat: location.latitude,
          lng: location.longitude,
        }}
        zoom={zoom}
        options={{
          zoomControl: false,
          fullscreenControl: false,
        }}
      >
        <Marker lat={location.latitude} lng={location.longitude} />
      </GoogleMapReact>
    </Box>
  )
}

export default Map
