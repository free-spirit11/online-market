import './checkout-item.styles.scss';
import { useDispatch } from 'react-redux';
import { addItemToCart, removeItemFromCart, clearItemFromCart } from '../../store/cart/cart.reducer';

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const dispatch = useDispatch();
    const clearItemHandler = () => dispatch(clearItemFromCart(cartItem));
    const addItemHandler = () => dispatch(addItemToCart(cartItem));
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItem));


    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={removeItemHandler}>
                    &#10094; {/* symbol for the left arrow  */}
                </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItemHandler}>
                    &#10095; {/* symbol for the right arrow  */}
                </div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={clearItemHandler}>&#10005; {/* symbol for the cross (close) sign  */}</div>
        </div>
    );
};

export default CheckoutItem;
