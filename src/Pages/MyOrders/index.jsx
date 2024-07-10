import React, { useContext } from "react"
import Layout from "../../Components/Layout"
import OrdersCard from "../../Components/OrdersCard"
import { ShoppingCartContext } from '../../Context';
import { Link } from 'react-router-dom';

function MyOrders() {
  const context = useContext(ShoppingCartContext)
  // console.log('MyOrders: ', context.order)
    return (
      <Layout>
        <div className="flex items-center justify-center realtive w-80 mb-4">
          <h1 className="font-medium text-xl">My Orders</h1>
        </div>
        {
          context.order.map((order, index) => (
            <Link to={`/my-orders/${index}`}>
              <OrdersCard 
                  key={index}
                  date={order.date}
                  totalProducts={order.totalProducts}
                  totalPrice={order.totalPrice}
              />
            </Link>
          ))
        }
      </Layout>
    )
  }
  
  export default MyOrders