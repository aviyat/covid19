import React, { useState, useRef } from 'react';
import { createMember } from './service';
import { connect } from 'react-redux';
import { updateMember } from './store/action';
import { addMember } from './store/action';
import Menu from './menu';
import axios from 'axios'


import { withRouter } from 'react-router-dom';
// import member from '../../../WeatherProject/models/member';

function mapStateToProps(state) {
    return {
       
        memberState: state.member
    }
}

const mapDispatcToProps = (dispatch) => ({

    updateMember: (member) => dispatch(createMember(member)),

})



 



export default withRouter(connect(mapStateToProps, mapDispatcToProps)(function AddMember(props) {
    const {url,setUrl}=useState();
    const {memberName,setMemberName}=useState();
    const {id,setId}=useState();
    const {adress,setAdress}=useState();
    const {bornDate,setBornDate}=useState();
    const {phone,setPhone}=useState();
    const {mobilePhone,setMobilePhone}=useState();
    const { updateMember, memberState } = props
     const { history } = props;


    function AddMember(e) {
        e.preventDefault();
         axios.post('http://localhost:3500/addMember',{
                        url: url,
                        memberName: memberName,
                        id:id,
                        adress:adress,
                        bornDate:bornDate,
                        phone:phone,
                        mobilePhone:mobilePhone,
                       

                    });
                    // history.push("/");
    }

    return (
        <>
            <div>
//             <form onSubmit={ AddMember }>
//                 <div className="field">
//                     <label className="label">Title</label>
//                     <input 
                        className="input"
                        type="text"
                        placeholder="url"
                        value={ url }
                        onChange={ (e) => setUrl(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <label className="label">memberName</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="memberName"
                        value={ memberName }
                        onChange={ (e) => setMemberName(e.target.value) }
                    />
                </div>
                
                <div className="field">
                    <label className="label">id</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="id"
                        value={ id }
                        onChange={ (e) => setId(e.target.value) }
                    />
                </div>
                
                <div className="field">
                    <label className="label">adress</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="adress"
                        value={ adress }
                        onChange={ (e) => setAdress(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">bornDate</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="bornDate"
                        value={ bornDate }
                        onChange={ (e) => setBornDate(e.target.value) }
                    />
                </div>
                  <div className="field">
                    <label className="label">phone</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="phone"
                        value={ phone }
                        onChange={ (e) => setPhone(e.target.value) }
                    />
                </div>
                <div className="field">
                    <label className="label">mobilePhone</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="mobilePhone"
                        value={ mobilePhone }
                        onChange={ (e) => setMobilePhone(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <button className="button is-primary">Save</button>
                </div>
            </form>
        </div>
         
        </>
    )
}
)
)