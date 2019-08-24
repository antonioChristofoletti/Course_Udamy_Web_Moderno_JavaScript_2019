import React, { Component } from 'react'

import axios from 'axios'

import { faTrash, faEdit, faPlusCircle, faSyncAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import Axios from 'axios'

import Main from '../../template/main/Main'

let baseURL = "http://localhost:3000/Pacients/"

let defaultState = {
    list: []
}

export default class PacientList extends Component {

    state = { ...defaultState }

    componentWillMount() {
        this.getPacientsList();
    }

    constructor(props) {
        super(props)
    }

    removePacient(idPacient) {

        if (!Number.isInteger(idPacient)) return;

        axios["delete"](`${baseURL}/${idPacient}`)
            .then(resp => alert(`Usuário removido com sucesso`))
            .catch(ex => alert(`Erro ao realizar a remoção. Erro: ${ex} `))
            .then(() => this.getPacientsList())
    }

    getParam_to_link_btn_Edit(pacient) {

        let pacientSend = { ...pacient }
        let idInsEdit = pacient.id

        delete pacientSend.id

        pacientSend.gender = pacientSend.gender.substring(0, 1)

        let to = {
            pathname: "/pacient/insUpd",
            state: {
                origin: "/myPacients",
                pacient: pacientSend,
                idInsEdit
            }
        }

        return to;
    }

    getParam_to_link_btn_Add() {
        let link_to_btnAdd = {
            pathname: "/pacient/insUpd",
            state: {
                origin: "/myPacients"
            }
        }

        return link_to_btnAdd
    }

    getPacientsList() {
        Axios(baseURL)
            .then(resp => {
                this.setState({ list: resp.data })
            })
            .catch(ex => {
                alert(`Error trying bring the dates. Error: ${ex}`)
            })
    }

    getTable() {
        return (
            <div className="bootstrap-table-container">
                <div className="table-responsive">
                    <table className="table table-hover">

                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">E-mail</th>
                                <th scope="col">Address</th>
                                <th scope="col">Gender</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>

                        {this.getTableBody()}
                    </table>
                </div>
            </div>
        )
    }

    getTableBody() {
        return (
            <tbody>
                {this.state.list.map(pacient => {
                    return (
                        <tr>
                            <th scope="row">{pacient.id}</th>
                            <td className="text-nowrap">{pacient.name}</td>
                            <td className="text-nowrap">{pacient.email}</td>
                            <td className="text-nowrap">{pacient.address}</td>
                            <td className="text-nowrap">{pacient.gender == "M" ? "Male" : "Female"}</td>
                            <td className="text-nowrap">
                                <Link to={this.getParam_to_link_btn_Edit(pacient)}>
                                    <button type="button" className="btn btn-warning btn-sm mr-2">
                                        <FontAwesomeIcon icon={faEdit}>
                                        </FontAwesomeIcon>
                                    </button>
                                </Link>
                            </td>
                            <td className="text-nowrap">
                                <button type="button" className="btn btn-danger btn-sm" onClick={() => this.removePacient(pacient.id)}>
                                    <FontAwesomeIcon icon={faTrash}>
                                    </FontAwesomeIcon>
                                </button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        )
    }

    render() {
        return (
            <Main>
                <div className="d-flex flex-column flex-md-row mb-2">
                    <Link to={this.getParam_to_link_btn_Add()} className=" mb-2 mb-md-0 mr-md-2">
                        <button className="btn btn-primary w-100">
                            <FontAwesomeIcon icon={faPlusCircle} /> Add
                        </button>
                    </Link>

                    <button className="btn btn-primary" onClick={e => this.getPacientsList(e)}><FontAwesomeIcon icon={faSyncAlt} /> Refresh</button>
                </div>
                {this.getTable()}
            </Main>
        )
    }
}