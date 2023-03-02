import {useState, createContext} from 'react';

export const AppContext = createContext();

// we take in props because we want access to the children
const AppContextProvider = (props) => {
    // put our state

    const [user, setUser] = useState(true);
    const [stuff, setStuff] = useState("This is some stuff")
    const [activeProduct, setActiveProduct] = useState('Intel Core i9-13900K')
    let [items, setItems] = useState([]);
    return (
        <AppContext.Provider value={{
            user, setUser,

            stuff, setStuff,

            activeProduct, setActiveProduct,

            items, setItems 
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;