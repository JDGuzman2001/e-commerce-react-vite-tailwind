import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { PlusIcon, CheckIcon } from "@heroicons/react/16/solid"

const Card = (data) => {
    const context = useContext(ShoppingCartContext)

    const showProduct = (productDetail) => {
        context.setProductToShow(productDetail)
        context.openProductDetail()
    }

    const addProductsToCart = (event, product) => {
        event.stopPropagation()
        context.setCartProducts([...context.cartProducts, product])
        context.setCount(context.count + 1)
        context.openCheckoutSideMenu()
        context.closeProductDetail()
        // console.log('CART PRODUCTS:', context.cartProducts)
    }

    const renderIcon = (id) => {
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0

        if(isInCart) {
            return (
                <div 
                    className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1">
                    <CheckIcon className="h-4 text-white"/>
                </div>
            )
        } else {
            return (
                <div 
                    className="absolute top-0 right-0 flex justify-center items-center bg-zinc-300 w-6 h-6 rounded-full m-2 p-1"
                    onClick={(event) => addProductsToCart(event, data.data)}>
                    <PlusIcon className="h-4 text-black"/>
                </div>
            )
        }
        
    }

    return (
        <div 
            className="bg-white cursor-pointer w-56 h-60 rounded-lg"
            onClick={
                () => showProduct(data.data)
                }>
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{data.data.category}</span>
                <img className="w-full h-full object-contain rounded-lg" src={data.data.image} alt="headphones" />
                {renderIcon(data.data.id)}
                
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{data.data.title}</span>
                <span className="text-lg font-medium">${data.data.price}</span>
            </p>
        </div>
    )
} 

export default Card;