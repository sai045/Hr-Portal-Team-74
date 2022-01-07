import React, { Component } from 'react';
import './Home.css';
class Navbar extends React.Component {
    render() { 
        return (
            
       <div className='home'>
        <nav class="navbar navbar-expand-lg navbar-light bg-light" >
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <h1>HR Portal</h1>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse nav-button" id="navbarNavDropdown"className='nav-button' >
              <ul class="navbar-nav mx-5" >
              <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-1" type="search" placeholder="Search for employees" aria-label="Search"></input>
      <button class="btn btn-outline-success my-0 my-sm-0" type="submit">Search </button>
    </form>
              <li class='navbar-text' className="nav-text">
                User Name
            </li>
                <li class="nav-item dropdown">
                  <img
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    src='https://tse1.mm.bing.net/th?id=OIP.8pQGc1uvCGFkeniunEv1rwHaHa&pid=Api&P=0&w=300&h=300'
                    className='nav-pro'
                  >
                  </img>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        Details
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Log Out
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>       
        <div class="col-sm-10 col-md-2 sidebar">
         <ul class="nav nav-sidebar row">
           <li class="active"><a href="#">Home</a></li>
           <li><a href="#">Reports</a></li>
           <li><a href="#">Salary</a></li>
           <li><a href="#">Leave Requests</a></li>
        </ul>
       </div>
        <h1 class="p-4 m-0 text-center">Hey,User Name</h1>
        <p class="text-center">Human Resource Manager</p>
        <div className='mid'>
        <div class="text-center">
        <button className='icons'>
           <img src='http://cdn.onlinewebfonts.com/svg/img_233159.svg' class="img-rounded " className='symbols'></img>
           <div class="p-2  text-center">
             DashBoard
           </div>
        </button>
        <button className='icons'>
           <img src='https://cdn.onlinewebfonts.com/svg/img_549436.png' class="img-rounded" className='symbols'></img>
           <div class="p-2  text-center">
               Employees 
           </div>
        </button>
        <button className='icons'>
           <img src='http://cdn.onlinewebfonts.com/svg/img_189017.png' class="img-rounded" className='symbols'></img>
           <div class="p-2  text-center">
               Schedule
           </div>
        </button>
        <div class="text-center">
        <button className='icons'>
           <img src='https://cdn4.iconfinder.com/data/icons/startup-business-10/70/tour__flight__travel__briefcase__bag-512.png' class="img-rounded p-4" className='small-symbols'></img>
           <div class="p-2  text-center">
             Travel Requests
           </div>
        </button>
        <button className='icons'>
           <img src='https://www.pinclipart.com/picdir/middle/40-402851_job-application-icon-clipart.png' class="img-rounded" className='symbols'></img>
           <div class="p-2  text-center">
             Applications
           </div>
        </button>
        <button className='icons'>
           <img src='https://cdn.onlinewebfonts.com/svg/img_456677.png' class="img-rounded p-4" className='small-symbols'></img>
           <div class="p-2  text-center">
             Announcements
           </div>
        </button>
        </div>
        </div>
        </div>        
     </div>
        );
    }
}
export default Navbar;