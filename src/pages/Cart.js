import React, {useState, useContext, useEffect} from "react";
import {Context} from "../Context";
import CartItem from "../components/CartItem";

function Cart() {
    const [buttonText, setButtonText] = useState("Place Order");
    const {cartItems, emptyCart} = useContext(Context);
    const [totalPrice, setTotalPrice] = useState(0);
    const totalCostDisplay = totalPrice.toLocaleString("en-US", {style: "currency", currency: "USD"});
    
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ));

    useEffect(() => {
        if (cartItems.length === 0) {
            setTotalPrice(0);
        }
        setTotalPrice(cartItems.reduce((total, item) => {
            return total + item.price;
        }, 0));
    }, [cartItems]);
    
    function placeOrder() {
        setButtonText("Ordering...");
        setTimeout(() => {
            alert("Order placed!");
            setButtonText("Place Order");
            emptyCart();
        }, 3000);
    }
    
    return (
        <main className="cart-page container">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCostDisplay}</p>
            {
                cartItems.length > 0 ?
                    <button className="order-button" onClick={placeOrder}>{buttonText}</button> :
                    <p>You have no items in your cart.</p>
            }
        </main>
    )
}

export default Cart