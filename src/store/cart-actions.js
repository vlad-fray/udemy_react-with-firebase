import { cartActions } from './cart-slice';
import { uiSliceActions } from './ui-slice';

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiSliceActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!',
      })
    );
    const sendRequest = async () => {
      const res = await fetch(
        'https://redux-cart-6fc7d-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
          totalQuantity: cart.totalQuantity,
        }
      );

      if (!res.ok) throw Error('Sending cart data failed');
    };

    try {
      await sendRequest();

      dispatch(
        uiSliceActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!',
        })
      );
    } catch (err) {
      dispatch(
        uiSliceActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        })
      );
    }
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const res = await fetch(
        'https://redux-cart-6fc7d-default-rtdb.europe-west1.firebasedatabase.app/cart.json'
      );

      if (!res.ok) {
        throw new Error('Couldn`t fetch cart data!');
      }

      const data = await res.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData?.items || [],
          totalQuantity: cartData.totalQuantity,
          isManipulated: cartData.isManipulated,
        })
      );
    } catch (err) {
      dispatch(
        uiSliceActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetching cart data failed!',
        })
      );
    }
  };
};
