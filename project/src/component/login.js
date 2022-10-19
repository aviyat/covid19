import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router';
import { loginUser } from './service';
import { connect } from 'react-redux';
import { updateUser } from './store/action'
import Menu from '../component/menu';
import './login.css';

function mapStateToProps(state) {
    return {
        basket: state.basket,
        userState: state.user
    }
}
const mapDispatcToProps = (dispatch) => ({

    updateUser: (user) => dispatch(updateUser(user)),

})

export default connect(mapStateToProps, mapDispatcToProps)(withRouter(function Login(props) {
    const { updateUser, userState } = props
   
    const nameRef = useRef()
    const passwordRef = useRef()
    const { history } = props;


    function login(e) {
        e.preventDefault();
        if (passwordRef.current.value !== '' && nameRef.current.value !== '')
            loginUser({ name: nameRef.current.value, password: passwordRef.current.value }).
                then(user => {
                    console.log(user.data); history.push('/about');
                    updateUser(user.data.myUser)
                }).catch(err => alert("משתמש לא קיים במערכת"))
        else alert("הכנס נתונים")
    }



    return (
        <>
            {Object.keys(userState).length == 0 ? "" : <Menu></Menu>}
            <div className={"allLogin"}>
                <h1 className={"nameSite"}>MY BABY</h1>
                <h2>לכניסה לאתר, הכנס/י או הרשם/י</h2>
                <div className="loginCard col-md-6 login-form-2">
                    <h3 className="h3" >כניסת משתמש</h3>
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control" ref={nameRef} placeholder="שם משתמש" />
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" ref={passwordRef} placeholder="סיסמא" />
                        </div>
                        <div class="form-group">
                            <input type="submit" onClick={(e) => { login(e) }} className="btnSubmit" value="הכנס" />

                        </div>
                        <br></br>

                        <Link to="/signUp" onClick={(e) => { history.push('/signUp') }} className={"nav-link"}>משתמש חדש הקש כאן</Link>

                    </form>
                </div>
                <br></br><br></br>
                <br></br><br></br>
                <br></br><br></br>
                <br></br><br></br>
                <br></br><br></br>
                <br></br><br></br>
            </div>

        </>
    )
}))