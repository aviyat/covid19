import React, { useState, useRef } from 'react';
import { createUser } from './service';
import { connect } from 'react-redux';
import { updateUser } from './store/action';
import Menu from '../component/menu';

import { withRouter } from 'react-router-dom';

function mapStateToProps(state) {
    return {
       
        userState: state.user
    }
}

const mapDispatcToProps = (dispatch) => ({

    updateUser: (user) => dispatch(updateUser(user)),

})

export default withRouter(connect(mapStateToProps, mapDispatcToProps)(function SignUp(props) {
    const { updateUser, userState } = props
    // const [name, setName] = useState('');
    // const [password, setPassword] = useState('');
    const nameRef = useRef()
    const passwordRef = useRef()
    // const { history } = props;


    function sign(e) {
        e.preventDefault();
        let obj = { name: nameRef.current.value, password: passwordRef.current.value }
        updateUser(obj)
        if (passwordRef.current.value !== '' && nameRef.current.value !== '') {
            createUser({ name: nameRef.current.value, password: passwordRef.current.value })
           
        }
        else console.log("הכנס נתונים")
    }

    return (
        <>
            {Object.keys(userState).length == 0 ? "" : <Menu></Menu>}
            <div className={"allLogin"}>
               
                <br></br> <br></br> <br></br><br></br>
                <h2> הרשם/י לאתר:</h2>

                <br></br>
                <div class="loginCard col-md-6 login-form-1">

                    <h3>הרשמה</h3>
                    <form>
                        <div class="form-group">
                            <input type="text" ref={nameRef} class="form-control" placeholder="הכנס שם משתמש" />
                        </div>
                        <div class="form-group">
                            <input type="password" ref={passwordRef} class="form-control" placeholder="הכנס סיסמא" />
                        </div>
                       
                        <div class="form-group">
                            <input type="submit" className="btnSubmit" value="התחבר" onClick={(e) => { sign(e) }} />
                        </div>
                    </form>
                </div>
              
            </div>
        </>
    )
}
)
)