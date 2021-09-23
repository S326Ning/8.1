import React from "react";
import MyCard from './Card'
import Container from 'react-bootstrap/Container'
import { Card } from 'semantic-ui-react'
import expertsList from "./ExpertsList";

function cardComponent (staff, i) {
    return <MyCard
                key = {staff.key} 
                avatar = {staff.avatar}
                name = {staff.name}
                desc = {staff.desc}
                star = {staff.star}
            />        
}

function CardList (){
    return <div>
        <Container className="card-list">
            <h1>Featured Experts</h1>
            <Card.Group>
                {expertsList.map( (staff) =>
                    <MyCard
                        key = {staff.key} 
                        avatar = {staff.avatar}
                        name = {staff.name}
                        desc = {staff.desc}
                        star = {staff.star}
                    />
                )}                       
            </Card.Group>
        </Container>
    </div>
}

export default CardList