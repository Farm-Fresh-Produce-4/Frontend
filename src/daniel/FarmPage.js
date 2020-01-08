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
            </div>
            
            <FarmList/>
        </div>
    )
}



