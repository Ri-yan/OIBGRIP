import Card from 'react-bootstrap/Card';
import styled from 'styled-components'
import { pizzas } from '../data/pizzas';
import { Container } from 'react-bootstrap';

const Populars = () => {
  return (
    <Popular>
      <Container>
        <h2 className='pb-5' style={{color:'red'}}>Our Top Sellers</h2>
        <div className="box">
          {
            pizzas.map((i)=>{
              return <Card key={i.id} style={{ width: '16rem' }}>
              <Card.Img className='cover' variant="top" src={i.preview} />
              <Card.Body>
                <Card.Title className='m-0' style={{color:'red'}}>{i.name}</Card.Title>
                <span className='type'>{i.type}</span>
                <Card.Text className='text-muted' style={{fontSize:'small'}}>
                  {i.description}
                </Card.Text>
              </Card.Body>
              <Card.Footer>{i.price}</Card.Footer>
            </Card>
            })
          }
        </div>
        </Container>
    </Popular>
  )
}

export default Populars

const Popular = styled.div`
padding: 4em 1em;
text-align: center;
.box{
    display: flex;
    gap: 1em;
    justify-content: center;
    flex-wrap: wrap;
    height: 60vh;
  overflow: hidden;
  overflow-y: scroll;
}
.box::-webkit-scrollbar {
  width: 5px;     
  scroll-behavior: smooth;          /* width of the entire scrollbar */
}

.box::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.186);        /* color of the tracking area */
}

.box::-webkit-scrollbar-thumb {
  background-color: rgb(148, 232, 198);    /* color of the scroll thumb */
  border-radius: 20px;      
}
.cover{
  height: 15em !important;
    width: -webkit-fill-available !important;
    padding: 1em;
}
.type{
  font-size: small;
    font-weight: 300;
}
.cover:hover{
    transition: 0.5s;
    transform: scale(1.05);
}
`
