import React from 'react'
import Navbar from './Navbar'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

export default function Viewpage() {
    const history=useHistory();
 
  return (
    <div>
      <Navbar/>
      
      <button onClick={()=>{history.push("/")}} style={{backgroundColor:"rgb(132, 191, 240)",color:"black",marginTop:"20px"}}>Goback</button>
      
    </div>
  )
}
