import React from 'react'
import Container from 'react-bootstrap/Container'


function HomeImage(){
    return (
        <Container>
            <img className="homeImage" src={require('./images/home.jpg').default} />
        </Container>
    )
}

export default HomeImage