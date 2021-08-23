import { useDispatch, useSelector } from 'react-redux';
import { uiSliceActions } from '../../store/ui-slice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
	const dispatch = useDispatch();
	const totalQuantity = useSelector(
		(state) => state.cart.totalQuantity
	);

	const toggleButton = () => {
		dispatch(uiSliceActions.toggle());
	};

	return (
		<button onClick={toggleButton} className={classes.button}>
			<span>My Cart</span>
			<span className={classes.badge}>{totalQuantity}</span>
		</button>
	);
};

export default CartButton;
