import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { getDataAPI } from '../services/allAPIS';
// import { jsPDF } from "jspdf";
// Instead of import, use:
const { jsPDF } = window.jspdf;
import html2canvas from 'html2canvas'

function DownTable( {year,show}) {
    const [data,setData]=useState([])
    const[yeardata,setYeardata]=useState([])
    const [totals,setTotal]=useState()
    // store data get api
      const datastore = async () => {
        try {
          const result = await getDataAPI();
          if (result.data) {
            setData(result.data);
          }
        } catch(err) {
          console.error("Error fetching data:", err);
        }
      };

      const yearinfo =()=>{
       const datas = data.filter((item)=>item.dataDetails.dateyy==year)
       setYeardata(datas);
    const total = datas.reduce((sum, item) => sum + Number(item.dataDetails.cash), 0);
  setTotal(total);    
      }
    useEffect(()=>{
    datastore()
    },[])
     const downloadPDF = async()=>{
      const input = document.getElementById("result")
        const canvas = await html2canvas(input, { scale: 2 })
        const imgData = canvas.toDataURL("image/png")
        const pdf = new jsPDF("p", "mm", "a4")
        const pdfWidth = pdf.internal.pageSize.getWidth()
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight)
        pdf.save(`${year}_transactions.pdf`)
     }
   
    
  return (
    <div>
         <div className='text-center d-flex justify-content-around'>
           <h4>selected year :  {year}  </h4> 
           <div>
       <Button className='mx-4' onClick={()=>yearinfo()}>search</Button>
       <Button onClick={downloadPDF}><i class="fa-solid fa-file-arrow-down"></i></Button>
           </div>

         </div>


        <div className='contanier border border-3 rounded-top  border-dark mx-5 mt-4 mb-5' id='result'>
         <Row>
            <Col xs={1}></Col>
            <Col className='border border-start-0' xs={3}>Date</Col>
            <Col className='border border-top-0' xs={4}>Name</Col>
            <Col className='border border-end-0' xs={3}>Amount</Col>
            <Col xs={1}></Col>
         </Row>
         {yeardata.length>0 ? (
          yeardata.map((item)=>(
            
         <Row>
            <Col className='text-center' xs={1}>{yeardata.indexOf(item) + 1}</Col>
            <Col className='border border-start-0'xs={3}>{item.dataDetails.datedd}  - {item.dataDetails.datemm} - {item.dataDetails.dateyy}</Col>
            <Col className='border border-top-0 fw-medium' xs={4}>{item.dataDetails.name}</Col>
            <Col className='border border-end-0 text-end'xs={3}>{item.dataDetails.cash}</Col>
            <Col xs={1}></Col>
         </Row>  
           ))
         ):
         (
          <Row>
            <Col className="text-center py-3">No data available</Col>
          </Row>    
             )}


             <Row>
            <Col className='text-center' xs={8}> Total :</Col>
            <Col xs={3} className='text-end fw-bold'> {totals}</Col>
            <Col xs={1}></Col>
             </Row>
        </div>

    </div>
  )
}

export default DownTable