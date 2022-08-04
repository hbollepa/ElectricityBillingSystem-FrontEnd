
import React from "react"
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import  { useNavigate } from 'react-router-dom'
import { Navbar,Container,Nav,Dropdown,Form,Col  } from 'react-bootstrap';
import { registerAdmin,getAdminById } from "../Action/adminAction";
import { registerLogin,getLogin } from "../Action/loginAction";
import { getCustomer } from "../Action/customerAction";

const Login = (props) => {
  const dispatch = useDispatch();
  const [nameInput, setNameInput] = useState("");
  const [addressInput, setAddressInput] = useState("");
  const [genderInput, setGenderInput] = useState("");
  const [contactInput, setContactInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [DOBInput, setDOBInput] = useState("");
  const [districtInput, setDistrictInput] = useState("");

  const navigate = useNavigate();
  const [isAdmin,setIsAdmin]= useState(false)
  const registerLoginData = useSelector((state)=>state.registerLogin.registerLoginResp)
  const getLoginData = useSelector((state)=>state.getLogin.getLoginResp)
  const adminByEmailData = useSelector((state)=>state.getAdminByEmail.getAdminByEmailResp.data)

  let [authMode, setAuthMode] = useState("signin")

  const handleSignIn=async()=>{
        dispatch(getLogin(emailInput))
  }

  const handleSignUp = async()=>{
    const rand = 1 + Math.random() * (1000000 - 1)
    const loginObj = {
      id: rand,
      admin_name: nameInput,
      admin_contact: contactInput,
      loginEntity: {
        email: emailInput,
        password: passwordInput,
        role: "ADMIN",
        id: rand
      }
    }
    dispatch(registerAdmin(loginObj))
    setAuthMode("signin")
  }



  useEffect(()=>{
    if(getLoginData.status==200 && getLoginData.data && getLoginData.data.email==emailInput && getLoginData.data.password==passwordInput){
      if(getLoginData.data.role == "ADMIN")  {
        dispatch(getAdminById(getLoginData.data.id))
        navigate('/admin');
      }
      else{
        dispatch(getCustomer(getLoginData.data.id))
        navigate('/customer');
      }
    }
    else if(getLoginData){
        alert("Login failed ")
    }
  },[getLoginData])




  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  if (authMode === "signin") {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Container fluid>
                            <Navbar.Brand href="/">Electricity Billing System <a href="/"></a></Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/login">Login</Nav.Link>
                                
                            </Nav>
                            </Navbar.Collapse>
                            
                        </Container>
                    </Navbar>

        <div className="Auth-form-container shadow-lg p-3  bg-dark bg-body rounded">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign In</h3>
              <div className="text-center">
                Not registered yet?{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                  Sign Up
                </span>
              </div>
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter email"
                  value={emailInput}
                  onChange={(e)=>setEmailInput(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                  value={passwordInput}
                  onChange={(e)=>setPasswordInput(e.target.value)}
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="button" onClick={handleSignIn} className="btn btn-primary">
                  Submit
                </button>
              </div>
              
            </div>
          </form>
        </div>
        </>
    )
  }

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Container fluid>
                            <Navbar.Brand href="/">Electricity Billing System <a href="/"></a></Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/login">Login</Nav.Link>
                                
                            </Nav>
                            </Navbar.Collapse>
                            
                        </Container>
                    </Navbar>
    <div style={{height: '100vh'}}>
        <div className="Auth-form-container">
        <form className="Auth-form">
            <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up</h3>
            <div className="text-center">
                Already registered?{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                Sign In
                </span>
            </div>
            
            <div>
                <div className="form-group mt-3">
                <label>Name</label>
                <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="First Name"
                    value={nameInput}
                    onChange={(e)=>setNameInput(e.target.value)}
                />
                </div>
                <div className="form-group mt-3">
                <label>Contact</label>
                <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="e.g 9192939495"
                    value={contactInput}
                    onChange={(e)=>setContactInput(e.target.value)}
                />
                </div>
                <div className="form-group mt-3">
                <label>Email address</label>
                <input
                    type="email"
                    className="form-control mt-1"
                    placeholder="Email Address"
                    value={emailInput}
                    onChange={(e)=>setEmailInput(e.target.value)}
                />
                </div>
                <div className="form-group mt-3">
                <label>Password</label>
                <input
                    type="password"
                    className="form-control mt-1"
                    placeholder="Password"
                    value={passwordInput}
                    onChange={(e)=>setPasswordInput(e.target.value)}
                />
                </div>
                
            </div>
            <div className="d-grid gap-2 mt-3">
                <button type="button" onClick={handleSignUp}className="btn btn-primary">
                Submit
                </button>
            </div>
            
            </div>
        </form>
        </div>
    </div>
    </>
  )
}

export default  Login;