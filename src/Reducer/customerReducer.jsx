export const registerCustomer =  (
    state={
      registerCustomerResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "REGISTER_CUSTOMER":
            return({
              registerCustomerResp:action.payload
            })
          case "REGISTER_CUSTOMER_ERR":
          return({
            registerCustomerResp:action.payload
          })
          case "RESET":
          return({
            registerCustomerResp:""
          })
          default:
            return state;
        }
};

export const getCustomer=  (state={
getCustomerResp:""
}, action) => {
    switch (action.type) {
    case "GET_CUSTOMER":
        return ({
        getCustomerResp: action.payload
        });
    case "GET_CUSTOMER_ERR":
        return({
        getCustomerResp:action.payload
        })
        case "RESET":
        return({
        getCustomerResp:""
        })
    default:
        return state;
    }
};

export const getAllCustomer=  (state={
    getAllCustomerResp:""
    }, action) => {
        switch (action.type) {
        case "GET_ALL_CUSTOMER":
            return ({
                getAllCustomerResp: action.payload
            });
        case "GET_ALL_CUSTOMER_ERR":
            return({
                getAllCustomerResp:action.payload
            })
            case "RESET":
            return({
                getAllCustomerResp:""
            })
        default:
            return state;
        }
    };   

export const updateCustomer =  (state={
updateCustomerResp:""
}, action) => {
    switch (action.type) {
    case "UPDATE_CUSTOMER":
        return ({
        updateCustomerResp: action.payload
        });
    case "UPDATE_CUSTOMER_ERR":
        return({
        updateCustomerResp:action.payload
        })
        case "RESET":
        return({
        updateCustomerResp:""
        })
    default:
        return state;
    }
};

export const deleteCustomer =  (state={
deleteCustomerResp:""
}, action) => {
    switch (action.type) {
    case "DELETE_CUSTOMER":
        return ({
        deleteCustomerResp: action.payload
        });
    case "DELETE_CUSTOMER_ERR":
        return({
        deleteCustomerResp:action.payload
        })
        case "RESET":
        return({
        deleteCustomerResp:""
        })
    default:
        return state;
    }
};

