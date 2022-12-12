import Card from "react-bootstrap/Card";
import { delivery, easyorder, pay, payment } from "../assets";
import styled from "styled-components";
import { Container } from "react-bootstrap";

const Services = () => {
  return (
    <Service>
      <Container>
        <h2 className="pb-5" style={{ color: "red" }}>
          Services we offer
        </h2>
        <div className="box">
          <Card style={{ width: "16rem" }} className="box-card">
            <Card.Img className="cover" variant="top" src={delivery} />
            <Card.Body>
              <Card.Title style={{color:'red'}} >Fast Delivery</Card.Title>
              <Card.Text className="text-muted px-2">
                Quick order place and fast delivery.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "16rem" }} className="box-card">
            <Card.Img className="cover" variant="top" src={easyorder} />
            <Card.Body>
              <Card.Title style={{color:'red'}} >Easy Order</Card.Title>
              <Card.Text className="text-muted px-2">
                Easy and simplified user-friendly interface.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "16rem" }} className="box-card">
            <Card.Img className="cover" variant="top" src={payment} />
            <Card.Body>
              <Card.Title style={{color:'red'}} >Pay online or COD</Card.Title>
              <Card.Text className="text-muted px-2">
                Make quick payment online or choose COD
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </Service>
  );
};

export default Services;

const Service = styled.div`
  padding: 4em 1em;
  padding-top: 1em;
  text-align: center;
  .box {
    display: flex;
    gap: 1em;
    justify-content: center;
    flex-wrap: wrap;
  }
  .box-card {
    box-shadow: #e95c4e 0 0 8px 0px;
  }
  .cover {
    background: #e95c4e;
    height: 13em !important;
  }
`;
