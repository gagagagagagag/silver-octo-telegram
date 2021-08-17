import { useCallback } from 'react'
import { Row, Col } from 'antd'
import useSWR from 'swr'
import { useDispatch, useSelector } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'

import fetcher from '../../core/axios/fetcher'
import classes from './Home.module.css'
import { AppDispatch, RootState } from '../../store'
import { addLocation } from '../../store/actions/locationHistory.actions'
import { LocationData } from '../../core/models/locationData'
import SearchBox from '../../components/SearchBox'

const Home: React.FC<RouteComponentProps> = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { locationHistory } = useSelector((state: RootState) => ({
    locationHistory: state.locationHistory,
  }))
  const { data } = useSWR<LocationData>(`/check`, fetcher)

  const addLocationHandler = useCallback(
    (location: string) => {
      dispatch(addLocation(location))
    },
    [dispatch]
  )

  return (
    <Row gutter={30} className={classes.Container}>
      <Col span={8}></Col>
      <Col span={16} className={classes.ContentContainer}>
        <Row className={classes.MapContainer}></Row>
        <Row className={classes.SearchBarContainer}>
          <SearchBox
            loading={locationHistory.loading}
            onAddLocation={addLocationHandler}
          />
        </Row>
        <Row className={classes.MapContainer}></Row>
      </Col>
    </Row>
  )
}

export default Home
