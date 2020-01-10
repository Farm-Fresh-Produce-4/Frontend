import React from 'react'
import { FarmListCards } from '../Daniel/FarmListCards'
import { Container, Row } from 'reactstrap'


export const FarmList = () => {
    const farmdata =[
        {
            name:"Marchim Farms",
            location:"Idaho",
            img:"https://img.icons8.com/cotton/2x/farm--v1.png",
            item1:"Delivery option available",
            item2:"Pick up available",
            item3:"Monthly food box",
            item4:"Drop off available"

        },
        {
            name:"Earthbound Farms",
            location:"Idaho",
            img:"https://res-1.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/ze49mdhvbwppjspapo95",
            item1:"Delivery option available",
            item2:"NO Pick up available",
            item3:"weekly food box",
            item4:"Drop off available"

        },
        {
            name:"City Farm",
            location:"Idaho",
            img:"https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1487649349/gv1c0rn92p06yzc1nv45.jpg",
            item1:"Delivery option available",
            item2:"Pick up available",
            item3:"bi-weekly food box",
            item4:"NO Drop off available"

        },
        {
            name:"Marchim Farms",
            location:"Idaho",
            img:"https://img.icons8.com/cotton/2x/farm--v1.png",
            item1:"Delivery option available",
            item2:"Pick up available",
            item3:"Monthly food box",
            item4:"Drop off available"

        },
        {
            name:"City Farm",
            location:"Idaho",
            img:"https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1487649349/gv1c0rn92p06yzc1nv45.jpg",
            item1:"Delivery option available",
            item2:"Pick up available",
            item3:"bi-weekly food box",
            item4:"NO Drop off available"

        }
    ]

    let FarmListRow = farmdata.map(farms =>{
        return (
            <div>
                <FarmListCards
                farmName={farms.name}
                location={farms.location}
                img={farms.img}
                item1={farms.item1}
                item2={farms.item2}
                item3={farms.item3}
                item4={farms.item4}
                />
            </div>
        )
    })
    return (
        <Container fluid="lg">
            <Row>
            {FarmListRow}
            </Row>
        </Container>
   
    )
}
