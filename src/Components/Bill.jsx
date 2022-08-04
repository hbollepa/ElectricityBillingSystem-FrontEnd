import React, { useState, useEffect, useRef} from "react"
import { useDispatch, useSelector } from "react-redux";
import  { useNavigate } from 'react-router-dom'
import { Navbar,Container,Nav,Dropdown,Modal,Button,Form,Table,Row } from 'react-bootstrap';
import { updateCustomer } from "../Action/customerAction";
import {deleteBill,getBill,updateBill} from "../Action/billAction"

export const BillTable = () =>{
    const dispatch = useDispatch();
    const customerByIdData = useSelector((state)=>state.getCustomer.getCustomerResp.data)
    const billByIdData = useSelector((state)=>state.getBill.getBillResp.data)

    const [showUpdateBill,setShowUpdateBill] = useState(false);

    const saveBill = (obj)=>{
        const newObj = {
            id: billByIdData.id,
            units_consumed: obj.units_consumed ? obj.units_consumed : billByIdData.units_consumed ,
            amount: obj.amount ? obj.amount * (obj.units_consumed ? obj.units_consumed : billByIdData.units_consumed) : billByIdData.amount ,
            due_date: obj.due_date ? obj.due_date : billByIdData.due_date ,
            start_date: obj.start_date ? obj.start_date : billByIdData.start_date ,
            end_date: obj.end_date ? obj.end_date : billByIdData.end_date 
        }
        dispatch(updateBill(newObj))
    }
    
    const BillUpdateModal = (props) =>{

        const billObj={
         }
        if(!billByIdData) return;
        return(
            <Modal {...props}>
                <Modal.Header closeButton>
                <Modal.Title>Update Bill data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Units Consumed</Form.Label>
                        <Form.Control
                            type="Text"
                            autoFocus
                            placeholder={billByIdData? billByIdData.units_consumed : null}
                            onChange={(e)=>{billObj.units_consumed=(e.target.value)}}
                        /><br />
                        <Form.Label>Price Per Unit</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={billByIdData? (billByIdData.amount)/billByIdData.units_consumed : null}
                            onChange={(e)=>{billObj.amount=(e.target.value)}}
                        /><br />
                        <Form.Label>Due Date</Form.Label>
                        <Form.Control type="date"
                            onChange={(e)=>{billObj.due_date=(e.target.value)}}
                        />
                        <Form.Label>Start Date</Form.Label>
                        <Form.Control type="date" 
                            onChange={(e)=>{billObj.start_date=(e.target.value)}} />
                        <Form.Label>End Date</Form.Label>
                        <Form.Control type="date" 
                            onChange={(e)=>{billObj.end_date=(e.target.value)}} />
                        </Form.Group>
                        
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary"  onClick={props.onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={()=>{saveBill(billObj);props.onHide();}}>
                    Update
                </Button>
                </Modal.Footer>
            </Modal>
        )
    }  
    
    return(
        <>
        <BillUpdateModal 
                show={showUpdateBill}
                onHide={()=>{setShowUpdateBill(false)}}
            />
        <h3>{customerByIdData?customerByIdData.full_name:null}'s Bills</h3>
        <Table>
            <thead>
                <tr>
                    <th> Id</th>
                    <th> Units Consumed</th>
                    <th> Amount</th>
                    <th> Due Date</th>
                    <th> Start Date</th>
                    <th> End Date</th>
                    <th> Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    customerByIdData && customerByIdData.bill && 
                    customerByIdData.bill.map((val)=>{
                        return(<tr>
                            <td>{val.id}</td>
                            <td>{val.units_consumed}</td>
                            <td>{val.amount}</td>
                            <td>{val.due_date}</td>
                            <td>{val.start_date}</td>
                            <td>{val.end_date}</td>
                            <td>
                                <Button variant="success" onClick={()=>{
                                    dispatch(getBill(val.id));
                                    setShowUpdateBill(true);
                                }}>Edit</Button> &nbsp; &nbsp;
                                <Button variant="success" onClick={()=>{dispatch(deleteBill(val.id))}}>Delete</Button>
                            </td>
                        </tr>)
                    })
                }
            </tbody>
        </Table>
        </>
    )
}

export const BillTableCustomer = () =>{
    const dispatch = useDispatch();
    const customerByIdData = useSelector((state)=>state.getCustomer.getCustomerResp.data)
    const billByIdData = useSelector((state)=>state.getBill.getBillResp.data)

    const [showUpdateBill,setShowUpdateBill] = useState(false);

    
    
    return(
        <>
        <br />
        <h3>{customerByIdData?customerByIdData.full_name:null}'s Bills</h3>
        <Table>
            <thead>
                <tr>
                    <th> Id</th>
                    <th> Units Consumed</th>
                    <th> Amount</th>
                    <th> Due Date</th>
                    <th> Start Date</th>
                    <th> End Date</th>
                </tr>
            </thead>
            <tbody>
                {
                    customerByIdData && customerByIdData.bill && 
                    customerByIdData.bill.map((val)=>{
                        return(<tr>
                            <td>{val.id}</td>
                            <td>{val.units_consumed}</td>
                            <td>{val.amount}</td>
                            <td>{val.due_date}</td>
                            <td>{val.start_date}</td>
                            <td>{val.end_date}</td>
                        </tr>)
                    })
                }
            </tbody>
        </Table>
        </>
    )
}

export const AddBillModal = (props) =>{
    
    const dispatch = useDispatch();
    const customerByIdData = useSelector((state)=>state.getCustomer.getCustomerResp.data)
    
    const handleAddBill = (obj)=>{
        obj.amount=obj.amount* obj.units_consumed;
        const newCust = customerByIdData;
        newCust.bill = customerByIdData.bill? customerByIdData.bill.concat(obj) :[obj];
        dispatch(updateCustomer(newCust));
    }
    const AddBillObj={
    }
    return(
        <Modal {...props}>
            <Modal.Header closeButton>
            <Modal.Title>Add Bill</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Units Consumed</Form.Label>
                    <Form.Control
                        type="Text"
                        autoFocus
                        placeholder="Units Consumed"
                        onChange={(e)=>{AddBillObj.units_consumed=(e.target.value)}}
                    /><br />
                    <Form.Label>Price Per Unit</Form.Label>
                    <Form.Control
                        type="Text"
                        placeholder="Price Per Unit"
                        onChange={(e)=>{
                            AddBillObj.amount=(e.target.value);
                        }}
                    /><br />
                    <Form.Label>Due Date</Form.Label>
                    <Form.Control type="date" 
                         onChange={(e)=>{AddBillObj.due_date=(e.target.value)}}
                    />
                    <Form.Label>Start Date</Form.Label>
                    <Form.Control type="date" onChange={(e)=>{AddBillObj.start_date=(e.target.value)}} />
                    <Form.Label>End Date</Form.Label>
                    <Form.Control type="date" onChange={(e)=>{AddBillObj.end_date=(e.target.value)}} />
                </Form.Group>
                
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary"  onClick={props.onHide}>
                Close
            </Button>
            <Button variant="primary" onClick={()=>{
                handleAddBill(AddBillObj);
                props.onHide()}}>
                Add Bill
            </Button>
            </Modal.Footer>
        </Modal>
    )
}