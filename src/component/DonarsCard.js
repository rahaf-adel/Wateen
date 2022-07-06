import React from 'react'
import {Container, Card } from "react-bootstrap"


function DonarsCard(props) {
  return (
    <div>
    <Container>

   <br></br>
    <Card style={{ width: '18rem' }} >
    <Card.Img style={{ width: '100%',height:'250px' }}variant="top" src={props.data.image} />
    <Card.Body>
      <Card.Title >{props.data.name}</Card.Title>
      <Card.Text>عدد مرات التبرع:{props.data.timesDonated}</Card.Text>
      </Card.Body>
     </Card>
    
     </Container>
     </div>
  )
}

export default DonarsCard