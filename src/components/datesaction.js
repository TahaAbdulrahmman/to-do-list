import React from 'react'
import { Col, Row } from 'react-bootstrap'
const Datesaction = ({deletData , showData}) => {
  return (
    <Row  className="justify-content-center">
      <Col sm="12" className="d-flex justify-content-between">
      <button onClick= {deletData} className="btn">حذف المهمات</button>
      <button onClick= {showData} className="btn">عرض المهمات</button>
      </Col>
    </Row>
  )
}
export default Datesaction