
// import './products.css'
// import { connect } from 'react-redux'
// import React, { useEffect, useState } from 'react';
// import { getAllProducts } from './service';
// import axios from 'axios';
// import { addToCart } from './store/action';
// import Menu from '../component/menu'; 

// function mapStateToProps(state) {
//   return { basket: state.basket }
// }
// const mapDispatcToProps = (dispatch) => ({
  
//   addToCart: (product) => dispatch(addToCart(product)),


// })
// export default connect(mapDispatcToProps, mapStateToProps)(function Products(props) {
//   const { addToCart } = props;
//   const [allProducts, setAllProducts] = useState([]);
//   const [chosenP, setChosenP] = useState();
//   useEffect(async () => {
//     debugger;

//     let data = await axios.get("http://localhost:5000/getAllProducts");
//     data.data.map(element => (setAllProducts(allProducts => [...allProducts, element])))

//   }, []);



//   return (
//     <>
//       <h2>מוצרים</h2>
//       {


//         allProducts.map(item => {
//           return (
//             <>
//               <div className="card m-1" >
//                 <img className="card-img-top " src={item.url} alt="Card image cap" />
//                 <div className="card-body">
//                   <h5 className="card-title">{item.prodName}</h5>
//                   <p className="card-text">מחיר:{item.price}</p>
//                   <button type="button" onClick={() => setChosenP(item)} class="btn1 btn-primary" data-toggle="modal" data-target="#exampleModal">
//                     לצפייה
//                   </button>
//                   <br/>
//                   <button type="button" onClick={() => addToCart(item)} class="btn2 btn-primary" data-toggle="modal" data-target="#exampleModal">
//                   הוספה לסל
//                   </button>

//                 </div>
//               </div>
//               <br></br>
//             </>)
//         })
//       }


//       <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//         <div class="modal-dialog" role="document">
//           <div class="modal-content">
//             <div class="modal-header">
//               <h5 class="modal-title" id="exampleModalLabel"></h5>
//               <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                 <span aria-hidden="true">&times;</span>
//               </button>
//             </div>
//             <div class="modal-body">
//               {/* <img src={chosenP.url}/> */}
//             </div>
//             <div class="modal-footer">
//               <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
//               <button type="button" onClick={() => addToCart()} class="btn btn-primary">הוספה לסל</button>
//             </div>
//           </div>
//         </div>
//       </div>

//     </>
//   )
// }

// )






