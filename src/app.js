import React,{useState} from "react";
import {data} from "./components/data"
import Datestitle from "./components/datestitle";
import Datescontent from "./components/datescontent";
import Datesaction from "./components/datesaction";
import { Container } from "react-bootstrap";
export default function MyApp (){
  let [datainfo,setDatainfo] = useState(data)
  let OnDelet =()=>{
    setDatainfo([])
  }
  let OnShow =()=>{
    setDatainfo(data)
  }
  return(
    <div>
    <div className="py-3">
      <Container className=" py-3">
        <Datestitle data={datainfo}/>
        <Datescontent  data={datainfo}/>
        <Datesaction deletData = {OnDelet}  showData = {OnShow}/>
        </Container>
      </div>
    </div>
  )
}












