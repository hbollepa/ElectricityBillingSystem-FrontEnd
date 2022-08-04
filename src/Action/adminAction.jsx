import axios from 'axios';
import constant from '../Components/constants.json';

export const getAdminById = (id)=> async dispatch=> {
  axios
    .get(constant.API_URL+'admin/'+id)
    .then((res)=>{
      dispatch({
        type:"GET_ADMIN",
        payload:res
      })

    })
    .catch((err)=>{
      dispatch({
        type:"GET_ADMIN_ERR",
        payload:err.response
      })
    });
};

export const getAdminByEmail = (id)=> async dispatch=> {
    axios
      .get(constant.API_URL+'admin-by-email/'+id)
      .then((res)=>{
        dispatch({
          type:"GET_ADMIN_BY_EMAIL",
          payload:res
        })
  
      })
      .catch((err)=>{
        dispatch({
          type:"GET_ADMIN_BY_EMAIL_ERR",
          payload:err.response
        })
      });
};
  
export const registerAdmin = (obj)=> async dispatch=> {
  await axios
    .post(constant.API_URL+"admin/", obj)
  .then((resp)=>{
    dispatch({
      type:"REGISTER_ADMIN",
      payload:resp.data
    })
    alert("registered please signin")
  })
  .catch((err)=>{
    dispatch({
      type:"REGISTER_ADMIN_ERR",
      payload:err.response
    })
    alert("registeration failed")
  });  
};

export const updateAdmin = (obj)=> async dispatch=> {
  await axios
    .put(constant.API_URL+"admin/"+obj.id, obj)
  .then((resp)=>{
    dispatch({
      type:"UPDATE_ADMIN",
      payload:resp.data
    })
    alert("updated");
  })
  .catch((err)=>{
    dispatch({
      type:"UPDATE_ADMIN_ERR",
      payload:err.response
    })
    alert("failed to upload");
  });  
};

export const deleteAdmin = (id)=> async dispatch=> {
  await axios
    .delete(constant.API_URL+"admin/"+id,)
  .then((resp)=>{
    dispatch({
      type:"DELETE_ADMIN",
      payload:resp.data
    })
    alert("delted");
  })
  .catch((err)=>{
    dispatch({
      type:"DELETE_ADMIN_ERR",
      payload:err.response
    })
    alert("failed to delete")
  });  
};
 