  export const registerLogin =  (
    state={
      registerLoginResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "REGISTER_LOGIN":
            return({
              registerLoginResp:action.payload
            })
          case "REGISTER_LOGIN_ERR":
          return({
            registerLoginResp:action.payload
          })
          case "RESET":
          return({
            registerLoginResp:""
          })
          default:
            return state;
        }
  };

  export const getLogin =  (state={
    getLoginResp:""
  }, action) => {
      switch (action.type) {
        case "GET_LOGIN":
          return ({
            getLoginResp: action.payload
          });
        case "GET_LOGIN_ERR":
          return({
            getLoginResp:action.payload
          })
          case "RESET":
          return({
            getLoginResp:""
          })
        default:
          return state;
      }
  };

  export const updateLogin =  (state={
    updateLoginResp:""
  }, action) => {
      switch (action.type) {
        case "UPDATE_LOGIN":
          return ({
            updateLoginResp: action.payload
          });
        case "UPDATE_LOGIN_ERR":
          return({
            updateLoginResp:action.payload
          })
          case "RESET":
          return({
            updateLoginResp:""
          })
        default:
          return state;
      }
  };

  export const deleteLogin =  (state={
    deleteLoginResp:""
  }, action) => {
      switch (action.type) {
        case "DELETE_LOGIN":
          return ({
            deleteLoginResp: action.payload
          });
        case "DELETE_LOGIN_ERR":
          return({
            deleteLoginResp:action.payload
          })
          case "RESET":
          return({
            deleteLoginResp:""
          })
        default:
          return state;
      }
  };
