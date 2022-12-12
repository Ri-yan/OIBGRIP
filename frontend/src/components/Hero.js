import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { CiPizza} from "react-icons/ci";
import heropizza from "../assets/heropizza.png";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <Welcome id="Home">
      <Container>
        <Row>
          <Col
            sm={7}
            className="text-start d-flex flex-column justify-content-center align-items-start up"
          >
            <h1 className="" style={{ color: "#e95c4e" }}>
              Hungry ?, <br /> Order your favorite pizza.{" "}
            </h1>
            <h3 className="mt-3 up text-muted">fastest delivery in town.</h3>
            <Link to='/menu'>
              <button
                style={{ background: "#e95c4e", border: "none" }}
                type="button"
                className="btn btn-primary btn-md-md btn-lg-lg mt-4 up"
              >
                Order Now
                <CiPizza className="ms-1 my-auto fs-4" />
              </button>
            </Link>
          </Col>

          <Col className="px-2 cover-container d-flex flex-column justify-content-center align-items-center">
            <img src={heropizza} alt="hey" className="cover up sh" />
          </Col>
        </Row>
      </Container>
    </Welcome>
  );
};

export default HeroSection;

const Welcome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: -webkit-fill-available;
  height: 100vh;
  background: transparent;

  /* height: -webkit-fill-available; */
  padding: 20px;
  background-size: cover;
  background-position: top;
  padding-top: 0px;

  .sp {
    width: fit-content;
    position: absolute;
    -webkit-animation: spin 20s linear infinite;
    -moz-animation: spin 20s linear infinite;
    animation: spin 20s linear infinite;
    z-index: 0;
    transition: 1s;
    transition-duration: 0.8s;
  }
  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  .icon {
    font-weight: 400;
    background: white;
    padding: 10px 10px;
    border-radius: 44px;
    line-height: 0;
    font-size: 21px;
    margin-left: 15px;
    margin-top: 1em;
    border-style: ridge;
    cursor: pointer;
  }
  .sh:hover {
    transition: 0.8s;
    transform: scale(1.05);
  }
  .up {
    z-index: 1;
    animation-name: up;
    animation-duration: 2s;
    opacity: 1;
    animation-iteration-count:1;

  }
  @keyframes up {
    from {
      opacity: 0;
      transition: 1.8s;
      transform: translateY(148px);
    }
    to {
      transition: 1.8s;
      transform: translateY(0px);
      opacity: 1;
    }
  }
  h1 {
    font-size: 54px;
    font-weight: 700;
    color: #012970;
    margin: 0px;
    font-family: "PT Sans Narrow", sans-serif;
    line-height: 1.2;
  }
  h2 {
    color: #444444;
    margin: 15px 0 0 0;
    font-size: 26px;
    line-height: 1.2;
    font-weight: 300;
    font-family: "Nunito Sans", sans-serif;
  }
  h3 {
    font-weight: 400;
  }
  .cover {
    height: -webkit-fill-available;
    width: 100%;
  }
  @media (max-width: 940px) {
    margin-top: 4em;
    padding-top: 20px;
    height: -webkit-fill-available;

    h1 {
      font-size: 32px;
    }
    h2 {
      font-size: 24px;
    }
  }
  @media (max-width: 780px) {
    align-items: flex-start;
    height: 100vh;
    .cover-container {
      margin-top: 2rem;
    }
    .cover {
      height: auto;
      width: -webkit-fill-available;
    }
  }
`;
