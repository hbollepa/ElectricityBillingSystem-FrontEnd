export const registerAdmin =  (
    state={
      registerAdminResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "REGISTER_ADMIN":
            return({
              registerAdminResp:action.payload
            })
          case "REGISTER_ADMIN_ERR":
          return({
            registerAdminResp:action.payload
          })
          case "RESET":
          return({
            registerAdminResp:""
          })
          default:
            return state;
        }
};

export const getAdminById =  (state={
getAdminResp:""
}, action) => {
    switch (action.type) {
    case "GET_ADMIN":
        return ({
        getAdminResp: action.payload
        });
    case "GET_ADMIN_ERR":
        return({
        getAdminResp:action.payload
        })
        case "RESET":
        return({
        getAdminResp:""
        })
    default:
        return state;
    }
};

export const getAdminByEmail =  (state={
    getAdminByEmailResp:""
}, action) => {
    switch (action.type) {
    case "GET_ADMIN_BY_EMAIL":
        return ({
        getAdminByEmailResp: action.payload
        });
    case "GET_ADMIN_BY_EMAIL_ERR":
        return({
            getAdminByEmailResp:action.payload
        })
        case "RESET":
        return({
            getAdminByEmailResp:""
        })
    default:
        return state;
    }
};

export const updateAdmin =  (state={
updateAdminResp:""
}, action) => {
    switch (action.type) {
    case "UPDATE_ADMIN":
        return ({
        updateAdminResp: action.payload
        });
    case "UPDATE_ADMIN_ERR":
        return({
        updateAdminResp:action.payload
        })
        case "RESET":
        return({
        updateAdminResp:""
        })
    default:
        return state;
    }
};

export const deleteAdmin =  (state={
deleteAdminResp:""
}, action) => {
    switch (action.type) {
    case "DELETE_ADMIN":
        return ({
        deleteAdminResp: action.payload
        });
    case "DELETE_ADMIN_ERR":
        return({
        deleteAdminResp:action.payload
        })
        case "RESET":
        return({
        deleteAdminResp:""
        })
    default:
        return state;
    }
};

