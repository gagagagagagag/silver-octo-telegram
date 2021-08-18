import { Flex, Center } from '@chakra-ui/react'

import { LocationData } from '../../core/models/locationData'
import ShowError from '../UI/ShowError'
import LocationInfo from './LocationInfo'
import Map from './Map'

interface Props {
  title: string
  loading: boolean
  error?: string | null
  location?: LocationData | null
}

const LocationDetails: React.FC<Props> = ({
  title,
  loading,
  error,
  location,
}) => {
  if (error) return <ShowError message={error} />
  if (!location) return <Center h={'100%'}>No Data</Center>

  return (
    <Flex h={'100%'} justify={'space-evenly'}>
      <Center>
        <Map location={location} loading={loading} />
      </Center>
      <LocationInfo title={title} loading={loading} location={location} />
    </Flex>
  )
}

export default LocationDetails
