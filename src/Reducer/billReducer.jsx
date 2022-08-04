export const registerBill =  (
    state={
      registerBillResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "REGISTER_BILL":
            return({
              registerBillResp:action.payload
            })
          case "REGISTER_BILL_ERR":
          return({
            registerBillResp:action.payload
          })
          case "RESET":
          return({
            registerBillResp:""
          })
          default:
            return state;
        }
};

export const getBill=  (state={
getBillResp:""
}, action) => {
    switch (action.type) {
    case "GET_BILL":
        return ({
        getBillResp: action.payload
        });
    case "GET_BILL_ERR":
        return({
        getBillResp:action.payload
        })
        case "RESET":
        return({
        getBillResp:""
        })
    default:
        return state;
    }
};

export const getAllBill=  (state={
    getAllBillResp:""
    }, action) => {
        switch (action.type) {
        case "GET_ALL_BILL":
            return ({
                getAllBillResp: action.payload
            });
        case "GET_ALL_BILL_ERR":
            return({
                getAllBillResp:action.payload
            })
            case "RESET":
            return({
                getAllBillResp:""
            })
        default:
            return state;
        }
    };   

export const updateBill =  (state={
updateBillResp:""
}, action) => {
    switch (action.type) {
    case "UPDATE_BILL":
        return ({
        updateBillResp: action.payload
        });
    case "UPDATE_BILL_ERR":
        return({
        updateBillResp:action.payload
        })
        case "RESET":
        return({
        updateBillResp:""
        })
    default:
        return state;
    }
};

export const deleteBill =  (state={
deleteBillResp:""
}, action) => {
    switch (action.type) {
    case "DELETE_BILL":
        return ({
        deleteBillResp: action.payload
        });
    case "DELETE_BILL_ERR":
        return({
        deleteBillResp:action.payload
        })
        case "RESET":
        return({
        deleteBillResp:""
        })
    default:
        return state;
    }
};

