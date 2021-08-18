import { Box, UnorderedList, ListItem, Heading } from '@chakra-ui/react'

import { LocationData } from '../../core/models/locationData'

interface Props {
  history: LocationData[]
}

const SearchHistory: React.FC<Props> = ({ history }) => {
  return (
    <Box
      borderWidth={'1px'}
      borderRadius={'lg'}
      p={'20px'}
      w={'100%'}
      h={'100%'}
      overflowY={'auto'}
    >
      <Heading size={'md'} mb={'15px'}>
        Search History
      </Heading>
      <UnorderedList spacing={3}>
        {history.map((historyLocation, index) => (
          <ListItem key={index}>
            {historyLocation.ip} - {historyLocation.location.country_flag_emoji}{' '}
            {historyLocation.city}
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  )
}

export default SearchHistory
