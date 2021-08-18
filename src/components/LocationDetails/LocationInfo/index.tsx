import { Center, Text, Heading, Skeleton } from '@chakra-ui/react'

import { LocationData } from '../../../core/models/locationData'

interface Props {
  title: string
  loading: boolean
  location?: LocationData
}

const LocationInfo: React.FC<Props> = ({ title, loading, location }) => {
  return (
    <Center
      p={'20px'}
      borderWidth={'1px'}
      borderRadius={'lg'}
      alignSelf={'center'}
    >
      <Skeleton isLoaded={!loading}>
        <Heading size={'md'} mb={'10px'}>
          {title}
        </Heading>
        <Text>IP: {location?.ip}</Text>
        <Text>
          Country: {location?.country_name}{' '}
          {location?.location.country_flag_emoji}
        </Text>
        <Text>Region: {location?.region_name}</Text>
        <Text>City: {location?.city}</Text>
        <Text>ZIP: {location?.zip}</Text>
      </Skeleton>
    </Center>
  )
}

export default LocationInfo
