import uiSliceReducer from './ui-slice';
import cartSliceReducer from './cart-slice';
const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
	reducer: {
		cart: cartSliceReducer,
		ui: uiSliceReducer,
	},
});

export default store;
