import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

 const ProductCards = props => {
    return (
        <div>
            <Card>
        <CardImg top width="100%" src={props.img} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle>{props.price}</CardSubtitle>
          <CardText>{props.quantity}</CardText>
          <Button>Add to cart</Button>
        </CardBody>
      </Card>
    </div>
           
    )
}

export default ProductCards