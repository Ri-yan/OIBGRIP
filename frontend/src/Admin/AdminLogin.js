import styled from "styled-components";
import  { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { useApp } from "../context/context";

export default function AdminLogin() {
  const {adminLogin,adminAuth}= useApp()
  const emailRef = useRef()
  const passwordRef = useRef()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useNavigate()

  async function handleSubmit(e) {
    
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      console.log(emailRef.current.value, passwordRef.current.value)
      await adminLogin(emailRef.current.value, passwordRef.current.value)
      if(adminAuth)
      history("/admin/home", { replace: true });
      // history("/")

    } catch(err) {
      // setError("Failed to log in")
      setError(err.message)

    }

    setLoading(false)
  }
  return (
    <Log>
      <Card style={{width:'18rem'}}>
        <Card.Body>
          <h2 className="text-center mb-4"  style={{color:'#e95c4e',fontSize:'larger'}}>Admin Login</h2>
          {error && <Alert data-testid='error' variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" data-testid="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control data-testid="password" type="password" ref={passwordRef} required />
            </Form.Group>
            <Button  style={{background:'#e95c4e',border:'none'}} disabled={loading} data-testid='submit' id='btnLogin' className="w-100 mt-3" type="submit">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/admin/forgot_password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
    </Log>
  )
}
const Log = styled.div`

display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 90vh;
    a{
      text-decoration: none;
      color: #e95c4e;
    }
    `
