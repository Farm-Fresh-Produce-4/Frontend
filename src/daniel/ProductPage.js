import React from 'react'
import NavBar from './NavBar'
import Header_image2 from '../img/Header_image2.png'
import ProductData from './ProductData'
import styles from './ProductPage.css'
import dark_shade_layer from '../img/dark_shade_layer.png'


export const ProductPage = () => {
    return (
        <div>
            <NavBar/>
            <img class= 'Header' src={Header_image2} alt=""/>
            <img class='drklayer' src={dark_shade_layer} alt=""/>
            <h1>J Marchini Farms</h1>
            <p class='headertext'>The story of J. Marchini Farms is about family, close friends, and success. Without these, J. Marchini Farms may have never been, and radicchio would never have made it to America’s salad bowl.</p>
            <ProductData/>
        </div>
    )
}
