

import './products.css'
import { connect } from 'react-redux'
import React, { useEffect, useState } from 'react';
import { getAllProducts } from './service';
import axios from 'axios';
import { addToCart } from './store/action';
import Menu from '../component/menu';

function mapStateToProps(state) {
  return { basket: state.basket }
}
const mapDispatcToProps = (dispatch) => ({

  addToCart: (product) => dispatch(addToCart(product)),


})
export default connect(mapStateToProps, mapDispatcToProps)(function PCarriage(props) {
  const { addToCart } = props;
  const [allProducts, setAllProducts] = useState([]);
  const [chosenP, setChosenP] = useState();
  useEffect(async () => {
    debugger;

    let data = await axios.get("http://localhost:5000/getAllProducts");
    data.data.map(element => (element.type == "Carriage" ? setAllProducts(allProducts => [...allProducts, element]) : " "))

  }, []);


  return (
    <>
      
      <Menu></Menu>
      <h2>עגלות וטיולונים</h2>
      <div className="row w-100 d-flex justify-content-around">
        {

          allProducts.map(item => {
            return (
              <>
                <div className="card col-4" >
                  <img className="card-img-top " src={item.url} alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">{item.prodName}</h5>
                    <p className="card-text">מחיר:{item.price} <i style={{ fontSize: "14px" }} class="fa">&#xf20b;</i></p>
                    <button type="button" onClick={() => setChosenP(item)} class="btn1 btn-primary" data-toggle="modal" data-target="#exampleModal">
                      לצפייה והוספה לסל
                    </button>

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
              <h5 class="modal-title" id="exampleModalLabel">{chosenP && chosenP.prodName}</h5>
            </div>
            <div class="modal-body">
              <img src={chosenP && chosenP.url} />
              <h6 class="modal-title" id="exampleModalLabel">{chosenP && chosenP.prodDesc}-{chosenP && chosenP.price}<i style={{ fontSize: "14px" }} class="fa">&#xf20b;</i></h6>
            </div>
            <div class="modal-footer">

              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" onClick={() => addToCart(chosenP)} class="btn btn-primary" data-dismiss="modal">הוספה לסל</button>
            </div>
          </div>
        </div>
      </div>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    </>
  )

}

)







{/* <div className={"card1"}>
        <img src="img/a1.jpg" alt="Denim Jeans" style={{ width:300,height:300}}></img>
        <h1 className={"cardName"}>עגלת קרוז</h1>
        <p className={"price"}>3990</p>
        <p>Some text about the jeans..</p>
        <p><button >Add to Cart</button></p>
        onClick={addToCart}
      </div>
      <div className={"card1"}>
        <img src="img/a2.jpg" alt="Denim Jeans" style={{ width:300,height:300}}></img>
        <h1 className={"cardName"}> עגלת סייברס כחול</h1>
        <p className={"price"}>3900</p>
        <p>Some text about the jeans..</p>
        <p><button>Add to Cart</button></p>
      </div> */}