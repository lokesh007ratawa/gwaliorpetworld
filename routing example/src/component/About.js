import React from 'react';
import Slider from './Slider';
import { NavLink } from 'react-router-dom';
import headerimg from "../images/about.jpg"
import { Container } from 'react-bootstrap'

const About = () => {

    return (
        <>
            <Container className=" mt-3">
                <Slider />
            </Container>
            <div className="container-fluid mt-1 ">
                <div className="row">
                    <div className="col-10 mx-auto  ">
                        <div className="row about">
                            <div className="col-md-6 order-2 order-md-1 d-flex justify-content-center flex-column mt-2 px-2">
                                <h1 className="display-5 text-center">Gwalior Pets World in Padav, Gwalior</h1>
                                <p>Gwalior Pets World in Gwalior is one of the leading businesses in the Pet
                                 Shops. Also known for Pet Shops, Pet Shops For Dog, Pet Shops For Birds, Dog
                                  Trainers, Pet Shops For German Shepherd Dog, Dog Food Retailers, 
                                  Dog Kennel Dealers, Pet Shops For Labrador Dog and much more.
                                   Find Address, Contact Number, Reviews & Ratings, Photos, Maps of 
                                   Gwalior Pets World, Gwalior.</p>
                                <div className="mt-2 align-items-center">
                                    <NavLink to="/contactUs" className="aboutcontactbtn">Contact Us</NavLink>
                                </div>
                            </div>
                            <div className="col-md-6 order-1 order-md-2 aboutsectn">
                                <img src={headerimg} className="img-fluid home align-items-center" alt="headerimg" />
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default About;