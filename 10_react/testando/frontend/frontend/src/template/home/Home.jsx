import React from 'react'

import { Link } from 'react-router-dom'

import "./Home.scss"

import Main from '../../template/main/Main'

import doctor_and_pacient_image from '../../assets/img/doctor_and_pacient.jpg'
import my_appointments from '../../assets/img/my_appointments.jpg'
import my_account from '../../assets/img/my_account.jpg'

function getHomeHTML() {
    return (
        <div className="home">

            <div className="container">
                <div className="container_flex" className="row d-flex justify-content-center">
                    <div className="col-md-4 mb-2">
                        <div class="card">
                            <img src={doctor_and_pacient_image} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">My Pacients</h5>
                                <Link to="/myPacients" class="btn btn-outline-primary btn-block">Go There</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-2">
                        <div class="card">
                            <img src={my_appointments} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">My Appointments</h5>
                                <Link to="/myAppointments" class="btn btn-outline-primary btn-block">Go There</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-2">
                        <div class="card">
                            <img src={my_account} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">My Account</h5>
                                <Link to="/myaccount" class="btn btn-outline-primary btn-block">Go There</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default (props) =>
    <Main>
        {getHomeHTML()}
    </Main>