import { Row, Col } from 'antd'
import { RouteComponentProps } from 'react-router-dom'

import classes from './Home.module.css'
import SearchBox from '../../components/SearchBox'

const Home: React.FC<RouteComponentProps> = () => {
  return (
    <Row gutter={30} className={classes.Container}>
      <Col span={8}></Col>
      <Col span={16} className={classes.ContentContainer}>
        <Row className={classes.MapContainer}></Row>
        <Row className={classes.SearchBarContainer}>
          <SearchBox />
        </Row>
        <Row className={classes.MapContainer}></Row>
      </Col>
    </Row>
  )
}

export default Home
