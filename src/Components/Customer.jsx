import React, { useState, useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import  { useNavigate } from 'react-router-dom'
import { Navbar,Container,Nav,Dropdown,Modal,Button,Form,Table,Row } from 'react-bootstrap';
import { registerCustomer,getCustomer } from "../Action/customerAction";
import {BillTable,AddBillModal} from "./Bill";
import {PaymentTable} from "./Payment";

export  const CustomerTable = (props) =>{

    const dispatch = useDispatch();
    const customerAllData = useSelector((state)=>state.getAllCustomer.getAllCustomerResp.data)
    const [showBillTable,setShowBillTable] = useState(false);
    const [showBillAddModal,setShowBillAddModal] = useState(false);
    const [showPayMentTable,setShowPayMentTable] = useState(false);

    return(
        <>
            <AddBillModal 
                show={showBillAddModal}
                onHide={()=>{setShowBillAddModal(false)}}
            />
            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Service Type</th>
                        <th>Address Details</th>
                        <th>Bill Details</th>
                        <th>Payment Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        customerAllData && customerAllData.map((val)=>{
                            return(
                                <tr>
                                    <td>{val.id}</td>
                                    <td>{val.full_name}</td>
                                    <td>{val.email}</td>
                                    <td>{val.mobile}</td>
                                    <td>{val.service.service_type}</td>
                                    <td>{val.address.d_no+" "+val.address.street+" "+val.address.city+" "+val.address.state}</td>
                                    <td>
                                        <Button variant="success"onClick={()=>{
                                            dispatch(getCustomer(val.id));
                                            setShowBillTable(!showBillTable);
                                        }}>View</Button> &nbsp; &nbsp;
                                        <Button variant="success"onClick={()=>{
                                            dispatch(getCustomer(val.id));
                                            setShowBillAddModal(true);
                                        }}>Add</Button>
                                    </td>
                                    <td>
                                        <Button variant="success"onClick={()=>{
                                            dispatch(getCustomer(val.id));
                                            setShowPayMentTable(!showPayMentTable)
                                            }}>View</Button>
                                    </td>
                                    
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <br />
            {
                showBillTable?
                <BillTable/>:
                null
            }
            {
                showPayMentTable?
                <PaymentTable/>:
                null
            }
        </>
    )
}

export const AddCustomerModal = (props) =>{
    
    const dispatch = useDispatch();
    const rand = 1 + Math.random() * (1000000 - 1)
    const AddCustomerObj={
        id:rand,
        loginEntity:{id:rand,role:"USER"},
        address:{},
        service:{},
        bill:[],
        payment:[]
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
                        onChange={(e)=>{AddCustomerObj.address.d_no=(e.target.value)}}
                    /><br />
                    <Form.Label>Street</Form.Label>
                    <Form.Control
                        type="Text"
                        placeholder="Street"
                        onChange={(e)=>{AddCustomerObj.address.street=(e.target.value)}}
                    /><br />
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        type="Text"
                        placeholder="City"
                        onChange={(e)=>{AddCustomerObj.address.city=(e.target.value)}}
                    /><br />
                    <Form.Label>State</Form.Label>
                    <Form.Control
                        type="Text"
                        placeholder="State"
                        onChange={(e)=>{AddCustomerObj.address.state=(e.target.value)}}
                    /><br />
                    
                    <Form.Label>Service Type</Form.Label>
                    <Form.Control
                        type="Text"
                        placeholder="Service Type"
                        onChange={(e)=>{AddCustomerObj.service.service_type=(e.target.value)}}
                    /><br />
                    
                </Form.Group>
                
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary"  onClick={props.onHide}>
                Close
            </Button>
            <Button variant="primary" onClick={()=>{dispatch(registerCustomer(AddCustomerObj));props.onHide()}}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
    )
}