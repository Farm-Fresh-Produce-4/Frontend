import React from 'react';
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
  } from 'reactstrap';

export const FarmListCards = (props) => {
    return (
        <div>
            <Card>
        <CardBody>
          <CardTitle>{props.farmName}</CardTitle>
          <CardSubtitle>{props.location}</CardSubtitle>
        </CardBody>
        <img width="100%" src={props.img} alt="Card image cap" />
        <CardBody>
          <CardText><li>{props.item1}</li></CardText>
          <CardText><li>{props.item2}</li></CardText>
          <CardText><li>{props.item3}</li></CardText>
          <CardText><li>{props.item4}</li></CardText>
          <CardLink href="#">View Farm</CardLink>
        </CardBody>
      </Card>
        </div>
    )
}
