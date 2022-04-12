import React from 'react'
import { Button, Card } from 'react-bootstrap'
import './cards.css'
import { Assignment, CheckCircleRounded, FavoriteBorderOutlined, RemoveRedEyeOutlined } from '@mui/icons-material'



export default function Cards(props) {
  return (
    <>
    <Card className='card' style={{ width: '18rem' }}>

    <CheckCircleRounded className='right'/>
    <FavoriteBorderOutlined className='love' /><br></br>
    <Card.Img variant="top" className='img' src={props.image} />
    <Card.Body>
      <Card.Title className='title'><h2>{props.title1}</h2></Card.Title>
      <Card.Text className='text'>
        {props.text}
      </Card.Text>
      <Assignment className='a'/><Button className='assign' variant="primary">Assign</Button>
      <RemoveRedEyeOutlined className='v' /><Button className='view' variant="primary">View</Button>

    </Card.Body>
  </Card>
    
    </>
  )
}
