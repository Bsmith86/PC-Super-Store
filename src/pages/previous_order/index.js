import React, { useContext } from 'react'
import { AppContext } from '../../context/app_context';
import Cart from '../../components/cart';
import './index.css'


const Previous = () => {


    // const navigate = useNavigate();

    const { orders } = useContext(AppContext)

    console.log(orders);

    let ordersJSX = orders.map((el) => {
        return (
            <div key={el._id} className='pOrders'>
                Order Date:  {el.createdAt}
                {/* Qty:  {el.totalQty}
                Order Total:  {el.orderTotal}
                 */}
                <div className='qty'>
                    Items in order: {el.totalQty}
                </div>
                <div className='price'>
                    Total Price: {el.orderTotal}
                </div>
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
