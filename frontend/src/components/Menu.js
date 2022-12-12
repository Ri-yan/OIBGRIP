import styled from "styled-components";
// import { pizzas } from "../data/pizzas";
import { Container, Row, Button, Card,Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import {GrFormPreviousLink,GrFormNextLink} from 'react-icons/gr'
import axios from 'axios'
const Menu = () => {
  const [prev, setPrev] = useState('')
  const [next, setNext] = useState('')

  const [currentPage, setCurrentPage] = useState(1);
  function decrement() {
    setCurrentPage(currentPage - 1);
  }
  function increment() {
    setCurrentPage(currentPage + 1);
  }

  const [pizzas, setPizzas] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3000/menu").then(res=>{
      // console.log("DATA",res.data)
      setPizzas(res.data)
    }).catch(err=>console.log(err.message))
  }, [])
  
  const [filter, setFilter] = useState("all");
  return (
    <Popular>
      <Container>
        <h2 className="pb-3" style={{ color: "red" }}>
          Our Menu
        </h2>
        <Row className="my-3 ms-0">
          <Container>
            <Button
              disabled={filter === "all" ? true : false}
              onClick={() => {
                setFilter("all");
              }}
              className="me-2 filter"
              style={{ borderRadius: "3em" }}
            >
              All
            </Button>
            <Button
              disabled={filter === "veg" ? true : false}
              onClick={() => {
                setFilter("veg");
              }}
              className="me-2 filter"
              style={{ borderRadius: "3em" }}
            >
              Veg
            </Button>
            <Button
              disabled={filter === "non-veg" ? true : false}
              onClick={() => {
                setFilter("non-veg");
              }}
              className="me-2 filter"
              style={{ borderRadius: "3em" }}
            >
              Non Veg
            </Button>
          </Container>
        </Row>
        <div className="box">
          {filter === "all"
            ? pizzas.map((i) => {
                return (
                  <Link key={i.id} to={`/product/${i._id}`} state={{ data: i }}>
                    <Card style={{ width: "16rem", cursor: "pointer" }} className='scard'>
                      <Card.Img
                        className="cover"
                        variant="top"
                        src={i.preview}
                      />
                      <Card.Body>
                        <Card.Title className="m-0 ts" style={{ color: "red" }}>
                          {i.name}
                        </Card.Title>
                        <span className="type">{i.type}</span>
                        <Card.Text
                          className="text-muted des"
                          style={{ fontSize: "small" }}
                        >
                          {i.description}
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>₹ {i.price}/-</Card.Footer>
                    </Card>
                  </Link>
                );
              })
            : pizzas
                .filter((pizzas) => {
                  return pizzas.type === filter;
                })
                .map((i) => {
                  return (
                    <Link key={i.id} to={`/product/${i.id}`} state={{ data: i }}>
                    <Card style={{ width: "16rem", cursor: "pointer" }} className='scard'>
                      <Card.Img
                        className="cover"
                        variant="top"
                        src={i.preview}
                      />
                      <Card.Body>
                        <Card.Title className="m-0 ts" style={{ color: "red" }}>
                          {i.name}
                        </Card.Title>
                        <span className="type">{i.type}</span>
                        <Card.Text
                          className="text-muted des"
                          style={{ fontSize: "small" }}
                        >
                          {i.description}
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>₹ {i.price}/-</Card.Footer>
                    </Card>
                  </Link>

                  );
                })}
        </div>
        <Row>
          <Container>
            <Col>
              <Button disabled={currentPage === 1 ? true : false} onClick={decrement} className="m-2 mt-3 page"><GrFormPreviousLink/></Button>
              <Button disabled={currentPage === 10 ? true : false} onClick={increment} className="m-2 mt-3 page"><GrFormNextLink/></Button>
            </Col>
          </Container>
        </Row>
      </Container>
    </Popular>
  );
};

export default Menu;

const Popular = styled.div`
  padding: 4em 1em;
  padding-top: 2em;
  text-align: center;
  a {
    text-decoration: none;
    color: black;
  }
  .box {
    display: flex;
    gap: 0.5em;
    justify-content: center;
    flex-wrap: wrap;
    height: 100vh;
    overflow-y: scroll;
  }

  .cover {
    height: 15em !important;
    width: -webkit-fill-available !important;
    padding: 1em;
    cursor: pointer;
  }
  .cover:hover {
    transition: 0.5s;
    transform: scale(1.05);
  }
  .type {
    font-size: small;
    font-weight: 300;
  }
  .box::-webkit-scrollbar {
    width: 5px;
    scroll-behavior: smooth; /* width of the entire scrollbar */
  }

  .box::-webkit-scrollbar-track {
    background: rgba(106, 116, 110, 0.186); /* color of the tracking area */
  }

  .box::-webkit-scrollbar-thumb {
    background-color: rgb(148, 232, 198); /* color of the scroll thumb */
    border-radius: 20px;
  }
  .filter {
    background: #e95c4e;
    border: none;
    font-size: small;
  }
  .card-footer{
    background-color: white !important;
    font-weight: 600;
    background: white !important;

  }
  .page{
    background: #fdfdfd00 !important;
    color: white !important; 
    border: none !important;
   font-size: larger !important;
  }
  @media (max-width: 840px) {
    .scard{
      width: 9em !important;
    }
    .cover{
      height: 9em !important;

    }
    .ts{
      font-size: medium;
    }
    .card-body{
      padding: 0.8em !important;
    }
    .des{
      font-size: small;

    }
  }

`;
