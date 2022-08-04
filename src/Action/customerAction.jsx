import axios from 'axios';
import constant from '../Components/constants.json';

export const getCustomer = (id)=> async dispatch=> {
  axios
    .get(constant.API_URL+'customer/'+id)
    .then((res)=>{
      dispatch({
        type:"GET_CUSTOMER",
        payload:res
      })

    })
    .catch((err)=>{
      dispatch({
        type:"GET_CUSTOMER_ERR",
        payload:err.response
      })
    });
};

export const getAllCustomer = ()=> async dispatch=> {
    axios
      .get(constant.API_URL+'customer/')
      .then((res)=>{
        dispatch({
          type:"GET_ALL_CUSTOMER",
          payload:res
        })
  
      })
      .catch((err)=>{
        dispatch({
          type:"GET_ALL_CUSTOMER_ERR",
          payload:err.response
        })
      });
  };

export const registerCustomer = (obj)=> async dispatch=> {
  await axios
    .post(constant.API_URL+"customer/", obj)
  .then((resp)=>{
    dispatch({
      type:"REGISTER_CUSTOMER",
      payload:resp.data
    })
    alert("customer Added")
  })
  .catch((err)=>{
    dispatch({
      type:"REGISTER_CUSTOMER_ERR",
      payload:err.response
    })
    alert("Adding failed")
  });  
};

export const updateCustomer = (obj)=> async dispatch=> {
  await axios
    .put(constant.API_URL+"customer/"+obj.id, obj)
  .then((resp)=>{
    dispatch({
      type:"UPDATE_CUSTOMER",
      payload:resp.data
    })
    alert("updated")
  })
  .catch((err)=>{
    dispatch({
      type:"UPDATE_CUSTOMER_ERR",
      payload:err.response
    })
  });  
};

export const deleteCustomer = (id)=> async dispatch=> {
  await axios
    .delete(constant.API_URL+"customer/"+id,)
  .then((resp)=>{
    dispatch({
      type:"DELETE_CUSTOMER",
      payload:resp.data
    })
    alert("delted");
  })
  .catch((err)=>{
    dispatch({
      type:"DELETE_CUSTOMER_ERR",
      payload:err.response
    })
    alert("failed to delete")
  });  
};