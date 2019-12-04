import {fetchProductsPending, fetchProductsSuccess, fetchProductsError} from '../Actions/commonActions';

function fetchProducts() {
    return dispatch => {
        dispatch(fetchProductsPending());
        
        fetch('https://www.sendo.vn/m/wap_v2/online-sale/verify-products?p=1&s=20')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchProductsSuccess(res.products));
            console.log(res)
            return res.products;
        })
        .catch(error => {
            dispatch(fetchProductsError(error));
        })
    }
}

export default fetchProducts;
