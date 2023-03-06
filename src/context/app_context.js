import {useState, createContext} from 'react';

export const AppContext = createContext();

// we take in props because we want access to the children
const AppContextProvider = (props) => {
    // put our state

    const [user, setUser] = useState(false);
    const [activeProduct, setActiveProduct] = useState('')
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState(
        {
            orderId: "",
            checkoutDone: false,
            updatedAt: "",
            orderItems:[],
            totalQty: 0,
            orderTotal: 0,
        }
    );


    return (
        <AppContext.Provider value={{
            user, setUser,

            activeProduct, setActiveProduct,

            items, setItems,

            cart, setCart
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;