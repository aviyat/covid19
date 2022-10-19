import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { addToCart } from "./store/action";
import './payment.css'
import { withRouter } from 'react-router-dom'
import { saveHistory } from './service'
import Menu from '../component/menu'; 



function mapStateToProps(state) {
    return {
        basket: state.basket,
        user: state.user
    }
}

const mapDispatcToProps = (dispatch) => ({
    addToCart: (product) => dispatch(addToCart(product))

})
export default withRouter(connect(mapStateToProps, mapDispatcToProps)(function Payment(props) {
    const { basket, history, user } = props;

    useEffect(() => {
        try {
            let result = window.confirm("?האם אתה רוצה לעבור לדף התשלום")
            if (!result)
                history.push('/cart')
        }
        catch {
            console.log("error!!");
        }
    })
    let sum = 0, counter = 0, flag=false;

    function addBuy(sum, counter) {
        debugger

        console.log(user);
       
        let obj = {
            date: new Date(Date.now()),
            sum: sum,
            Quantity: counter
        }
        saveHistory(user, obj)

    }

  
    return (
        <>
        <Menu></Menu>
            {/* <h2>לתשלום</h2> */}
            <h1>שלום {user.name}</h1>
            <br></br>
            <div class="container">
                <div>
                    <h4>הקנייה שלך מסוכמת כאן , אחרי אישורך ,לתשלום לחץ למטה, תתחדש/י!!!!</h4>
                    <div>
                    </div>

                    {basket.map((item, index) => {
                        if (item.count == null) {
                            debugger
                            sum += (item.price * 1);
                            counter++;
                        }
                        else {
                            debugger
                            sum += (item.price * item.count)
                            counter += +item.count;
                        }
                        debugger
                        return (
                            <>

                                <div className="cardpay m-1" key={index}>
                                    <img className="cardpay-img-top " src={item.url} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card.-title">{item.prodName}</h5>
                                        <p className="card-text">מחיר:{item.price}<i style={{ fontSize: "10px" }} class="fa">&#xf20b;</i> כמות:{item.count}</p>
                                        <br />

                                    </div>
                                </div>

                            </>)
                    })}

                    <br></br> <br></br>

                    {sum !== 0 ? <h2 className="pay">סכום סופי:{sum}</h2> : ""
                       
                    }

                    <button className="payButton" onClick={()=>{ addBuy(sum, counter)}}>לתשלום</button>
                    <br></br><br></br>  <br></br><br></br>
                </div>
            </div>


        </>

    )
}
)
)