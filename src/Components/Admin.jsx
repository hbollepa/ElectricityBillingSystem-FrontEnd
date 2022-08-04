import React,{useState,useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import  { useNavigate } from 'react-router-dom'
import { Navbar,Container,Nav,Dropdown,Modal,Button,Form,Table,Row,Col } from 'react-bootstrap';

import { getAdminById,updateAdmin,deleteAdmin } from "../Action/adminAction";
import {CustomerTable, AddCustomerModal} from "./Customer";
import { getAllCustomer } from "../Action/customerAction";
import {logout} from "../Action/loginAction";

const Admin = ()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const adminByIdData = useSelector((state)=>state.getAdminById.getAdminResp.data)
    
    const [showCustomerTable,setShowCustomerTable] = useState(false);
    const [showAdminUpdateModal,setShowAdminUpdateModal] = useState(false);
    const [showCustomerAddModal,setShowCustomerAddModal] = useState(false);
    
    
    const handleDeleteProfile = ()=>{
        console.log("delete profile");    
        if (window.confirm('Are you sure you want to delete your account')) {
            dispatch(deleteAdmin(adminByIdData.id))
            dispatch(logout());
            alert("you account is deleted and logged out");
            navigate('/');
      }  
    }

    const saveEditAdmin = (obj) =>{
        const newLoginObj = {
            id: adminByIdData.id,
            admin_name: obj.admin_name ? obj.admin_name : adminByIdData.admin_name ,
            admin_contact: obj.admin_contact ? obj.admin_contact : adminByIdData.admin_contact ,
            loginEntity: {
              email: obj.email ? obj.email : adminByIdData.loginEntity.email ,
              password: obj.password ? obj.password : adminByIdData.loginEntity.password ,
              role: "ADMIN",
              id: adminByIdData.id
            }
          }
          console.log(newLoginObj)
        dispatch(updateAdmin(newLoginObj));
        setShowAdminUpdateModal(false)
    }

    const AdminUpdateModal = (props) =>{
        const adminObj={ }
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
                            placeholder={adminByIdData? adminByIdData.admin_name : null}
                            onChange={(e)=>{adminObj.admin_name=(e.target.value)}}
                        /><br />
                        <Form.Label>Contact No</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={adminByIdData? adminByIdData.admin_contact : null}
                            onChange={(e)=>{adminObj.admin_contact=(e.target.value)}}
                        /><br />
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={adminByIdData? adminByIdData.loginEntity.email : null}
                            onChange={(e)=>{adminObj.email=(e.target.value)}}
                        /><br />
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={adminByIdData? adminByIdData.loginEntity.password : null}
                            onChange={(e)=>{adminObj.password=(e.target.value)}}
                        /><br />
                    </Form.Group>
                    
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary"  onClick={props.onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={()=>saveEditAdmin(adminObj)}>
                    Update
                </Button>
                </Modal.Footer>
            </Modal>
        )
    }

    const handleRefresh = () =>{
        dispatch(getAllCustomer());
        dispatch(getAdminById(adminByIdData.id));
    }

    return(
        <>
            <AdminUpdateModal 
                show={showAdminUpdateModal}
                onHide={()=>{setShowAdminUpdateModal(false)}}
            />
            <AddCustomerModal 
                show={showCustomerAddModal}
                onHide={()=>{setShowCustomerAddModal(false)}}
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

                            {/* <Nav.Link onClick={()=>{setShowCustomerAddModal(true)}}>Add Customer</Nav.Link>
                            <Nav.Link onClick={()=>{setShowCustomerTable(!showCustomerTable)}}>View Customer</Nav.Link> 
                            <Nav.Link onClick={handleRefresh}>Refresh</Nav.Link>*/}
                            <Nav.Link disabled style={{ paddingLeft: '600px' }}>Hi {adminByIdData?adminByIdData.admin_name:null}! Welcome</Nav.Link> 
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
            <br/>
            
            <Row>
                <Col xs={2} >
                <div>
                    <Button variant="success"  style={{width:"150px"}} onClick={handleRefresh}>Refresh</Button><br /><br/>
                    <Button variant="success" style={{width:"150px"}} onClick={()=>{setShowCustomerAddModal(true)}}>Add Customer</Button><br /><br/>
                    <Button variant="success" style={{width:"150px"}} onClick={()=>{setShowCustomerTable(!showCustomerTable)}}>View Customer</Button><br /><br/>
                </div>
                </Col>
                <Col xs={10}>
                    <div>
                    {
                        showCustomerTable?
                        <CustomerTable />:
                        null
                    }
                    </div>
                </Col>
            </Row>
            
        </>
    )
}

export default Admin;