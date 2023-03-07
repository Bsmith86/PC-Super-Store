import React, { useContext }  from 'react'
import { AppContext } from '../../context/app_context';

const OrderHistory = () => {

    const { orders } = useContext(AppContext)

    let ordersJSX = orders.map((el) => {
        return (
        <div>   
          <div 
            key={el._id} 
            style={{backgroundColor: "rgba(9, 9, 191, 0.8)", padding: '20px 0', fontSize: '30px', color: '#edfa00' }}
            className='previousOrder'>
            <span>ORDER  <span>{el._id.toFixed(6)}</span></span>
            <span>{el.data.createdAt}</span> 
          </div>
          <div className="ItemContainer">
            {/* various order items here */}
            {el}
            <section>
            <span>TOTAL</span>  
            </section>  
          </div>  
        </div>  
        )
      })

  return (
    <div>
      
    </div>
  )
}

export default OrderHistory
