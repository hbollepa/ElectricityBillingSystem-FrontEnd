import axios from 'axios';
import constant from '../Components/constants.json';

export const getService = (id)=> async dispatch=> {
  axios
    .get(constant.API_URL+'service/'+id)
    .then((res)=>{
      dispatch({
        type:"GET_SERVICE",
        payload:res
      })

    })
    .catch((err)=>{
      dispatch({
        type:"GET_SERVICE_ERR",
        payload:err.response
      })
    });
};

export const getAllService = ()=> async dispatch=> {
    axios
      .get(constant.API_URL+'service/')
      .then((res)=>{
        dispatch({
          type:"GET_ALL_SERVICE",
          payload:res
        })
  
      })
      .catch((err)=>{
        dispatch({
          type:"GET_ALL_SERVICE_ERR",
          payload:err.response
        })
      });
  };

export const registerService = (obj)=> async dispatch=> {
  await axios
    .post(constant.API_URL+"service/", obj)
  .then((resp)=>{
    dispatch({
      type:"REGISTER_SERVICE",
      payload:resp.data
    })
    alert("bill Added")
  })
  .catch((err)=>{
    dispatch({
      type:"REGISTER_SERVICE_ERR",
      payload:err.response
    })
    alert("Adding failed")
  });  
};

export const updateService = (obj)=> async dispatch=> {
  await axios
    .put(constant.API_URL+"service/"+obj.id, obj)
  .then((resp)=>{
    dispatch({
      type:"UPDATE_SERVICE",
      payload:resp.data
    })
  })
  .catch((err)=>{
    dispatch({
      type:"UPDATE_SERVICE_ERR",
      payload:err.response
    })
  });  
};

export const deleteService = (id)=> async dispatch=> {
  await axios
    .delete(constant.API_URL+"service/"+id,)
  .then((resp)=>{
    dispatch({
      type:"DELETE_SERVICE",
      payload:resp.data
    })
    alert("delted");
  })
  .catch((err)=>{
    dispatch({
      type:"DELETE_SERVICE_ERR",
      payload:err.response
    })
    alert("failed to delete")
  });  
};