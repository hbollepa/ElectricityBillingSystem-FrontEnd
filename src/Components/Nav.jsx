import React, { useState, useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import  { useNavigate } from 'react-router-dom'
import { Navbar,Container,Nav,Dropdown,Modal,Button,Form,Table,Row } from 'react-bootstrap';

import {logout} from './../Action/loginAction'
import { deleteAdmin,updateAdmin,getAdminById } from "../Action/adminAction";
import { deleteLogin,updateLogin, } from "./../Action/loginAction";
import { registerCustomer,getAllCustomer,updateCustomer } from "../Action/customerAction";
import { registerBill } from "../Action/billAction";

const NavBar = ()=>{
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showAdminUpdateModal,setShowAdminUpdateModal] = useState(false);
    const [showAddCustomerModal,setShowAddCustomerModal] = useState(false);
    const [showAddBillingModal,setShowAddBillingModal]= useState(false);

    const adminData = useSelector((state)=>state.getAdminByEmail.getAdminByEmailResp.data)
    const adminByIdData = useSelector((state)=>state.getAdminById.getAdminResp.data)
    const loginData = useSelector((state)=>state.getLogin.getLoginResp.data)
    const customerAllData = useSelector((state)=>state.getAllCustomer.getAllCustomerResp.data)
    const billRegister = useSelector((state)=>state.registerBill.registerBillResp.data)
    const handleDeleteProfile = ()=>{
        console.log("delete profile");    
        if (window.confirm('Are you sure you want to delete your account')) {
            dispatch(deleteAdmin(adminByIdData.id))
            dispatch(deleteLogin(loginData.email))
            dispatch(logout());
            alert("you account is deleted and logged out");
            navigate('/');
      }  
    }

    const saveEditAdmin = (obj) =>{
        const newLoginObj = {
            email: obj.email ? obj.email : loginData.email,
            password: obj.password ? obj.password : loginData.password,
            role: loginData.role
          }
        dispatch(updateLogin(newLoginObj));
        const newAdminObj = {
            id:adminByIdData.id,
            adminName: obj.name ? obj.name : adminByIdData.adminName,
            adminContact: obj.contact ? obj.contact : adminByIdData.adminContact,
            adminEmail: obj.email ? obj.email : adminByIdData.adminEmail
        }
        dispatch(updateAdmin(newAdminObj));
        setShowAdminUpdateModal(false)
    }

    const AdminUpdateModal = (props) =>{
        const adminObj={
        }
        if(!adminByIdData) return;
        return(
            <Modal {...props}>
                <Modal.Header closeButton>
                <Modal.Title>Update Admin data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="Text"
                            autoFocus
                            placeholder={adminByIdData? adminByIdData.adminName : null}
                            onChange={(e)=>{adminObj.name=(e.target.value)}}
                        /><br />
                        <Form.Label>Contact No</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={adminByIdData? adminByIdData.adminContact : null}
                            onChange={(e)=>{adminObj.contact=(e.target.value)}}
                        /><br />
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={adminByIdData? adminByIdData.adminEmail : null}
                            onChange={(e)=>{adminObj.email=(e.target.value)}}
                        /><br />
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={loginData? loginData.password : null}
                            onChange={(e)=>{adminObj.password=(e.target.value)}}
                        /><br />
                    </Form.Group>
                    
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary"  onClick={props.onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={()=>saveEditAdmin(adminObj)}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        )
    }

    const AddCustomerModal = (props) =>{
        const AddCustomerObj={
            loginEntity:{role:"USER"},
            addressId:{}
        }
        return(
            <Modal {...props}>
                <Modal.Header closeButton>
                <Modal.Title>Add Customer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="Text"
                            autoFocus
                            placeholder="Name"
                            onChange={(e)=>{AddCustomerObj.full_name=(e.target.value)}}
                        /><br />
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder="Email"
                            onChange={(e)=>{
                                AddCustomerObj.email=(e.target.value);
                                AddCustomerObj.loginEntity.email=(e.target.value)
                            }}
                        /><br />
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder="Mobile"
                            onChange={(e)=>{AddCustomerObj.mobile=(e.target.value)}}
                        /><br />
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder="Password"
                            onChange={(e)=>{AddCustomerObj.loginEntity.password=(e.target.value)}}
                        /><br />
                        
                        <Form.Label>Dno.</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder="Dno"
                            onChange={(e)=>{AddCustomerObj.addressId.dno=(e.target.value)}}
                        /><br />
                        <Form.Label>Street</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder="Street"
                            onChange={(e)=>{AddCustomerObj.addressId.street=(e.target.value)}}
                        /><br />
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder="City"
                            onChange={(e)=>{AddCustomerObj.addressId.city=(e.target.value)}}
                        /><br />
                        <Form.Label>State</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder="State"
                            onChange={(e)=>{AddCustomerObj.addressId.state=(e.target.value)}}
                        /><br />
                        <Form.Label>Pincode</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder="Pincode"
                            onChange={(e)=>{AddCustomerObj.addressId.pincode=(e.target.value)}}
                        /><br />
                        
                    </Form.Group>
                    
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary"  onClick={props.onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={()=>{console.log(AddCustomerObj);dispatch(registerCustomer(AddCustomerObj));setShowAddCustomerModal(false)}}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        )
    }

    const AddBillingModal = (props) =>{
        const rand = 1 + Math.random() * (10000 - 1)
        const AddBillingObj={id:rand}
        return(
            <Modal {...props}>
                <Modal.Header closeButton>
                <Modal.Title>Add Billing</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Customer Id,Name</Form.Label>
                        <Form.Select  
                            onChange={(e)=>{AddBillingObj.customerId=(e.target.value)}}  >
                            <option value="">Choose Customer</option>
                            {
                                customerAllData && customerAllData.map((val)=>{
                                    return (<option value={val.cust_id}>{val.cust_id+","+val.full_name}</option>)
                                })
                            }
                        </Form.Select><br />
                        <Form.Label>Units Consumed</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder="Units"
                            onChange={(e)=>{AddBillingObj.unitsConsumed=(e.target.value)}}
                        /><br />
                        <Form.Label>Price Per Unit</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder="Rs"
                            onChange={(e)=>{AddBillingObj.pricePerUnit=(e.target.value)}}
                        /><br />
                        <Form.Label>Due Date</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder="E.g 2022-07-31"
                            onChange={(e)=>{AddBillingObj.dueDate=(e.target.value)}}
                        /><br />
                        <Form.Label>Start Date</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder="E.g 2022-07-31"
                            onChange={(e)=>{AddBillingObj.startDate=(e.target.value)}}
                        /><br />
                        <Form.Label>End Date</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder="E.g 2022-07-31"
                            onChange={(e)=>{AddBillingObj.endDate=(e.target.value)}}
                        /><br />
                        
                        
                    </Form.Group>
                    
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary"  onClick={props.onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={()=>{
                    dispatch(registerBill(AddBillingObj));
                    setShowAddBillingModal(false);
                    }}>
                    Add Bill
                </Button>
                </Modal.Footer>
            </Modal>
        )
    }

    useEffect(()=>{
        if(billRegister){

        }
    },[billRegister])
    useEffect(()=>{
        if(adminData){
            dispatch(getAdminById(adminData[0].id));
        }
      },[adminData])

    const handleRefresh = ()=>{
        dispatch(getAdminById(adminByIdData.id));
        dispatch(getAllCustomer());
        console.log(adminByIdData)
    }

    return( 
        <> 
            <AdminUpdateModal 
                show={showAdminUpdateModal}
                onHide={()=>{setShowAdminUpdateModal(false)}}
            />
            <AddCustomerModal 
                show={showAddCustomerModal}
                onHide={()=>{setShowAddCustomerModal(false)}}
            />
            <AddBillingModal 
                show={showAddBillingModal}
                onHide={()=>{setShowAddBillingModal(false)}}
            />
            <Navbar collapseOnSelect expand="lg" bg="dark" bg-secondary variant="dark" >
                    <Container fluid>
                        <Navbar.Brand href="/">ElectricityBillingSystem<a href="/"></a></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            {/* <Nav.Link onClick={()=>{dispatch(getResults())}}>View Results</Nav.Link>*/}
                            <Nav.Link onClick={()=>{setShowAddCustomerModal(true);}}>Add Customer</Nav.Link>
                            <Nav.Link onClick={()=>{handleRefresh();setShowAddBillingModal(true);}}>Add Bill</Nav.Link>
                            
                            <Nav.Link onClick={handleRefresh}>Refresh</Nav.Link>
                            <Nav.Link disabled style={{ paddingLeft: '300px' }}>Hi {adminByIdData?adminByIdData.adminName:null}! Welcome</Nav.Link> 
                        </Nav>
                         </Navbar.Collapse>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic" style={{width:"150px"}}>
                                Profile  
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={()=>{setShowAdminUpdateModal(true)}}>Update Profile</Dropdown.Item>
                                    <Dropdown.Item onClick={handleDeleteProfile}>Delete Profile</Dropdown.Item>
                                    <Dropdown.Item href="/">Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                    </Container>
                </Navbar>
        </>
    )
}

export default NavBar;