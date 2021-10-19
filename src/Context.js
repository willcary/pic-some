import React, {useState, useEffect} from "react";

const Context = React.createContext();

function ContextProvider({children}) {
    const [allPhotos, setAllPhotos] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllPhotos(data));
    }, [])
    
    function toggleFavorite(id) {
        const updatedArr = allPhotos.map(photo => {
            if(photo.id === id) {
                return {...photo, isFavorite: !photo.isFavorite};
            }
            return photo;
        })
        
        setAllPhotos(updatedArr);
    }

    //Return a random number to set each cart item's price
    function randomPrice() {
        return ((Math.floor(Math.random() * 9) + 1) * 10) - 0.01;
    }
    
    function addToCart(newItem) {
        setCartItems(prevItems => [...prevItems, {...newItem, price: randomPrice()}]);
    }
    
    function removeFromCart(id) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    }
    
    function emptyCart() {
        setCartItems([]);
    }
    
    return (
        <Context.Provider value={{
            allPhotos, 
            toggleFavorite, 
            cartItems, 
            addToCart, 
            removeFromCart, 
            emptyCart,
        }}>
            {children}
        </Context.Provider>
    );
}

export {ContextProvider, Context};