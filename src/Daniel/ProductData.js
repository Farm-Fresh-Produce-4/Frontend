import React from "react";
import ProductCards from "./ProductCards";
import { Row, Container, Col } from "reactstrap";

export const ProductData = () => {
  const data = [
    {
      title: "apples",
      price: "3.99",
      quantity: "5",
      image:
        "https://is2-ssl.mzstatic.com/image/thumb/Purple118/v4/e8/06/22/e8062274-b353-e3ec-314d-a90c2a2da191/source/256x256bb.jpg"
    },

    {
      title: "pear",
      price: "3.99",
      quantity: "5"
    },
    {
        title: "apples",
        price: "3.99",
        quantity: "5",
        image:
          "https://is2-ssl.mzstatic.com/image/thumb/Purple118/v4/e8/06/22/e8062274-b353-e3ec-314d-a90c2a2da191/source/256x256bb.jpg"
      },
      {
        title: "apples",
        price: "3.99",
        quantity: "5",
        image:
          "https://is2-ssl.mzstatic.com/image/thumb/Purple118/v4/e8/06/22/e8062274-b353-e3ec-314d-a90c2a2da191/source/256x256bb.jpg"
      },
      {
        title: "apples",
        price: "3.99",
        quantity: "5",
        image:
          "https://is2-ssl.mzstatic.com/image/thumb/Purple118/v4/e8/06/22/e8062274-b353-e3ec-314d-a90c2a2da191/source/256x256bb.jpg"
      },
    
  ];

 let peoplecardd = data.map(product => {
    return (
      <div>
      
          <ProductCards
            img={product.image}
            title={product.title}
            price={product.price}
            quantity={product.quantity}
          />
        
      </div>
    );
  });

  return (
      <Container fluid>
          <Row>
              {peoplecardd}
          </Row>
      </Container>
  )
  
};
