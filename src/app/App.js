import React, { Component } from 'react'
import Producs from '../producs.json'
import { Row, Col, Container,Button,images } from 'react-bootstrap'
import { Link } from "react-router-dom";
export default class App extends Component {
    state = {
        text: '',
        t: JSON.parse(localStorage.getItem('key'))  || [],
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.t !== prevState.t) {
            localStorage.setItem('key', JSON.stringify(this.state.t))
        }
    }
    todoAdd = (s) => {
        if (this.state.t.find(v => v.id === s.id)) {

            const del = this.state.t.filter(i => i.id !== s.id)
            this.setState((p) => {
                return { t: del }
            })
        } else {
            this.setState(pre => {
                const a = [...pre.t, s]
                return { t: a };
            })
        }
    }
    render() {
        const pr = Producs.filter(
            v => v.title.toLowerCase().indexOf(this.state.text && this.state.text.toLowerCase()) !== -1
        )
        return (
            <>
                <div className=" ">
                    <nav className="navbar  bg-dark shadow-sm ">
                        <div className="container justify-content-between">

                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a href="/Home" className="nav-link">Besort</a>
                                </li>
                            </ul>
                            <ul className="navbar-nav">
                                <li className="nav-item position-relative">
                                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">                    
                                    {this.state.t.length}
                                        <span class="visually-hidden">unread messages</span>
                                    </span>
                                    <Link to="/Cart" className="nav-link">Cart</Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/Car" className="nav-link">Car</Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/Books" className="nav-link">books</Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/Phone" className="nav-link">Phone</Link>
                                </li>
                            </ul>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            </div>
                        </div>
                    </nav>
                </div>
                <Container>
                    <Row>
                        <h1>Producs({pr.length})</h1>
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" justiv placeholder="Search" onChange={(e) => this.setState({ text: e.target.value })} aria-label="Search" />
                        </form>
                        {pr.map((s) => {
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

