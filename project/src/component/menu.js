import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import NavDropdown from 'react-bootstrap/NavDropdown'
// import member from '../../../node_project/models/member';

function mapStateToProps(state) {
    return { member: state.member }
  }

export default connect(mapStateToProps, null)(
 function Menu(props) {
     const {member}= props
useEffect(()=>{
    console.log(member);
},[])

    return (
        <>

         <nav className={"navbar navbar-expand-lg navbar-light bg-light"}>
         <div className={"collapse navbar-collapse"} id="navbarNavDropdown">
                    <ul class="navbar-nav">
                   
                     
                        <li className={"nav-item"}>
                            <Link to="/addMember" className={"nav-link"}>addMember</Link>
                        </li>
                        
                        <h4 >שלום </h4>
                    </ul>

                </div>
            </nav>

        
                       
         

           
        </>


    )


// })


    })
