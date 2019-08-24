import React, { Component } from 'react'

import {Link} from 'react-router-dom'

import Axios from 'axios'

import Main from '../../template/main/Main'

import Card from '../card/Card'

let defaultState = {
    pacient: {
        name: "",
        email: "",
        address: "",
        gender: ""
    },
    idInsEdit: null,
    origin: "/"
}

let baseURL = "http://localhost:3000/Pacients/"

export default class PacientIncAlt extends Component {

    state = { ...defaultState }

    constructor(props) {
        super(props)

        this.extractDatasFromOrigin()
    }

    extractDatasFromOrigin() {
        if (this.props.location.state.origin) {

            let { origin } = this.props.location.state

            this.state.origin = origin
        }

        if (this.props.location.state.pacient) {

            let { pacient, idInsEdit } = this.props.location.state

            this.state.pacient = pacient
            this.state.idInsEdit = idInsEdit
        }
    }

    save() {
        let method = this.state.idInsEdit == null ? "post" : "put";

        let url = method == "post" ? baseURL : `${baseURL}${this.state.idInsEdit}`

        let pacient = { ...this.state.pacient }

        Axios[method](url, pacient )
            .then(resp => {
                this.props.history.push(this.state.origin)
            })
            .catch(ex => {
                alert(ex)
            })
    }

    onFieldChanged(e) {

        let pacient = { ... this.state.pacient }

        pacient[e.target.name] = e.target.value

        this.setState({
            pacient
        })
    }

    getPacientInsUpdHTML() {
        return (
            <Card title="My Pacients">
                <form action="">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" className="form-control" placeholder="Pacient's Name" value={this.state.pacient.name} onChange={e => this.onFieldChanged(e)} />
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" name="email" className="form-control" placeholder="Pacient's E-mail" value={this.state.pacient.email} onChange={e => this.onFieldChanged(e)} />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-9">
                            <label htmlFor="address">Address</label>
                            <input type="text" name="address" className="form-control" placeholder="Pacient's Address" value={this.state.pacient.address} onChange={e => this.onFieldChanged(e)} />
                        </div>

                        <div className="form-group col-md-3">
                            <label htmlFor="gender" name="gender">Gender</label>
                            <select name="gender" className="form-control" value={this.state.pacient.gender} onChange={e => this.onFieldChanged(e)} >
                                <option value="">Select a Option</option>
                                <option value="M">Male</option>
                                <option value="F">Female</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-12 d-flex justify-content-end">
                            <button type="button" className="btn btn-primary mr-2" onClick={e => this.save(e)}>Save</button>
                            <Link to={this.state.origin}>
                                <button type="button" className="btn btn-secondary">Exit</button>
                            </Link>

                        </div>
                    </div>
                </form>
            </Card>
        )
    }

    render() {
        return (
            <Main>
                {this.getPacientInsUpdHTML()}
            </Main>
        )
    }
}