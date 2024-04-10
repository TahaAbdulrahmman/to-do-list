import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Datestitle = ({data}) => {
  return (
    <Row  className="justify-content-start">
      <Col sm="8">
        <h3 className="title">لديك {data.length} مهمات اليوم</h3>
      </Col>
  </Row>
  )
}

export default Datestitle