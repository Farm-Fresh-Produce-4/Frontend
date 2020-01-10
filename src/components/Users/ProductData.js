import React,{useState,useEffect} from "react";
import ProductCards from "./ProductCards";
import { Row, Container, Col } from "reactstrap";
import axios from "axios";

const ProductData = () => {

  {/*
  const [produce,setProduce] =useState([])

  useEffect(() => {
    axios
      .get(
        `https://freshproduce-backend.herokuapp.com/api/farmers/produce/:farmId`
      )

      .then(response => {
        console.log(response);
       
        const prodData= response.data.results
        setProduce(prodData);

      })
      .catch(error => {
        console.log("the data was not returned", error);
      });
  }, []);

  */ }

  const data = [
    {
      title: "apples",
      price: "3.99",
      quantity: "5",
      image:
        "https://is2-ssl.mzstatic.com/image/thumb/Purple118/v4/e8/06/22/e8062274-b353-e3ec-314d-a90c2a2da191/source/256x256bb.jpg"
    },

    {
      title: "Orange",
      price: "2.99",
      quantity: "4",
      image: "https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/tangerine.png"
    },
    {
      title: "Strawberries",
      price: "4.99",
      quantity: "2",
      image: "http://icons.iconarchive.com/icons/google/noto-emoji-food-drink/256/32354-strawberry-icon.png"
      },
      {
        title: "apples",
        price: "3.99",
        quantity: "5",
        image:
          "https://is2-ssl.mzstatic.com/image/thumb/Purple118/v4/e8/06/22/e8062274-b353-e3ec-314d-a90c2a2da191/source/256x256bb.jpg"
      },
      {
        title: "Oranges",
      price: "2.99",
      quantity: "4",
      image: "https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/tangerine.png"
      },
      {
        title: "Strawberries",
      price: "4.99",
      quantity: "2",
      image: "http://icons.iconarchive.com/icons/google/noto-emoji-food-drink/256/32354-strawberry-icon.png"
      },
      {
        title: "Oranges",
      price: "2.99",
      quantity: "4",
      image: "https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/tangerine.png"
      }
    
  ];

 let productCardRow = data.map(product => {
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
              {productCardRow}
          </Row>
      </Container>
  )
  
};

export  default ProductData
