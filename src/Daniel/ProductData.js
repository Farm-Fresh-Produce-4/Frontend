import React from 'react'
import ProductCards from './ProductCards'

export const ProductData = () => {

    const data = [

        {
            title:"apples",
            price:"3.99",
            quantity:"5",

        }
    ]



    return (
        <div>
            <ProductCards
            title={data.title}
            price={data.price}
            quantity={data.quantity}
            />
        </div>
    )
}
