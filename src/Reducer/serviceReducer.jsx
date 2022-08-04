export const registerService =  (
    state={
      registerServiceResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "REGISTER_SERVICE":
            return({
              registerServiceResp:action.payload
            })
          case "REGISTER_SERVICE_ERR":
          return({
            registerServiceResp:action.payload
          })
          case "RESET":
          return({
            registerServiceResp:""
          })
          default:
            return state;
        }
};

export const getService=  (state={
getServiceResp:""
}, action) => {
    switch (action.type) {
    case "GET_SERVICE":
        return ({
        getServiceResp: action.payload
        });
    case "GET_SERVICE_ERR":
        return({
        getServiceResp:action.payload
        })
        case "RESET":
        return({
        getServiceResp:""
        })
    default:
        return state;
    }
};

export const getAllService=  (state={
    getAllServiceResp:""
    }, action) => {
        switch (action.type) {
        case "GET_ALL_SERVICE":
            return ({
                getAllServiceResp: action.payload
            });
        case "GET_ALL_SERVICE_ERR":
            return({
                getAllServiceResp:action.payload
            })
            case "RESET":
            return({
                getAllServiceResp:""
            })
        default:
            return state;
        }
    };   

export const updateService =  (state={
updateServiceResp:""
}, action) => {
    switch (action.type) {
    case "UPDATE_SERVICE":
        return ({
        updateServiceResp: action.payload
        });
    case "UPDATE_SERVICE_ERR":
        return({
        updateServiceResp:action.payload
        })
        case "RESET":
        return({
        updateServiceResp:""
        })
    default:
        return state;
    }
};

export const deleteService =  (state={
deleteServiceResp:""
}, action) => {
    switch (action.type) {
    case "DELETE_SERVICE":
        return ({
        deleteServiceResp: action.payload
        });
    case "DELETE_SERVICE_ERR":
        return({
        deleteServiceResp:action.payload
        })
        case "RESET":
        return({
        deleteServiceResp:""
        })
    default:
        return state;
    }
};

