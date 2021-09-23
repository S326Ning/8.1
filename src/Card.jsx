import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'

function MyCard (props){
    return <Card>
                <Image src={props.avatar} wrapped ui={false} />
                <Card.Content>
                <Card.Header>{props.name}</Card.Header>
                <Card.Description>
                    {props.desc}
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a>
                    <Icon name='star' />
                    {props.star} Stars
                </a>
                </Card.Content>
            </Card>
}

export default MyCard