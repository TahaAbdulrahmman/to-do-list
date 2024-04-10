import React from 'react'
import { Col, Row } from 'react-bootstrap'
const Datescontent = ({data}) => {
  return (
    <Row  className="content justify-content-start my-2">
      <Col sm="8">
        <div>
          {data.length? ( data.map((item,index)=>{
            return (
              <div key={index} className="d-flex ">
                <div className="image  py-2">
                  <img className="img" src={item.img}/>
                </div>
                <div className="py-2 pe-3">
                  <h4 className="m-0 p-0">{index + 1 }- {item.name} </h4>
                  <p>{item.date}</p>
                </div>
              </div>
            )
            })
            ):<h1 className="nodates">لا توجد مواعيد اليوم</h1>    
          }
        </div>
      </Col>
    </Row>
  )
}

export default Datescontent