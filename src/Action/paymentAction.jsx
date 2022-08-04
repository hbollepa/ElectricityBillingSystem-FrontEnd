import axios from 'axios';
import constant from '../Components/constants.json';

export const getPayment = (id)=> async dispatch=> {
  axios
    .get(constant.API_URL+'payment/'+id)
    .then((res)=>{
      dispatch({
        type:"GET_PAYMENT",
        payload:res
      })

    })
    .catch((err)=>{
      dispatch({
        type:"GET_PAYMENT_ERR",
        payload:err.response
      })
    });
};

export const getAllPayment = ()=> async dispatch=> {
    axios
      .get(constant.API_URL+'payment/')
      .then((res)=>{
        dispatch({
          type:"GET_ALL_PAYMENT",
          payload:res
        })
  
      })
      .catch((err)=>{
        dispatch({
          type:"GET_ALL_PAYMENT_ERR",
          payload:err.response
        })
      });
  };

export const registerPayment = (obj)=> async dispatch=> {
  await axios
    .post(constant.API_URL+"payment/", obj)
  .then((resp)=>{
    dispatch({
      type:"REGISTER_PAYMENT",
      payload:resp.data
    })
    alert("bill Added")
  })
  .catch((err)=>{
    dispatch({
      type:"REGISTER_PAYMENT_ERR",
      payload:err.response
    })
    alert("Adding failed")
  });  
};

export const updatePayment = (obj)=> async dispatch=> {
  await axios
    .put(constant.API_URL+"payment/"+obj.id, obj)
  .then((resp)=>{
    dispatch({
      type:"UPDATE_PAYMENT",
      payload:resp.data
    })
  })
  .catch((err)=>{
    dispatch({
      type:"UPDATE_PAYMENT_ERR",
      payload:err.response
    })
  });  
};

export const deletePayment = (id)=> async dispatch=> {
  await axios
    .delete(constant.API_URL+"payment/"+id,)
  .then((resp)=>{
    dispatch({
      type:"DELETE_PAYMENT",
      payload:resp.data
    })
    alert("delted");
  })
  .catch((err)=>{
    dispatch({
      type:"DELETE_PAYMENT_ERR",
      payload:err.response
    })
    alert("failed to delete")
  });  
};