import axios from 'axios';
import constant from '../Components/constants.json';

export const getBill = (id)=> async dispatch=> {
  axios
    .get(constant.API_URL+'billing/'+id)
    .then((res)=>{
      dispatch({
        type:"GET_BILL",
        payload:res
      })

    })
    .catch((err)=>{
      dispatch({
        type:"GET_BILL_ERR",
        payload:err.response
      })
    });
};

export const getAllBill = ()=> async dispatch=> {
    axios
      .get(constant.API_URL+'billing/')
      .then((res)=>{
        dispatch({
          type:"GET_ALL_BILL",
          payload:res
        })
  
      })
      .catch((err)=>{
        dispatch({
          type:"GET_ALL_BILL_ERR",
          payload:err.response
        })
      });
  };

export const registerBill = (obj)=> async dispatch=> {
  await axios
    .post(constant.API_URL+"billing/", obj)
  .then((resp)=>{
    dispatch({
      type:"REGISTER_BILL",
      payload:resp.data
    })
    alert("bill Added")
  })
  .catch((err)=>{
    dispatch({
      type:"REGISTER_BILL_ERR",
      payload:err.response
    })
    alert("Adding failed")
  });  
};

export const updateBill = (obj)=> async dispatch=> {
  await axios
    .put(constant.API_URL+"billing/"+obj.id, obj)
  .then((resp)=>{
    dispatch({
      type:"UPDATE_BILL",
      payload:resp.data
    })
  })
  .catch((err)=>{
    dispatch({
      type:"UPDATE_BILL_ERR",
      payload:err.response
    })
  });  
};

export const deleteBill = (id)=> async dispatch=> {
  await axios
    .delete(constant.API_URL+"billing/"+id,)
  .then((resp)=>{
    dispatch({
      type:"DELETE_BILL",
      payload:resp.data
    })
    alert("delted");
  })
  .catch((err)=>{
    dispatch({
      type:"DELETE_BILL_ERR",
      payload:err.response
    })
    alert("failed to delete")
  });  
};