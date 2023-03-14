import { GET_PRODUCTS_SUCCESSED } from "./actions";

const mainReducer = (state: any, action: any) => {
    console.log(action, "reducer was callled");
    console.log(state);
    switch(action.type){
        case GET_PRODUCTS_SUCCESSED: return {
            ...state,
            products: action.payload
        }
    }
    return state;
}

export default mainReducer;