import { ipStackInstance } from '.'

const fetcher = (url: string) =>
  ipStackInstance.get(url).then((response) => response.data)

export default fetcher
