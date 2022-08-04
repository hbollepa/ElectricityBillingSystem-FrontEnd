import axios from 'axios';
import constant from '../Components/constants.json';

export const getLogin = (email)=> async dispatch=> {
  axios
    .get(constant.API_URL+'login/'+email)
    .then((res)=>{
      dispatch({
        type:"GET_LOGIN",
        payload:res
      })

    })
    .catch((err)=>{
      dispatch({
        type:"GET_LOGIN_ERR",
        payload:err.response
      })
    });
};

export const registerLogin = (obj)=> async dispatch=> {
  await axios
    .post(constant.API_URL+"login/", obj)
  .then((resp)=>{
    dispatch({
      type:"REGISTER_LOGIN",
      payload:resp.data
    })
  })
  .catch((err)=>{
    dispatch({
      type:"REGISTER_LOGIN_ERR",
      payload:err.response
    })
    alert("registeration failed")
  });  
};

export const updateLogin = (obj)=> async dispatch=> {
  await axios
    .put(constant.API_URL+"login/"+obj.email, obj)
  .then((resp)=>{
    dispatch({
      type:"UPDATE_LOGIN",
      payload:resp.data
    })
  })
  .catch((err)=>{
    dispatch({
      type:"UPDATE_LOGIN_ERR",
      payload:err.response
    })
  });  
};

export const deleteLogin = (id)=> async dispatch=> {
  await axios
    .delete(constant.API_URL+"login/"+id,)
  .then((resp)=>{
    dispatch({
      type:"DELETE_LOGIN",
      payload:resp.data
    })
    alert("delted");
  })
  .catch((err)=>{
    dispatch({
      type:"DELETE_LOGIN_ERR",
      payload:err.response
    })
    alert("failed to delete")
  });  
};
 
export const logout = ()=> async dispatch=> {
    dispatch({
      type:"RESET",
      payload:""
    })
  };