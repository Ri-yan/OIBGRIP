import Card from 'react-bootstrap/Card';
import styled from 'styled-components'
import { pizzas } from '../data/pizzas';
import { Container } from 'react-bootstrap';

const ProductsEdit = () => {
  return (
    <Popular>
      <Container>
        <h2 className='pb-3' style={{color:'red'}}>Menu</h2>
        <div className="box">
          {
            pizzas.map((i)=>{
              return <Card key={i.id} style={{ width: '16rem',cursor:'pointer' }}>
                <Card.Img className='cover' variant="top" src={i.preview} />
                <Card.Body>
                    <Card.Title style={{color:'red'}}>{i.name}</Card.Title>
                    <span className='type'>{i.type}</span>
                    <Card.Text className='text-muted' style={{fontSize:'small'}}>
                    {i.description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>{i.price}/-</Card.Footer>
            </Card>
            })
          }
        </div>
        </Container>
    </Popular>
  )
}

export default ProductsEdit

const Popular = styled.div`
padding: 4em 1em;
padding-top: 2em;
text-align: center;
a{
  text-decoration: none;
  color: black;
}
.box{
    display: flex;
    gap: 0.5em;
    justify-content: center;
    flex-wrap: wrap;
    height: 100vh;
    overflow-y:scroll;
}

.cover{
  height: 15em !important;
    width: -webkit-fill-available !important;
    padding: 1em;
    cursor: pointer;
}
.cover:hover{
    transition: 0.5s;
    transform: scale(1.05);
}
.type{
  font-size: small;
    font-weight: 300;
}
.box::-webkit-scrollbar {
  width: 5px;     
  scroll-behavior: smooth;          /* width of the entire scrollbar */
}

.box::-webkit-scrollbar-track {
  background: rgba(106, 116, 110, 0.186);        /* color of the tracking area */
}

.box::-webkit-scrollbar-thumb {
  background-color: rgb(148, 232, 198);    /* color of the scroll thumb */
  border-radius: 20px;      
}
`
