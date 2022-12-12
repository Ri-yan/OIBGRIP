import { useEffect, useState } from 'react'
import { Button, Container, Row, Table,Form } from 'react-bootstrap'
import styled from 'styled-components'
import axios from '../api/api'
const STATUS_UPDATE='/materials/status/';
const ALL='/materials/get/'
const Materials = () => {
  const [loading, setloading] = useState(false)

  const [materials, setmaterials] = useState([])
  useEffect(() => {
    setloading(true)
    axios.get(ALL).then(res=>{
      setmaterials(res.data)
    }).catch(err=>console.log(err.message))
    setloading(false)
  }, [materials])
  const updateSubmit=async(id,avail,name)=>{
    console.log(STATUS_UPDATE+id)
    console.log("sadas",avail)
    let temp = [...materials];
    try {
      await axios.put(STATUS_UPDATE+id,{avail:avail})
      .then(res=>console.log(res.data))
        const index=temp.findIndex(item=>item._id===id)
        if(index<0) return;
        temp.splice(index,1);
        setmaterials([...temp,{_id:id,name:name,avail:avail}]);
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Mat>
      <Container>
        <h2 className='text-center mb-4' style={{color:'red'}}>Materials Availability</h2>
        <Row>
          <h5 className='mb-3'>Base Availability</h5>
          <Table striped bordered hover responsive size="sm">
            <tbody>
            <tr>
              <th>Item</th>
              <th style={{textAlign: '-webkit-center'}}>Availability</th>
              {/* <th>Action</th> */}
            </tr>
            {
              !loading? 
              materials.filter((m) => {return m.type === 'base';}).map((i)=>{
                return <tr key={i._id}>
                        <td>{i.name}</td>
                        <td style={{textAlign: '-webkit-center'}}>
                          <Form.Select value={i.avail} onChange={(e)=>{updateSubmit(i._id,e.target.value,i.name)}} className='w-10' aria-label="Default select example">
                            <option value="A">Available</option>
                            <option value="NA">Not Available</option>
                          </Form.Select></td>
                        {/* <td><Button className='ubtn' varient='primary'>Update</Button></td> */}
                      </tr>
              })
              :<div>loading</div>

            }
            </tbody>
          </Table>
        </Row>
        <Row>
          <h5 className='mb-3'>Sause Availability</h5>
          <Table striped bordered hover responsive size="sm">
            <tbody>
            <tr>
              <th>Item</th>
              <th style={{textAlign: '-webkit-center'}}>Availability</th>
              {/* <th>Action</th> */}
            </tr>
            {
              !loading?               
              materials.filter((m) => {return m.type === 'sause';}).map((i)=>{
                return <tr key={i._id}>
                        <td>{i.name}</td>
                        <td style={{textAlign: '-webkit-center'}}>
                          <Form.Select value={i.avail} className='w-10' onChange={(e)=>{updateSubmit(i._id,e.target.value,i.name)}} aria-label="Default select example">
                            <option value="A">Available</option>
                            <option value="NA">Not Available</option>
                          </Form.Select></td>
                        {/* <td><Button className='ubtn' varient='primary'>Update</Button></td> */}
                      </tr>
              })
              :<div>loading</div>
            }
            </tbody>
          </Table>
        </Row>
        <Row>
          <h5 className='mb-3'>Cheese Availability</h5>
          <Table striped bordered hover responsive size="sm">
            <tbody>
            <tr>
              <th>Item</th>
              <th style={{textAlign: '-webkit-center'}}>Availability</th>
              {/* <th>Action</th> */}
            </tr>
            {
              !loading?               
              materials.filter((m) => {return m.type === 'cheese';}).map((i)=>{
                return <tr key={i._id}>
                        <td>{i.name}</td>
                        <td style={{textAlign: '-webkit-center'}}>
                          <Form.Select value={i.avail} className='w-10' onChange={(e)=>{updateSubmit(i._id,e.target.value,i.name)}} aria-label="Default select example">
                            <option value="A">Available</option>
                            <option value="NA">Not Available</option>
                          </Form.Select></td>
                        {/* <td><Button className='ubtn' varient='primary'>Update</Button></td> */}
                      </tr>
              })
              :<div>loading</div>
            }
            </tbody>
          </Table>
        </Row>
        <Row>
          <h5 className='mb-3'>Vegitables Availability</h5>
          <Table striped bordered hover responsive size="sm">
            <tbody>
            <tr>
              <th>Item</th>
              <th style={{textAlign: '-webkit-center'}}>Availability</th>
              {/* <th>Action</th> */}
            </tr>
            {
              !loading?               
              materials.filter((m) => {return m.type === 'veggis';}).map((i)=>{
                return <tr key={i._id}>
                        <td>{i.name}</td>
                        <td style={{textAlign: '-webkit-center'}}>
                          <Form.Select value={i.avail} className='w-10' onChange={(e)=>{updateSubmit(i._id,e.target.value,i.name)}} aria-label="Default select example">
                            <option value="A">Available</option>
                            <option value="NA">Not Available</option>
                          </Form.Select></td>
                        {/* <td><Button className='ubtn' varient='primary'>Update</Button></td> */}
                      </tr>
              })
              :<div>loading</div>
            }
            </tbody>
          </Table>
        </Row>
      </Container>
      
    </Mat>
  )
}

export default Materials

const Mat = styled.div`
height: 100vh;
overflow: hidden;
overflow-y: scroll;
margin: 2em auto;
padding: 1em;
::-webkit-scrollbar {display:none}
.w-10{
    width: 22vw;
}
.ubtn{
  background: red;
  border: none;
}
`