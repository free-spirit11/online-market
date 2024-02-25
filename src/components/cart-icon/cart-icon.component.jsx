import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.reducer";
import { selectCartCount } from "../../store/cart/cart.selector";

import "./cart-icon.styles.scss";

const CartIcon = () => {
    const dispatch = useDispatch();
    const isCartOpen = useSelector(selectIsCartOpen);
    const cartCount = useSelector(selectCartCount);

    const clickIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

    return (
        <div className="cart-icon-container" onClick={clickIsCartOpen}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{cartCount}</span>
        </div>
    )
};

export default CartIcon;