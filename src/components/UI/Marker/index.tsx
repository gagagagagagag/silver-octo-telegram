import { ChildComponentProps } from 'google-map-react'

import markerIcon from '../../../assets/icons/marker.svg'

const Marker: React.FC<ChildComponentProps> = () => {
  return <img src={markerIcon} width={45} height={45} alt={'Marker'} />
}

export default Marker
