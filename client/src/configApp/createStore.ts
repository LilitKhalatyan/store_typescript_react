import { legacy_createStore as createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import saga from "./saga"
import mainReducer from "../redux/reducer"

const sagaMiddleware = createSagaMiddleware();

const initialState = {
    users: [],
    orders: [],
    products: []
}

//@ts-ignore
const store = createStore(mainReducer, initialState, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga);

export default store;

export type RootState = ReturnType<typeof mainReducer>;

