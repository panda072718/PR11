import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


export default function Navbar({ activeUser }) {
  const [flag, setFlag] = useState(false)

  useEffect(() => {
    const foundUser = JSON.parse(localStorage.getItem('activeuser'))
    if (foundUser) {
      setFlag(true)
    } else {
      setFlag(false)
    }
  }, [activeUser])
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("activeuser");
    navigate("/login");
  }
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark text-white">
      <div class="container-fluid">
        {/* <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}
        <div class="collapse navbar-collapse  d-flex justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class=" ">
              <Link to={"/"} class="navbar-brand nav-link text-white" >Home</Link>
            </li>
            {flag ? <><li class="">
              <Link to={"/student"} class="nav-link text-white" >StudentList</Link>
            </li>
              <li class="nav-item">
                <a href="" className='nav-item nav-link text-white' onClick={handleLogout}>Logout</a>
              </li> </> : <>
              <li class="nav-item">
                <Link to={"/login"} class="nav-link text-white" >Login</Link>
              </li>
              <li class="nav-item"> 
                <Link to={"/signup"} class="nav-link text-white" >Signup</Link>
              </li></>

            }

          </ul>
        </div>
      </div>
    </nav>
  )
}
