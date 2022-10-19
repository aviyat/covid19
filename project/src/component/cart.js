import './cart.css'
import { connect } from 'react-redux'
import React, { useDebugValue, useEffect, useState } from 'react';
import { getAllProducts } from './service';
import axios from 'axios';
import { updateCount, deleteItem } from './store/action';
import { withRouter } from 'react-router-dom';
import Menu from '../component/menu'; 

function mapStateToProps(state) {
    return { basket: state.basket }
}
const mapDispatcToProps = (dispatch) => ({

    updateCount: (product) => dispatch(updateCount(product)),
    deleteItem: (product) => dispatch(deleteItem(product)),

})

export default withRouter(connect(mapStateToProps, mapDispatcToProps)(function Cart(props) {
    const { basket, updateCount, history,deleteItem } = props;
   
    const [chosenP, setChosenP] = useState({
        prodName: "",
        url: "",
        prodDesc: "",
        price: "",
        type: "",
        count: 1
    });
    useEffect(async () => {
        console.log(basket);

    }, []);

    
    function updateCart(url, del) {
        debugger
        let obj = { url, del }
        deleteItem(obj)

    }

    function update(count) {
        debugger
        let obj = {
            prodName: chosenP.prodName,
            url: chosenP.url,
            prodDesc: chosenP.prodDesc,
            price: chosenP.price,
            type: chosenP.type,
            count: count
        }
        updateCount(obj)
    }


    return (
        <>
                        <Menu />
            <h2>עגלת קניות</h2>
            {basket.length == 0 ? <h5 className="hide">סל הקניות שלך כרגע ריק, טייל באתר ובחר את המוצרים האהובים עלייך....</h5> :

                basket.map((item, index) => {
                    return (
                        <>
                            <div className="card m-1" key={index}>
                                <img className="card-img-top " src={item.url} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card.-title">{item.prodName}</h5>
                                    <p className="card-text">מחיר:{item.price}<i style={{fontSize:"12px"}} class="fa">&#xf20b;</i></p>
                                  
                                    <input id="plus" type="number" onChange={e => { setChosenP(item); update(e.target.value); }} className="w-25" min="1" defaultValue="1"></input>
                                 
                                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                        </svg>
                                    </button>
                                    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog" role="document">
                                            <div className="modal-content">
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">ביטול</button>
                                                    <button type="button" className="btn btn-primary" onClick={() => { updateCart(item.url, 0) }} data-dismiss="modal">?מחיקה</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                    <br />

                                </div>
                            </div>

                        </>)
                })



            }
            <br></br><br></br>  <br></br><br></br>
            <button className={"bCart"} onClick={() => history.push('/payment')}>לסיכום הקנייה</button>
            <br></br><br></br>  <br></br><br></br>

        </>

    )

})
)















