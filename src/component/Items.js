import React, { Component } from 'react';
import { Button, Image,Container ,Row,Span} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Producs from '../producs.json'



export default class Items extends Component {
    render() {
        const a = Producs.filter(i => i.id === +this.props.match.params.id)
        return (
            <>
            <Container className="shadow" style={{opacity:"0.9",marginTop:"20px"}}>
                <div className="d-flex">
            <Image style={{width:"650px"}} src={a[0].main_image} />
              <div className="container m-5"><h4>{a[0].title}</h4>
                    <h3 style={{color:"green"}}>{a[0].price}c</h3>  </div> 
                    </div>  
            </Container>
            </>
        );
    }
}