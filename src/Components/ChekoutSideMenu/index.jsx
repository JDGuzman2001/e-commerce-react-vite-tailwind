import "./styles.css";
import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../Ordercard';
import { totalPrice } from "../../utils";


const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)
    // console.log('CheckoutSideMenu: ', context.cartProducts)

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id !== id)
        context.setCartProducts(filteredProducts)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: '01.02.23',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }

        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
    }



    return (
        <aside 
            className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
          <div className="flex justify-between items-center p-6">
            <h2 className="font-medium text-xl">My Order</h2>
            <div>
                <XMarkIcon 
                    className="h-6 w-6 cursor-pointer text-black"
                    onClick={() => context.closeCheckoutSideMenu()}
                     />
            </div> 
          </div>
          <div className="px-6 overflow-y-scroll flex-1">
            {
                context.cartProducts.map(product => (
                    <OrderCard 
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        imageUrl={product.image}
                        price={product.price}
                        handleDelete={handleDelete}
                    />
                ))
            }
          </div>
          <div className="px-6 mb-6">
            <p className="flex justify-between items-center mb-2">
                <span className="font-light text-2xl">Total:</span>
                <span className="font-medium text-2xl">${totalPrice(context.cartProducts)}</span>
            </p>
            <button 
                onClick={() => handleCheckout()}
                className="w-full bg-black py-3 text-white rounded-lg"
                >
                Checkout
            </button>
          </div>
        </aside>
    );
}

export default CheckoutSideMenu