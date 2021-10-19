import React, {useState, useContext} from "react"
import {Context} from "../Context"

function CartItem({item}) {
    const [isHovering, setIsHovering] = useState(false)
    const {removeFromCart} = useContext(Context)
    
    const iconClassName = isHovering ? "fill" : "line";
    
    return (
        <div>
        <div className="cart-item">
            <i 
                className={`ri-delete-bin-${iconClassName}`}
                onClick={() => removeFromCart(item.id)} 
                onMouseEnter={(() => setIsHovering(true))} 
                onMouseLeave={(() => setIsHovering(false))}
            ></i>
            <img src={item.url} alt={item.id} className='cart-img' />
            <p>{item.price}</p>
        </div>
        <hr></hr>
        </div>
    )
}

export default CartItem