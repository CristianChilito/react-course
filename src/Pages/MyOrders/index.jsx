import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../Componentes/Layout'
import { ShoppingCartContext } from '../../Contex'
import OrdersCard from '../../Componentes/OrdersCard'


function MyOrders() {
  const context = useContext(ShoppingCartContext)

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-4'>
        <h1>My Orders</h1>
      </div>
      {
        context.order.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts} />
          </Link>
        ))
      }
    </Layout>
  )
}

export default MyOrders