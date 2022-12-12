import styled from "styled-components";
import React, { useRef, useState } from "react";
import {
  Col,
  Row,
  Form,
  Button,
  Card,
  Alert,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useApp } from "../../context/context";

const Signup = () => {
  const {userSignup} = useApp()
  const nameRef = useRef();
  const signPasswordRef = useRef();
  const signEmailRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useNavigate();
  const [sques, setSques] = useState("");
  const [sanswer, setAnswer] = useState("");
  const onSignIn = async (e) => {
    e.preventDefault();
    const SigninDetails = {
      username: `${nameRef.current.value}`,
      password: `${signPasswordRef.current.value}`,
      email: `${signEmailRef.current.value}`,
      securityQ: `${sques}`,
      securityA: `${sanswer}`,
    };
    console.log(SigninDetails);
    try {
      setError("");
      setLoading(true);
      await userSignup(SigninDetails)
      // history("/welcome", { replace: true });
    } catch (err) {
      // setError("Failed to create an account")
      setError(err.message);
    }

    setLoading(false);
  };
  return (
    <Log>
      <Card style={{width:'18.5rem'}} >
        <Card.Body>
          <h2 className="text-center mb-4" style={{color:'#e95c4e',fontSize:'larger'}}>Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={onSignIn}>
            <Form.Group style={{ textAlign: "left" }} id="email">
              <Row>
                <Col>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="Text"
                    data-testid="Reg_first_name"
                    ref={nameRef}
                    required
                  />
                </Col>
                
              </Row>
              {/* <Form.Label>First Name</Form.Label>
                                    <Form.Control type="Text" data-testid="Reg_name"  required /> */}
            </Form.Group>
            <Form.Group style={{ textAlign: "left" }} id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                data-testid="Reg_email"
                ref={signEmailRef}
                required
              />
            </Form.Group>
            <Form.Group style={{ textAlign: "left" }} id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                data-testid="Reg_password"
                ref={signPasswordRef}
                required
              />
              {/* <div id="passwordHelpBlock" className="form-text fs-10">
                                        Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                                        </div> */}
              <Form.Label>Enter a security </Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setSques(e.target.value)}
              >
                <option value="">Open this select menu</option>
                <option value="What is your favourite color?">
                  What is your favourite color?
                </option>
                <option value="What is your favourite food?">
                  What is your favourite food?
                </option>
                <option value="What was your school name?">
                  What was your school name?
                </option>
                <option value="Where was your mother born?">
                  Where was your mother born?
                </option>
              </Form.Select>
              <Form.Control
                type="Text"
                data-testid="answer"
                className={sques ? "d-block mt-3" : "d-none"}
                placeholder="answer"
                required
                onChange={(e) => setAnswer(e.target.value)}
              />
            </Form.Group>
            <Button style={{background:'#e95c4e',border:'none'}} disabled={loading} className="w-100 mt-3" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
      <div id="passwordHelpBlock" className="form-text">
        Your password must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.
      </div>
    </Log>
  );
};

export default Signup;

const Log = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 90vh;
  .form-text {
    margin-top: 0.25rem;
    font-size: .875em;
    color: #6c757d;
    padding: 1em;
    text-align: justify;
    line-height: 1;}
    @media (max-width: 940px) {
  margin-top: 1em;}
  a{
      text-decoration: none;
      color: #e95c4e;
    }
`;
