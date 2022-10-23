
import './members.css'
import { connect } from 'react-redux'
import React, { useEffect, useState } from 'react';
import { getAllMembers } from './service';
import axios from 'axios';

import Menu from './menu';


// function mapStateToProps(state) {
//   return { basket: state.basket }
// }

// export default (function PFood(props) {
//   const { addToCart } = props;
//   const [allMembers, setAllMembers] = useState([]);
//   const [chosenP, setChosenP] = useState();
//   useEffect(async () => {
//     debugger;

//     let data = await axios.get("http://localhost:3500/getAllMembers");
//     data.data.map(element => (element.type == "Food" ? setAllMembers(allMembers => [...allMembers, element]) : " "))

//   }, []);
export default (function MemberList  (props)  {
    const [allMembers, setAllMembers] = useState([]);
      const [chosenP, setChosenP] = useState();

 
    useEffect(() => {
        getMembers();
    }, []);
 
    const getMembers = async () => {
        const response = await axios.get('http://localhost:3500/getAllMembers');
        setAllMembers(response.data);
    }
  
    // const deleteMember = async (id) => {
    //     await axios.delete(`http://localhost:3500/products/${id}`);
    //     getProducts();
    // }


  return (
    <>
      <Menu></Menu>

      <h1>Membres Hospital</h1>
      <div className="row w-100 d-flex justify-content-around">

        {


allMembers.map(item => {
            return (
              <>

                <div className="card col-4" >
                  <img className="card-img-top " src={item.url} alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">{item.memberName}</h5>
                    <p className="card-text">id:{item.id}</p>
                    <button type="button" onClick={() => setChosenP(item)} class="btn1 btn-primary" data-toggle="modal" data-target="#exampleModal">
               member details </button>
                    <br />
                   

                  </div>
                </div>

              </>)
          })

        }

      </div>

      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">

              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h5 class="modal-title" id="exampleModalLabel">{chosenP && chosenP.memberName}</h5>
            </div>
            <div class="modal-body">
              <img src={chosenP && chosenP.url} />
              <h6 class="modal-title" id="exampleModalLabel">{chosenP && chosenP.id}-{chosenP && chosenP.phone}</h6>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              {/* <button type="button" onClick={() => addToCart(chosenP)} class="btn btn-primary" data-dismiss="modal">הוספה לסל</button> */}
            </div>
          </div>
        </div>
      </div>
     
    </>
  )

      }


)
