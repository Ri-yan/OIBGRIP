import styled from 'styled-components'
import { Card,Container,Row,Col,Button, Accordion } from 'react-bootstrap';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import axios from '../api/api'
import { useApp } from '../context/context';
import { useEffect, useState } from 'react';
const ORDER ='/orders/'
const Orders = () => {
    const {orders,auth,setOrders} =useApp()
    useEffect(() => {
      console.log(auth.user._id)
      axios.get(ORDER+auth.user._id,{orderer_id:auth.user._id}).then(res=>{
        setOrders(res.data)
      }).catch(err=>console.log(err.message))
    }, [])
  return (
    <Order>
      <Container>
        <h2 className='pb-5' style={{color:'red'}}>My Orders</h2>
        <Container style={{height:'70vh'}}>
              <Accordion defaultActiveKey={["0"]} alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <div className="d-lfex flex-column align-items-start">
                        <p className="m-0 mb-2"><b>Recent Orders</b></p>
                        
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                    <Row >
                      <Col sm={5} className='left'>
                          {
                            orders.length>0?
                              orders.filter((i)=>{return i.status!=='delivered'}).map((i,k)=>{
                                if(i){
                                  return <Card key={k} className={i.status=='delivered'?'ordered mb-2':'m-1'} style={{ width: '100%',display:'flex',flexDirection:'row' }}>
                                          <Card.Img className='cover' variant="top" src={i.preview} />
                                          <Card.Body className="d-flex justify-content-between flex-wrap">
                                              <div className="d-flex flex-column text-start">
                                                  <Card.Title className='m-0' style={{fontSize:'medium'}}>{i.ordername}</Card.Title>
                                                  <span className='type' >{i.type}</span>
                                                  <span  style={{fontSize:'small'}}>Quantity : {i.quantity}</span>
                                              </div>
                                              <span className='text-start mx-0 mx-lg-4 ' style={{fontSize:'medium'}}><b>Total price</b><br/>₹ {i.price}/-</span>
                                              <span className='text-start mx-0 mx-lg-4 ' style={{fontSize:'medium'}}><b>Status</b><br/>{i.status}</span>
                                          </Card.Body>
                                          </Card>
                                          }
                                    else return <h6>no order found</h6>
                              }):
                              <h6>no current orders</h6>
                          }
                      </Col>
                  </Row>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <div className="d-lfex flex-column align-items-start">
                        <p className="m-0 mb-2"><b>Previous Orders</b></p>
                        
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                    <Row >
                      <Col sm={5} className='left'>
                    {
                      orders.length>0?
                       orders.filter((i)=>{return i.status==='delivered'}).map((i,k)=>{
                        if(i){
                                  return <Card key={k} className={i.status==='delivered '?'ordered mb-2':'m-1'} style={{ width: '100%',display:'flex',flexDirection:'row' }}>
                                          <Card.Img className='cover' variant="top" src={i.preview} />
                                          <Card.Body className="d-flex justify-content-between flex-wrap">
                                              <div className="d-flex flex-column text-start">
                                                  <Card.Title className='m-0' style={{fontSize:'medium'}}>{i.ordername}</Card.Title>
                                                  <span className='type' >{i.type}</span>
                                                  <span  style={{fontSize:'small'}}>Quantity : {i.quantity}</span>
                                              </div>
                                              <span className='text-start mx-0 mx-lg-4 ' style={{fontSize:'medium'}}><b>Total price</b><br/>₹ {i.price}/-</span>
                                              <span className='text-start mx-0 mx-lg-4 ' style={{fontSize:'medium'}}><b>Status</b><br/>{i.status}</span>
                                          </Card.Body>
                                          </Card>}
                                          else return <h6>no order found</h6>
                              }): <h6>no order placed yet</h6>
                          }
                          </Col>
                          </Row>
                    </Accordion.Body>
                  </Accordion.Item>
                  </Accordion>
        </Container>
        {/* {
        orders.length>0?
        <Row >
            <Col sm={5} className='left'>
                {
                    orders.map((i,k)=>{
                        return <Card key={k} className={i.status==='delivered'?'ordered':'m-1'} style={{ width: '100%',display:'flex',flexDirection:'row' }}>
                                <Card.Img className='cover' variant="top" src={i.preview} />
                                <Card.Body className="d-flex justify-content-between flex-wrap">
                                    <div className="d-flex flex-column text-start">
                                        <Card.Title className='m-0' style={{fontSize:'medium'}}>{i.ordername}</Card.Title>
                                        <span className='type' >{i.type}</span>
                                        <span  style={{fontSize:'small'}}>Quantity : {i.quantity}</span>
                                    </div>
                                    <span className='text-start mx-0 mx-lg-4 ' style={{fontSize:'medium'}}><b>Total price</b><br/>₹ {i.price}/-</span>
                                    <span className='text-start mx-0 mx-lg-4 ' style={{fontSize:'medium'}}><b>Status</b><br/>{i.status}</span>
                                </Card.Body>
                                </Card>
                    })
                }
            </Col>
        </Row>:<Row> <div className="empty"><AiOutlineShoppingCart className='me-2'/>order is empty</div></Row>
            } */}
        </Container>
    </Order>
  )
}

export default Orders

const Order = styled.div`
padding: 4em 1em;
padding-top:2em ;
text-align: center;
.box{
    display: flex;
    gap: 1em;
    justify-content: center;
    flex-wrap: wrap;
    height: 70vh;
    overflow: hidden;
}

.cover{
    height: 6em !important;
    width: 6em !important;
    padding: 1em;
    margin: auto;
}
.type{
  font-size: small;
    font-weight: 300;
}

.left{
  max-height: 40vh;
    width: 100%;
    overflow: hidden;
    overflow-y: scroll;
}
.left::-webkit-scrollbar {
  width: 5px;     
  scroll-behavior: smooth;          /* width of the entire scrollbar */
}

.left::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.186);        /* color of the tracking area */
}

.left::-webkit-scrollbar-thumb {
  background-color: rgb(148, 232, 198);    /* color of the scroll thumb */
  border-radius: 20px;      
}
.empty{
    height: 100vh;
    margin: auto;
    font-size: xx-large;
    color: red;
    font-weight: 400;
}  
.ordered{
  background: #60585833;
}
`
