import { Flex, Center, Box } from '@chakra-ui/react'
import useSWR from 'swr'
import { AxiosError } from 'axios'
import { useSelector } from 'react-redux'

import fetcher from '../../core/axios/fetcher'
import { RootState } from '../../store'
import { LocationData } from '../../core/models/locationData'
import SearchHistory from '../../components/SearchHistory'
import SearchBox from '../../components/SearchBox'
import LocationDetails from '../../components/LocationDetails'

const Home = () => {
  const { locationHistory } = useSelector((state: RootState) => ({
    locationHistory: state.locationHistory,
  }))
  const { data, isValidating, error } = useSWR<LocationData, AxiosError>(
    `/check`,
    fetcher,
    {
      shouldRetryOnError: false,
      revalidateOnFocus: false,
    }
  )

  return (
    <Flex h={'100vh'}>
      <Center flex={'1'} p={'20px'}>
        <SearchHistory history={locationHistory.history} />
      </Center>
      <Flex flex={'5'} direction={'column'}>
        <Box flex={'1'} p={'20px'}>
          <LocationDetails
            title={'My Location'}
            location={data}
            loading={isValidating}
            error={error?.message}
          />
        </Box>
        <Box flex={'none'} w={'100%'} p={'20px'}>
          <SearchBox />
        </Box>
        <Box flex={'1'} p={'20px'}>
          <LocationDetails
            title={'Searched Location'}
            location={locationHistory.current}
            loading={locationHistory.loading}
            error={locationHistory.error}
          />
        </Box>
      </Flex>
    </Flex>
  )
}

export default Home
