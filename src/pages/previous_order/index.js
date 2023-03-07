import React, { useContext } from 'react'
import { AppContext } from '../../context/app_context';
import Cart from '../../components/cart';
// import './index.css'


const Previous = () => {


    // const navigate = useNavigate();

    const { orders } = useContext(AppContext)

    console.log(orders);

    let ordersJSX = orders.map((el) => {
        return (
            <div key={el._id}>
                Order Date:  {el.createdAt}
                Qty:  {el.totalQty}
                Order Total:  {el.orderTotal}
               
            </div>
            
        )
      })
      console.log(ordersJSX);

  return (
    <div>
       <h1>Previous Orders</h1>
        {ordersJSX}
        
    </div>
  )
}

export default Previous
