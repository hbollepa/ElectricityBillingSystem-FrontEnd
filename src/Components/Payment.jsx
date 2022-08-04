import React, { useState, useEffect, useRef} from "react"
import { useDispatch, useSelector } from "react-redux";
import  { useNavigate } from 'react-router-dom'
import { Navbar,Container,Nav,Dropdown,Modal,Button,Form,Table,Row } from 'react-bootstrap';
import { registerCustomer } from "../Action/customerAction";
import {updatePayment,deletePayment, getPayment} from"../Action/paymentAction";

export const PaymentTable = ()=>{
    const customerByIdData = useSelector((state)=>state.getCustomer.getCustomerResp.data)
    const paymentByIdData = useSelector((state)=>state.getPayment.getPaymentResp.data)
    const dispatch = useDispatch();
    const [showUpdatePayment,setShowUpdatePayment] = useState(false);

    const savePayment = (obj)=>{
        const newObj = {
            id: paymentByIdData.id,
            payment_type: obj.payment_type ? obj.payment_type : paymentByIdData.payment_type ,
            amount: obj.amount ? obj.amount : paymentByIdData.amount 
        }
        dispatch(updatePayment(newObj))
    }
    
    const PaymentUpdateModal = (props) =>{

        const paymentObj={
         }
        if(!paymentByIdData) return;
        return(
            <Modal {...props}>
                <Modal.Header closeButton>
                <Modal.Title>Update Payment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Payment Type</Form.Label>
                        <Form.Select 
                            type="Text"
                            autoFocus
                            placeholder={paymentByIdData? paymentByIdData.payment_type : null}
                            onChange={(e)=>{paymentObj.payment_type=(e.target.value)}}
                        >
                            <option value="CASH">CASH</option>
                            <option value="CARD">CARD</option>
                            <option value="UPI">UPI</option>
                        </Form.Select>
                        <br />
                        <Form.Label>Amount</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={paymentByIdData? paymentByIdData.amount: null}
                            onChange={(e)=>{paymentObj.amount=(e.target.value)}}
                        /><br />
                        
                    </Form.Group>
                        
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary"  onClick={props.onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={()=>{
                    savePayment(paymentObj);
                    props.onHide();}}>
                    Update
                </Button>
                </Modal.Footer>
            </Modal>
        )
    } 

    return(
        <>  <br />
            <PaymentUpdateModal 
                show={showUpdatePayment}
                onHide={()=>{setShowUpdatePayment(false)}}
            />
            <h3>{customerByIdData.full_name}'s Payments</h3>
            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Payment Type</th>
                        <th>Amount</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        customerByIdData && customerByIdData.payment &&
                        customerByIdData.payment.map((val)=>{
                            return(
                                <tr>
                                    <td>{val.id}</td>
                                    <td>{val.payment_type}</td>
                                    <td>{val.amount}</td>
                                    <td>
                                        <Button variant="success" onClick={()=>{
                                            dispatch(getPayment(val.id));
                                            setShowUpdatePayment(true);
                                        }}>Edit</Button> &nbsp; &nbsp;
                                        <Button variant="success" onClick={()=>{
                                            dispatch(deletePayment(val.id))
                                        }}>Delete</Button>
                                    </td>
                            
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}

export const AddPaymentModal = (props) =>{
    
    const dispatch = useDispatch();
    const customerByIdData = useSelector((state)=>state.getCustomer.getCustomerResp.data)
    
    const handleAddPayment = (obj)=>{
        const newCust = customerByIdData;
        newCust.payment = customerByIdData.payment? customerByIdData.payment.concat(obj) :[obj];
        dispatch(registerCustomer(newCust));
    }
    const AddPaymentObj={
    }
    return(
        <Modal {...props}>
            <Modal.Header closeButton>
            <Modal.Title>Make Payment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Payment Type</Form.Label>
                    <Form.Select 
                        type="Text"
                        autoFocus
                        placeholder="Payment Type"
                        onChange={(e)=>{AddPaymentObj.payment_type=(e.target.value)}}
                        >
                            <option value="CASH">CASH</option>
                            <option value="CARD">CARD</option>
                            <option value="UPI">UPI</option>
                        </Form.Select>
                    <Form.Label>Amount</Form.Label>
                    <Form.Control
                        type="Text"
                        placeholder="Amount"
                        onChange={(e)=>{
                            AddPaymentObj.amount=(e.target.value);
                        }}
                    /><br />
                </Form.Group>
                
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary"  onClick={props.onHide}>
                Close
            </Button>
            <Button variant="primary" onClick={()=>{
                handleAddPayment(AddPaymentObj);
                props.onHide()}}>
             Payment Submit
            </Button>
            </Modal.Footer>
        </Modal>
    )
}