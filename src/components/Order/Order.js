import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from './ReviewItem/ReviewItem';
import './Order.css'

const Order = () => {
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useCart(products)
    const handleRemoveCart = product => {
        const reset = cart.filter(pd => pd.id != product.id)
        setCart(reset)
        removeFromDb(product.id)

    }
    return (
        <div>
            <div className="shop-container">
                <div className="review-items-container">
                    {
                        cart.map(product => <ReviewItem
                            key={product.id}
                            product={product}
                            handleRemoveCart={handleRemoveCart}
                        ></ReviewItem>)
                    }

                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <Link to='/inventory'>
                            <button>Checkout</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Order;