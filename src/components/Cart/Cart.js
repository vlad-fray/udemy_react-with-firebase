import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
	const cartItems = useSelector((state) => state.cart.items);
	return (
		<Card className={classes.cart}>
			<h2>Your Shopping Cart</h2>
			<ul>
				{cartItems.map((item) => (
					<CartItem
						key={item.id}
						id={item.id}
						title={item.title}
						quantity={item.quantity}
						total={item.totalPrice}
						price={item.price}
					/>
				))}
				{cartItems.length === 0 && <p>Your cart is empty</p>}
			</ul>
		</Card>
	);
};

export default Cart;
