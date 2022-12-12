import styled from "styled-components";
import  { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"


export default function AdminForgotPassword() {
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
    //   await login(emailRef.current.value, passwordRef.current.value)
      // history.push("/")
      history("/")

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
          <h2 className="text-center mb-4" style={{color:'#e95c4e',fontSize:'larger'}}>Admin Forgot Password</h2>
          {error && <Alert data-testid='error' variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Enter Email</Form.Label>
              <Form.Control type="email" data-testid="email" ref={emailRef} required />
            </Form.Group>
            <Button  style={{background:'#e95c4e',border:'none'}} disabled={loading} data-testid='submit' id='btnLogin' className="w-100 mt-3" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/admin">Log In</Link>
      </div>
    </Log>
  )
}
const Log = styled.div`

display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 90vh;
    `
