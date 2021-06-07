import React from 'react';
import headerimg from "../images/home.png";
import { NavLink } from 'react-router-dom';
import {Container,Row,Col,Image} from 'react-bootstrap';

const Home = () => {

  return (
    <>
     <section id="header" className="d-flex align-items-center ">
     <Container>
        <Row>
          <Col lg={12} className="mx-auto"  >
            <Row>
              <Col md={6} className=" order-2 order-md-1 d-flex justify-content-center flex-column mt-2 px-2">
                <h1>A Pet Store With Eeverything You Need. <span className="petworld">Gwalior Pet World</span></h1>
                <br/>
                <h2>If animals could talk, they’d talk about us!</h2>
                <div className="mt-2 align-items-center ml-2">
                  <NavLink to="/Service" className="servicebtn">Our Service</NavLink>
                </div>
              </Col>
              <Col md={6} className="order-1 order-md-2">
                <Image src={headerimg}  fluid alt="headerimg"/>
              </Col>

            </Row>

          </Col>
        </Row>
      </Container>
     </section>
    </>
  );
}

export default Home;