import { useState,useEffect } from "react";
import { useLocation } from 'react-router-dom'
import axios from '../api/api'

import { Col, Container, Row, Button, Accordion,Toast,ToastContainer } from "react-bootstrap";
import styled from "styled-components";
import {  nveg, veg } from "../assets";
import {
  AiFillCaretLeft,
  AiFillCaretRight,
  AiOutlineClose,AiOutlineArrowLeft
} from "react-icons/ai";
// import { material } from "../data/material";
import { useApp } from "../context/context";
import { Link } from "react-router-dom";
const ALL='/materials/get/'

const ProductPage = () => {
  const {addToCart,auth}=useApp()
  const location = useLocation()
  const { data } = location.state;
  const [quantity, setQuantity] = useState(1);
  const [base, setBase] = useState({id:'',name:'',price:0});
  const [cheese, setCheese] = useState({id:'',name:'',price:0});
  const [sause, setSause] = useState({id:'',name:'',price:0});
  const [vegis, setVegies] = useState({id:'',name:'',price:0});
  const [size, setSize] = useState("small");
  const [price, setPrice] = useState(data.price);
  const [variableprice, setVariablePrice] = useState(price);
  const [loading, setLoading] = useState(false)
  const [pdata, setPdata] = useState({})
  const [show, setShow] = useState(false);
  const [wshow, setWShow] = useState(false);
  const [loadm, setloading] = useState(false)
  const [material, setmaterials] = useState([])
  useEffect(() => {
    setloading(true)
    axios.get(ALL).then(res=>{
      
      setmaterials(res.data)
    }).catch(err=>console.log(err.message))
    setloading(false)
  }, [material])

  useEffect(() => {
    setPdata({...data})
  }, [data])
  
  const AddToCart=async()=>{
    if(!auth.token){
      setWShow(true)
      return
    }
    const pizza={
      ...pdata,quantity:quantity,variableprice:variableprice+vegis.price+base.price+sause.price+cheese.price,
      base:base,cheese:cheese,vegis:vegis,sause:sause,size:size,
      orderer_id:auth.user._id,reciever_name:auth.user.username
    }
    try {
      setLoading(true)
      await addToCart(pizza)
      setLoading(false)
      setShow(true)
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <Product>
      <ToastContainer className="p-3" position='bottom-start'>
        <Toast  onClose={() => setShow(false)} show={show}  autohide
          className="d-inline-block m-1"
          bg='success'
          key={1}
          delay={2000} 
        >
          <Toast.Header>
            <strong className="me-auto">Success</strong>
            <small></small>
          </Toast.Header>
          <Toast.Body className='text-white'>
            Cart Updated
          </Toast.Body>
        </Toast>
        </ToastContainer>

        <ToastContainer className="p-3" position='bottom-start'>
        <Toast  onClose={() => setWShow(false)} show={wshow}  autohide
          className="d-inline-block m-1"
          bg='warning'
          key={1}
          delay={2000} 
        >
          <Toast.Header>
            <strong className="me-auto">Warning</strong>
            <small></small>
          </Toast.Header>
          <Toast.Body className='text-white'>
            Login to add item in cart
          </Toast.Body>
        </Toast>
        </ToastContainer>
      <Container>
        <Row>
          <Col sm={5} md={5} lg={5}>
            <Row><Link to='/menu' className="fs-4 ms-4 mt-4" style={{color:'black'}}><AiOutlineArrowLeft/></Link></Row>
            <img
              className="preview p-2 p-sm-2 p-md-1 p-lg-5"
              src={data.preview}
              alt=""
            />
          </Col>
          <Col className="right">
            <Row className="my-2 ms-0">
              <Container>
                <div className="d-flex justify-content-between">
                  <h2 style={{ color: "#e95c4e" }}>{data.name}</h2>
                  <img
                    src={data.type==='veg'?veg:nveg}
                    alt="veg"
                    style={{ height: "25px", width: "25px" }}
                  />
                </div>
                <p className="text-muted">
                  {data.description}
                </p>
                <h2 className="mt-3 ms-0">₹ {variableprice+vegis.price+base.price+sause.price+cheese.price}/-</h2>
              </Container>
            </Row>
            <Row className="my-3 ms-0">
              <Container>
                {/* <h5>Size </h5> */}
                <Button
                  disabled={size === "small" ? true : false}
                  onClick={() => {
                    setSize("small");setVariablePrice(price);setQuantity(1)
                  }}
                  className="me-2 sbtn"
                  style={{ borderRadius: "3em" }}
                >
                  small
                </Button>
                <Button
                  disabled={size === "medium" ? true : false}
                  onClick={() => {
                    setSize("medium");setVariablePrice(price+50);setQuantity(1)
                  }}
                  className="me-2 sbtn"
                  style={{ borderRadius: "3em" }}
                >
                  medium
                </Button>
                <Button
                  disabled={size === "large" ? true : false}
                  onClick={() => {
                    setSize("large");setVariablePrice(price+100);setQuantity(1)
                  }}
                  className="me-2 sbtn"
                  style={{ borderRadius: "3em" }}
                >
                  large
                </Button>
              </Container>
            </Row>
            <Row className="my-2 ms-0">
              <Container className="d-flex align-items-center">
                {/* <div>Quantity</div> */}
                <Button
                  className="cbtn"
                  disabled={quantity > 1 ? false : true}
                  onClick={() => {setQuantity(quantity - 1);setVariablePrice(variableprice=>variableprice/2)}}
                >
                  <AiFillCaretLeft />
                </Button>
                <h6 className="mx-2 mt-3">{quantity}</h6>
                <Button
                  className="cbtn"
                  onClick={() => {setQuantity(quantity + 1);setVariablePrice(variableprice=>variableprice*2)}}
                >
                  <AiFillCaretRight />
                </Button>
              </Container>
            </Row>
            <Row className="m-2 ms-0">
              <Container>
                <Button disabled={loading} onClick={()=>AddToCart()} className="me-2 buybtn">Add to cart</Button>
                {/* <Button>Buy</Button> */}
              </Container>
            </Row>
            <Row className="mt-5">
              <h6>Customizatons</h6>
              <Container>
                <Accordion defaultActiveKey={["0"]} alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <div className="d-lfex flex-column align-items-start">
                        <p className="m-0 mb-2">Opt veggies</p>
                        <p
                          onClick={() => {setVegies({name:'',price:0})}}
                          className={vegis.name ? "d-block m-0 opbtn extra" : "d-none"}
                        >
                          {vegis.name+" "+vegis.price}/- <AiOutlineClose />
                        </p>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      {
                        !loadm?
                      material.filter((m) => {return m.type === 'veggis'}).map((i) => {
                        return (i.avail==='NA'?<Button
                        key={i.id}
                        disabled={true}
                        className="m-1 opbtn text-decoration-line-through"
                      >
                        {i.name +" "+ i.price}/-
                      </Button> :
                          <Button
                            key={i.id}
                            disabled={vegis.name?true:false}
                            className={i.avail==='A'?"m-1 opbtn":"m-1 opbtn text-decoration-line-through"}
                            onClick={() => {
                              setVegies(i);
                            }}
                          >
                            {i.name +" "+ i.price}/-
                          </Button>
                        );
                      }):
                      <div>loading...</div>
                      }
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <div className="d-lfex flex-column align-items-start">
                        <p className="m-0 mb-2">Base</p>
                        <p
                          onClick={() => setBase({name:'',price:0})}
                          className={base.name ? "d-block m-0 opbtn extra" : "d-none"}
                        >
                          {base.name+" "+base.price}/- <AiOutlineClose />
                        </p>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      {
                        !loadm?
                      material.filter((m) => {return m.type === 'base'}).map((i) => {
                        return ( i.avail==='NA'?<Button
                        key={i.id}
                        disabled={true}
                        className="m-1 opbtn text-decoration-line-through"
                      >
                        {i.name +" "+ i.price}/-
                      </Button> :
                          <Button
                            key={i.id}
                            disabled={base.name?true:false}
                            className={i.avail==='A'?"m-1 opbtn":"m-1 opbtn text-decoration-line-through"}
                            onClick={() => {
                              setBase(i);
                            }}
                          >
                            {i.name +" "+ i.price}/-
                          </Button>
                        );
                      }):
                      <div>loading...</div>
                      }
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      <div className="d-lfex flex-column align-items-start">
                        <p className="m-0 mb-2">Sause</p>
                        <p
                          onClick={() => setSause("")}
                          className={sause.name ? "d-block m-0 opbtn extra " : "d-none"}
                        >
                          {sause.name+" "+sause.price}/- <AiOutlineClose />
                        </p>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      {
                        !loadm?
                      material.filter((m) => {return m.type === 'sause'}).map((i) => {
                        return (i.avail==='NA'?<Button
                        key={i.id}
                        disabled={true}
                        className="m-1 opbtn text-decoration-line-through"
                      >
                        {i.name +" "+ i.price}/-
                      </Button> :
                          <Button
                            key={i.id}
                            disabled={sause.name?true:false}
                            className={i.avail==='A'?"m-1 opbtn":"m-1 opbtn text-decoration-line-through"}
                            onClick={() => {
                              setSause(i);
                            }}
                          >
                            {i.name +" "+ i.price}/-
                          </Button>
                        );
                      }):
                      <div>loading...</div>
                      }
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      <div className="d-lfex flex-column align-items-start">
                        <p className="m-0 mb-2">Cheese</p>
                        <p
                          onClick={() => setCheese("")}
                          className={cheese.name ? "d-block m-0 opbtn extra" : "d-none"}
                        >
                          {cheese.name+" "+cheese.price}/- <AiOutlineClose />
                        </p>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      {
                        !loadm?
                      material.filter((m) => {return m.type === 'cheese'}).map((i) => {
                        return (i.avail==='NA'?<Button
                        key={i.id}
                        disabled={true}
                        className="m-1 opbtn text-decoration-line-through"
                      >
                        {i.name +" "+ i.price}/-
                      </Button> :
                          <Button
                            key={i.id}
                            disabled={cheese.name?true:false}
                            className={i.avail==='A'?"m-1 opbtn":"m-1 opbtn text-decoration-line-through"}
                            onClick={() => {
                              setCheese(i);
                            }}
                          >
                            {i.name +" "+ i.price}/-
                          </Button>
                        );
                      }):
                      <div>loading...</div>
                    }
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Container>
            </Row>
          </Col>
        </Row>
      </Container>
    </Product>
  );
};

export default ProductPage;

const Product = styled.div`
  .preview {
    /* padding: 2em; */
    height: auto;
    width: -webkit-fill-available;
  }
  .right {
    padding: 2em;
    height: 100vh;
    overflow: hidden;
    overflow-y: scroll;
  }
  .right::-webkit-scrollbar {
    width: 5px;
    scroll-behavior: smooth; /* width of the entire scrollbar */
  }

  .right::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.186); /* color of the tracking area */
  }

  .right::-webkit-scrollbar-thumb {
    background-color: rgb(148, 232, 198); /* color of the scroll thumb */
    border-radius: 20px;
  }
  .sbtn {
    border-radius: 3em;
    background: #e95c4e;
    border: none;
    font-size: smaller;
  }
  .opbtn {
    border-radius: 3em;
    border: none;
    font-size: smaller;
  }
  .buybtn {
    border-radius: 3em;
    background: #e95c4e;
    border: none;
  }
  .cbtn {
    color: #e95c4e;
    font-size: xx-large;
    border: none;
    padding: 0px;
    background: #d2691e00;
  }
  .extra{
    background: #e95c4e;
    color: white;
    padding: 6px 9px;
  }
  @media (max-width: 940px) {
    .right {
      height: 100%;
    }
    .preview {
      /* padding: 1em; */
    }
  }
`;
