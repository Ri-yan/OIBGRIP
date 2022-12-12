import { useEffect, useState } from "react";
import { Container, Table,Form,Button} from "react-bootstrap";
import styled from "styled-components";
import axios from '../api/api'

const ALL='/allorders'
const STATUS_UPDATE='/admin/status/';

const OrdersInventory = () => {
  const [loading, setloading] = useState(false)
  const [orders, setorders] = useState([])
  useEffect(() => {
    setloading(true)
    axios.get(ALL).then(res=>{
      setorders(res.data)
      console.log(res.data)
    }).catch(err=>console.log(err.message))
    setloading(false)
  }, [orders])
  
  const updateSubmit=async(id,status)=>{
    console.log(STATUS_UPDATE+id)
    try {
      await axios.put(STATUS_UPDATE+id,{status:status})
      .then(res=>console.log(res.data))
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <OrIn>
        <Container>
        <h3 style={{color:'red'}} className="text-center">Orders Inventory</h3>
        <Table striped bordered hover responsive size="sm">
            <tbody>
            <tr>
                <th>Orders</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Status</th>
                <th>Placed at</th>
            </tr>{
                orders.map((i)=>{
                    return<tr className={i.status==='delivered'?"text-decoration-line-through":""}>
                            <td  className="w-10">
                                {i.ordername}<br/>
                                size : {i.size}<br/>
                                quantity : {i.quantity}<br/>
                                base : {i.base}<br/>
                                cheese : {i.cheese}<br/>
                                sause : {i.sause}<br/>
                                veggies : {i.veggis}<br/>
                                </td>
                            <td>{i.reciever_name}</td>
                            <td>{i.address}</td>
                            <td className="m-auto">
                                <Form.Select disabled={i.status==='delivered'?true:false} defaultValue={i.status} className='text-decoration-none' onChange={(e)=>updateSubmit(i._id,e.target.value)} aria-label="Default select example">
                                    <option value="ordered">Ordered</option>
                                    <option value="placed">Placed</option>
                                    <option value="ontheway">On the way</option>
                                    <option value="delivered">delivered</option>
                                </Form.Select>
                            </td>
                            <td>{i.createdAt.slice(11, 16)}</td>
                        </tr>
                })
            }
            </tbody>
        </Table>
        </Container>
        
    </OrIn>
  )
}

export default OrdersInventory

const OrIn = styled.div`
height: 100vh;
margin: 2em auto;
padding: 1em;
overflow: hidden;
overflow-y: scroll;
.w-10{
    width: 22vw;
}
.ubtn{
  background: red;
  border: none;
}
`