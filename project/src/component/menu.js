import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';


import './menu.css'
import NavDropdown from 'react-bootstrap/NavDropdown'
function mapStateToProps(state) {
    return { user: state.user }
  }

export default connect(mapStateToProps, null)(
 function Menu(props) {
     const {user}= props
useEffect(()=>{
    console.log(user);
},[])

    return (
        <>

         <nav className={"navbar navbar-expand-lg navbar-light bg-light"}>
         
                <Link to="/login" class="navbar-brand">בית<span class="sr-only">(current)</span></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className={"collapse navbar-collapse"} id="navbarNavDropdown">
                    <ul class="navbar-nav">
                    <li className={"nav-item"}>
                            <Link to="/About" className={"nav-link"}>אודות</Link>

                        </li>
                        <NavDropdown title="מוצרים" id="basic-nav-dropdown">
                            <Link to="/pCrib" className={"dropdown-item"} >מיטות תינוק</Link>
                            <Link to="/pCarriage" className={"dropdown-item"} >עגלות וטיולונים</Link>
                            <Link to="/pFood" className={"dropdown-item"} >אביזרי האכלה</Link>
                            <Link to="/pClothing" className={"dropdown-item"} >ביגוד ומצעים</Link>

                        </NavDropdown>
                        <li className={"nav-item"}>
                            <Link to="/Cart" className={"nav-link"}>עגלת קניות</Link>
                        </li>
                        
                        <h4 className="nameTag">שלום {user.name}</h4>
                    </ul>

                </div>
            </nav>


            <footer className={"page-footer font-small blue pt-1"}>
                <div class="footer-copyright text-center py-1"><h6>© Aviya Ben-Tzur</h6>
                    GMAIL: aviyat123@gmail.com
                </div>

            </footer>

        </>


    )


})



