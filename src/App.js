import './App.css';
import { useEffect, useState, useContext } from 'react'; 
import Auth from './pages/auth'
import HOME from './pages/home';
import Checkout from './pages/Cart';
import AddProduct from './pages/add_product';
import Edit from './pages/edit';
import Product from './pages/product';
import { Routes, Route, Navigate } from 'react-router-dom';
import Nav from './components/nav';
import { getUserFromSession } from './utilities/user-functions';
import { AppContext } from './context/app_context';
import Loader from "react-js-loader";
import Footer from './components/footer';
import axios from 'axios';
import Previous from './pages/previous_order';



function App() {

  const [callWasMade, setCallWasMade] = useState(true);

  const { user, setUser, setCart, setOrders } = useContext(AppContext);

  // let user = 'Guest'

  // this will only run when we first open our app, or refresh the page

  useEffect(() => {
    const getSession =  async () => {

      let userResponse = await getUserFromSession();
      console.log({userResponse});
      setUser(userResponse)
      setCallWasMade(true)
    }
      getSession();

  }, []);

  useEffect(() => {
    const getCart = async () => {
      console.log({user});
      if (user) {

        let ordersResponse = await axios({
          method: 'GET',
          url: '/get_orders'
        })
        console.log(ordersResponse.data)
        setOrders(ordersResponse.data)


        // make call to database to get order
        let response = await axios({
            method: "GET",
            url: "/get_cart"
          })
          setCart(response.data)
      }
    }
    if (user) {
      getCart()
    }
  }, [user])


  const returnPage = () => {
    if (callWasMade) {
      return (
        <>
          { user ? 
            <div className="page-wrapper">
              <Nav />
              <Routes>
                <Route path="/" element={<HOME />}/>
                <Route path='/product/' element={<Product />}/>
                <Route path='/checkout/' element={<Checkout />}/>
                <Route path='/previous/' element={<Previous />}/>
                <Route path='/edit/:name' element={<Edit />}/>
                <Route path='/add' element={<AddProduct />}/>
                {/* <Route path="/*" element={<Navigate to="/" />} /> */}
              </Routes>
              <Footer />
            </div>
              :
              <Auth />
          }
        </>
      )
    } else {
      return <div>
        <Loader />
      </div>
    }
  }
  
  return (
    <div className="App">

        { returnPage() }

    </div>
  );
};

export default App;