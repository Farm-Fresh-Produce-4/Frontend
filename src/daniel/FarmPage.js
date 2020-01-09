import React from 'react'
import styles from './FarmPage.css'
import FNavBar from './FNavBar'
import { FarmList } from '../kai/FarmList'
import Header_image from '../img/Header_image.png'


export const FarmPage = () => {
    return (
        <div>
            <div>
            <FNavBar/>
            <img class= 'Header' src={Header_image} alt=""/>
            <h1>Fresh Produce Around The World!</h1>
            <p class='headertext'>Choose any farms that firts your busy lifestyle. For your convenience, our farms offer many features that makes eating healthy much easier</p>
            </div>
            
            <FarmList/>
        </div>
    )
}



