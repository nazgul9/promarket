import React, { Component } from 'react'
import { Row, Col, Container, Button ,Image} from 'react-bootstrap'
import { Link } from "react-router-dom";
import App from '../app/App'


export default class Cart extends Component {
    state = {
        t:JSON.parse(localStorage.getItem('key')) || [],
    }
    componentDidUpdate(prevProps, prevState,snapshot) {
        if (this.state.t !== prevState.t){ localStorage.setItem('key', JSON.stringify(this.state.t));
        }
    }
    todoAdd = (s) => {
        if (this.state.t.find(v => v.id === s.id)) {
            const del = this.state.t.filter(i => i.id !== s.id)
            this.setState((p) => {
                return { t: del }
            })
        } 
    }
    render() {
        return (
            <>
          {!(this.state.t.length > 0) && <div className="next" align='center'><Button as={Link} to={'/'}><h1>Назад</h1></Button><div className='image'><Image src="http://risovach.ru/upload/2014/03/mem/gost_46606310_orig_.jpg" fluid /></div></div>}
                <Container>
                    <Row>
                        {this.state.t.map((s) => {
                            return (
                                <Col>
                                <div style={{ position: 'relative' }} className="card mt-5 " >
                                            {s.discount && <div className='div2'>Акция {s.discount}%</div>}
                                            <img class="card-img-top mt-5 mr-3" style={{ width: '230px', height: '230px' }} src={s.main_image} alt="Card image cap" />
                                            <div class="card-body">
                                                <h4 class="card-text">{s.title}</h4>
                                                <h4>{(s.discount) ?
                                                    <>
                                                        <span style={{ color: 'green' }}>
                                                            {(s.price - (s.price * s.discount) / 100).toFixed(1)}c
                                                        </span>
                                                        <s style={{ marginLeft: '7px', color: 'red' }}>{s.price}c</s>
                                                    </>
                                                    : <div style={{ color: 'green' }}>
                                                        {s.price}c
                                                    </div>
                                                }
                                                </h4>
                                                <div class="row">
                                                    <Link className=" btn btn-primary" to={`/Items/${s.id}`}>
                                                        подробнее
                                                    </Link>
                                                </div>
                                                <Button style={{ width: '100%' }} className={this.state.t.find(v => v.id === s.id) ? 'btn btn-danger mt-4' : 'btn btn-success mt-4'} onClick={() => this.todoAdd(s)}>{this.state.t.find(v => v.id === s.id) ? 'Удалить ' : 'Добавить'}
                                                </Button>

                                            </div>
                                        </div>                          
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </>
        )
     
    }
}
