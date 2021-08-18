import { Alert } from '@chakra-ui/react'

interface Props {
  message: string
}

const ShowError: React.FC<Props> = ({ message }) => {
  return <Alert status={'error'}>{message}</Alert>
}

export default ShowError
