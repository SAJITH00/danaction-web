import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { deletDataAPI, editDataAPI, getDataAPI, updateDataAPI } from '../services/allAPIS'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Tables() {
  // modal state
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  
  // editing data state
  const [editdata, setEditdata] = useState({
    id: '',
    dataDetails: {
      name: '',
      datedd: '',
      datemm: '',
      dateyy: '',
      cash: ''
    }
  });

  // table data state
  const [info, setInfo] = useState([]);

  // fetch data function
  const getinformations = async () => {
    try {
      const result = await getDataAPI();
      if (result.data) {
        setInfo(result.data);
      }
    } catch(err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    getinformations();
  }, [getinformations()]);

  // delete data function
  const deleteit = async (id) => {
    try {
      await deletDataAPI(id);
      getinformations();
    } catch(err) {
      console.error("Error deleting data:", err);
    }
  };

  // edit data function
  const editit = async (id) => {
    try {
      const result = await editDataAPI(id);
        setEditdata(result.data);
        setShow(true);
      
    } catch(err) {
      console.error("Error editing data:", err);
    }
  };

  // update data 
  const updateitems = async () => {
    try {
      const result = await updateDataAPI(editdata.id, editdata);
        getinformations();
        handleClose();
      
    } catch(err) {
      console.error("Error updating data:", err);
    }
  };

  // handle input changes in modal
  const handleInputChange = (field, value) => {
    setEditdata(prev => ({
      ...prev,
      dataDetails: {
        ...prev.dataDetails,
        [field]: value
      }
    }));
  };

  return (
    <div>
      <div className="container border border-secondary border-3 rounded-3 mb-5">
        <Row className='px-1 rounded-3 text-center bg-light'>
          <Col className='border' xs={1}>#</Col>
          <Col className='border' xs={3}>Name</Col>
          <Col className='border' xs={3}>Date</Col>
          <Col className='border' xs={3}>Amount</Col>
          <Col className='border' xs={1}>Edit</Col>
          <Col className='border' xs={1}>Delete</Col>
        </Row>
        
        {info.length > 0 ? (
          info.map((item) => (
            <Row key={item.id} className='align-items-center'>
              <Col className='border' xs={1}>{info.indexOf(item) + 1}</Col>
              <Col className='border fw-medium' xs={3}>{item.dataDetails.name}</Col>
              <Col className='border text-end' xs={3}>
                {item.dataDetails.datedd}/{item.dataDetails.datemm}/{item.dataDetails.dateyy}
              </Col>
              <Col className='border text-end' xs={3}>💲 {item.dataDetails.cash}</Col>
              <Col className='border text-center' xs={1}>
                <button 
                  className='btn btn-link text-primary p-0'
                  onClick={() => editit(item.id)}
                  aria-label="Edit"
                >
                  <i className="fa-regular fa-pen-to-square"></i>
                </button>
              </Col>
              <Col className='border text-center' xs={1}>
                <button 
                  className='btn btn-link text-danger p-0'
                  onClick={() => deleteit(item.id)}
                  aria-label="Delete"
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </Col>
            </Row>
          ))
        ) : (
          <Row>
            <Col className="text-center py-3">No data available</Col>
          </Row>
        )}
      </div>

      {/* Edit Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Record</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              value={editdata.dataDetails.name || ''}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Enter name"
            />
          </Form.Group>

          <Form.Label>Date</Form.Label>
          <div className='d-flex gap-2 mb-3'>
            <Form.Control
              value={editdata.dataDetails.datedd || ''}
              onChange={(e) => handleInputChange('datedd', e.target.value)}
              placeholder="DD"
              maxLength="2"
            />
            <Form.Control
              value={editdata.dataDetails.datemm || ''}
              onChange={(e) => handleInputChange('datemm', e.target.value)}
              placeholder="MM"
              maxLength="2"
            />
            <Form.Control
              value={editdata.dataDetails.dateyy || ''}
              onChange={(e) => handleInputChange('dateyy', e.target.value)}
              placeholder="YYYY"
              maxLength="4"
            />
          </div>

          <Form.Group className="mb-3">
            <Form.Label>Amount</Form.Label>
            <InputGroup>
              <InputGroup.Text>$</InputGroup.Text>
              <Form.Control
                type="number"
                value={editdata.dataDetails.cash || ''}
                onChange={(e) => handleInputChange('cash', e.target.value)}
                placeholder="0.00"
              />
            </InputGroup>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={updateitems}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Tables;