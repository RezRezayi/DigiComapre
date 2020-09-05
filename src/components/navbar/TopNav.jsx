import React from 'react';



const TopNav = () => {
    return (  

        <section id="topnavbar">

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
                <img src="img/logo.jpg" className="logo-img" />
            </a>
            
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <form
                className="form-inline d-flex justify-content-center md-form form-sm active-purple active-purple-2 mt-2 search-box">
                <i className="fas fa-search" aria-hidden="true"></i>
                <input className="form-control form-control-sm ml-3 w-75" type="text"
                    placeholder="جست و جو در دیجی کالا..." aria-label="Search"/>
            </form>
              </div>
            </div>
            <div className="login-container">
                
                <button type="button" className="btn btn-primary text-center">
               <p>
               <i className="fa fa-user" aria-hidden="true"></i>
                   ورود به حساب کاربری</p> 
                </button>| <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            </div>
          </nav>


    </section>

    );
}
 
export default TopNav;