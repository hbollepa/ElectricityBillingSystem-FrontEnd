import React, { useState, useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import  { useNavigate } from 'react-router-dom'
import { Navbar,Container,Nav,Dropdown,Modal,Button,Form,Table,Row } from 'react-bootstrap';


const Home = ()=>{
    return(
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Container fluid>
                            <Navbar.Brand href="/">Electricity Billing System <a href="/"></a></Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/login">Login</Nav.Link>
                            </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
          <div
        style={{
          backgroundImage: `url("https://c8.alamy.com/comp/2F24R82/monthly-utility-bills-cost-of-utilities-planning-for-utility-costs-in-the-monthly-budget-electricity-bills-by-state-monthly-report-budget-for-2F24R82.jpg")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "mt-3 99vw",
          height: "90vh",
        }}

      ></div>
        </>
    );
};

export default Home;