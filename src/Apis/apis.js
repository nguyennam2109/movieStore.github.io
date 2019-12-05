import {fetchProductsPending, fetchProductsSuccess, fetchProductsError} from '../Actions/commonActions';

function fetchProducts() {
    return dispatch => {
        fetchProductsPending();
        console.log("fetchProductsPending")
        fetch('https://mapi.sendso.vn/mob/product/cat/phu-kien-cong-nghe/phu-kien-may-tinh-laptop/usb/?p=2')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchProductsSuccess(res.data));
            console.log("APIfetchProductsSuccess",res.data)
            return res.products;
        })
        .catch(error => {
            dispatch(fetchProductsError(error));
        })
    }
}

export default fetchProducts;
