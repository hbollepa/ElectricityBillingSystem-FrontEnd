import { combineReducers } from "redux";

import {
    registerLogin,
    getLogin,
    updateLogin,
    deleteLogin
} from "./loginReducer";

import{
  registerAdmin,
  getAdminById,
  getAdminByEmail,
  updateAdmin,
  deleteAdmin
} from "./adminreducer";

import{
  registerCustomer,
  getCustomer,
  getAllCustomer,
  updateCustomer,
  deleteCustomer
}  from "./customerReducer";

import{
  registerBill,
  getBill,
  getAllBill,
  updateBill,
  deleteBill
} from "./billReducer";

import{
  registerPayment,
  getPayment,
  getAllPayment,
  updatePayment,
  deletePayment
} from "./paymentReducer"

const rootReducer = combineReducers({
    
  registerLogin,
  getLogin,
  updateLogin,
  deleteLogin,
  registerAdmin,
  getAdminById,
  getAdminByEmail,
  updateAdmin,
  deleteAdmin,
  registerCustomer,
  getCustomer,
  getAllCustomer,
  updateCustomer,
  deleteCustomer,
  registerBill,
  getBill,
  getAllBill,
  updateBill,
  deleteBill,
  registerPayment,
  getPayment,
  getAllPayment,
  updatePayment,
  deletePayment
});

export default rootReducer;