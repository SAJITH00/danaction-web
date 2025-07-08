import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Tables from './Tables';
import { addDataAPI} from '../services/allAPIS';

function Base() {
  // modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
// data store
  const [data,setData]=useState({
    dataDetails:{
        name:'',
        datedd:'',
         datemm:'',
          dateyy:'',
        cash:''
    }
  })
  console.log(data);
  
const handleAdddata= async()=>{
    if (
      !data.dataDetails.name ||
      !data.dataDetails.datedd ||
      !data.dataDetails.datemm ||
      !data.dataDetails.dateyy ||
      !data.dataDetails.cash
    ) {
      alert("😒 Please fill in all fields before submitting!");
      return;
    }

try{
const result = await  addDataAPI(data)
alert("👍 Data Added 🤝")
setShow(false);
}catch(err){
  console.log(err);
  
}
}

  return (
    <div>
            <div className='m-2 d-flex justify-content-end px-5 '>
              <Button variant="primary" onClick={handleShow}>
              Add donaction
              </Button>       
             </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
{/* name */}
 <InputGroup className="mb-3" onChange={e=>setData({...data,dataDetails:{...data.dataDetails,name:e.target.value}})} value={data.dataDetails.name}  > 
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <div className='d-flex'>
 {/* date */}
      <InputGroup className="mb-3" onChange={e=>setData({...data,dataDetails:{...data.dataDetails,datedd:e.target.value}})} value={data.dataDetails.datedd} >
        <Form.Control
          placeholder="date"
          aria-label="Username"
          aria-describedby="basic-addon1"
          type='year'
        />
      </InputGroup>-
      <InputGroup className="mb-3" onChange={e=>setData({...data,dataDetails:{...data.dataDetails,datemm:e.target.value}})} value={data.dataDetails.datemm} >
        <Form.Control
         type="number"
          min="1"
         max="12"
          placeholder="month"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>   -
         <InputGroup className="mb-3" onChange={e=>setData({...data,dataDetails:{...data.dataDetails,dateyy:e.target.value}})} value={data.dataDetails.dateyy} >
        <Form.Control
          placeholder="year"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      </div>
           {/* amount */}
       <InputGroup className="mb-3" onChange={e=>setData({...data,dataDetails:{...data.dataDetails,cash:e.target.value}})} value={data.dataDetails.cash} >
        <InputGroup.Text>$</InputGroup.Text>
        <Form.Control aria-label="Amount (to the nearest dollar)" />
        <InputGroup.Text>.00</InputGroup.Text>
      </InputGroup>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdddata}>submit </Button>
        </Modal.Footer>
      </Modal>
    <Tables data={data} setData={setData}/>
    </div>
  )
}

export default Base