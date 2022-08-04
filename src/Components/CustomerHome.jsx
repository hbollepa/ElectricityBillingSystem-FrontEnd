import React, { useState, useEffect, useRef} from "react"
import { useDispatch, useSelector } from "react-redux";
import  { useNavigate } from 'react-router-dom'
import { Navbar,Container,Nav,Dropdown,Modal,Button,Form,Table,Row,Col } from 'react-bootstrap';
import { deleteCustomer } from "../Action/customerAction";
import { logout } from "../Action/loginAction";
import { getCustomer,updateCustomer } from "../Action/customerAction";
import {PaymentTable, AddPaymentModal } from "./Payment";
import {BillTableCustomer} from "./Bill";

const CustomerHome =()=>{
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showCustomerUpdateModal,setShowCustomerUpdateModal] =useState(false)
    const [showPaymentTable,setShowPaymentTable] = useState(false);
    const [showPaymentAddModal,setShowPaymentAddModal] = useState(false);
    const [showBillTable,setShowBillTable] = useState(false);
    const customerByIdData = useSelector((state)=>state.getCustomer.getCustomerResp.data)
    
    const handleDeleteProfile = ()=>{
        console.log("delete profile");    
        if (window.confirm('Are you sure you want to delete your account')) {
            dispatch(deleteCustomer(customerByIdData.id))
            dispatch(logout());
            alert("you account is deleted and logged out");
            navigate('/');
      }  
    }

    const saveEditCustomer = (obj) =>{
        const newLoginObj = {
            id: customerByIdData.id,
            full_name: obj.full_name ? obj.full_name : customerByIdData.full_name ,
            mobile: obj.mobile ? obj.mobile : customerByIdData.mobile ,
            email: obj.email ? obj.email : customerByIdData.email ,
            bill:  customerByIdData.bill ,
            payment:  customerByIdData.payment ,
            service:  customerByIdData.service,
           
            address: {
              id: customerByIdData.address.id,
              d_no: obj.d_no ? obj.d_no : customerByIdData.address.d_no ,
              street: obj.street ? obj.street : customerByIdData.address.street ,
              city: obj.city ? obj.city : customerByIdData.address.city ,
              state: obj.state ? obj.state : customerByIdData.address.state ,
            },

            loginEntity: {
              email: obj.email ? obj.email : customerByIdData.loginEntity.email ,
              password: obj.password ? obj.password : customerByIdData.loginEntity.password ,
              role: "USER",
              id: customerByIdData.loginEntity.id
            }
          }
        dispatch(updateCustomer(newLoginObj));
        setShowCustomerUpdateModal(false)
    }

    const CustomerUpdateModal = (props) =>{
        const customerObj={ }
        if(!customerByIdData) return;
        return(
            <Modal {...props}>
                <Modal.Header closeButton>
                <Modal.Title>Update Customer data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="Text"
                            autoFocus
                            placeholder={customerByIdData? customerByIdData.full_name : null}
                            onChange={(e)=>{customerObj.full_name=(e.target.value)}}
                        /><br />
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={customerByIdData? customerByIdData.mobile : null}
                            onChange={(e)=>{customerObj.mobile=(e.target.value)}}
                        /><br />
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={customerByIdData? customerByIdData.loginEntity.email : null}
                            onChange={(e)=>{customerObj.email=(e.target.value)}}
                        /><br />
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={customerByIdData? customerByIdData.loginEntity.password : null}
                            onChange={(e)=>{customerObj.password=(e.target.value)}}
                        /><br />

                        <Form.Label>Door No</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={customerByIdData? customerByIdData.address.d_no : null}
                            onChange={(e)=>{customerObj.d_no=(e.target.value)}}
                        /><br />
                        <Form.Label>Street</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={customerByIdData? customerByIdData.address.street : null}
                            onChange={(e)=>{customerObj.street=(e.target.value)}}
                        /><br />
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={customerByIdData? customerByIdData.address.city : null}
                            onChange={(e)=>{customerObj.city=(e.target.value)}}
                        /><br />
                        <Form.Label>State</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={customerByIdData? customerByIdData.address.state : null}
                            onChange={(e)=>{customerObj.state=(e.target.value)}}
                        /><br />
                    </Form.Group>
                    
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary"  onClick={props.onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={()=>saveEditCustomer(customerObj)}>
                    Update
                </Button>
                </Modal.Footer>
            </Modal>
        )
    }

    const handleRefresh = ()=>{
        dispatch(getCustomer(customerByIdData.id))
    }
    return(

        <>
            <CustomerUpdateModal 
                show={showCustomerUpdateModal}
                onHide={()=>{setShowCustomerUpdateModal(false)}}
            />
            <AddPaymentModal 
                show={showPaymentAddModal}
                onHide={()=>{setShowPaymentAddModal(false)}}
            />
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container fluid>
                        <Navbar.Brand href="/">ElectricityBillingSystem<a href="/"></a></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >

                            <Nav.Link disabled style={{ paddingLeft: '600px' }}>Hi {customerByIdData?customerByIdData.full_name:null}! Welcome</Nav.Link>  
                        </Nav>
                         </Navbar.Collapse>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic" style={{width:"150px"}}>
                                Profile  
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={()=>{setShowCustomerUpdateModal(true)}}>Update Profile</Dropdown.Item>
                                    <Dropdown.Item onClick={handleDeleteProfile}>Delete Profile</Dropdown.Item>
                                    <Dropdown.Item href="/">Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                    </Container>
                </Navbar>
                
            <br/>
            <Row>
                <Col xs={2} >
                <div>
                    <Button variant="success"  style={{width:"150px"}} onClick={handleRefresh}>Refresh</Button><br /><br/>
                    <Button variant="success" style={{width:"150px"}} onClick={()=>{setShowPaymentAddModal(true)}}>Make Payments</Button><br /><br/>
                    <Button variant="success" style={{width:"150px"}} onClick={()=>{setShowPaymentTable(!showPaymentTable)}}>View Payments</Button><br /><br/>
                    <Button variant="success" style={{width:"150px"}} onClick={()=>{setShowBillTable(!showBillTable)}}>View Bills</Button><br /><br/>
                    
                </div>
                </Col>
                <Col xs={10}>
                <div>
                {
                    showPaymentTable?
                    <PaymentTable />:
                    null
                }
                {
                    showBillTable?
                    <BillTableCustomer />:
                    null
                }
                </div>
                </Col>
            </Row>
        </>
    )
}
export default CustomerHome;