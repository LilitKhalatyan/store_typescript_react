import { call, put, takeLatest} from "redux-saga/effects"
import { Product } from "../types/product";
import { GET_PRODUCTS_SUCCESSED, GET_PRODUCTS } from "../redux/actions";
import { getAllProducts } from "../services/productsService";

function* fetchData(){
    //@ts-ignore
    const products: Product = yield call(getAllProducts);
    yield put({type: GET_PRODUCTS_SUCCESSED, payload: {products}})
}

export default function* watchDataSaga(){
    yield takeLatest(GET_PRODUCTS, fetchData)
}