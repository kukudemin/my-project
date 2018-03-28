import * as Types from "../action-types"

const homeReducer=(state={
    homeData:[]
},action)=>{
    state={...state};
    switch (action.type) {
        case Types.INIT_HOME:
            state.homeData=action.homeData;
            break;
    }
    return state
};
export default homeReducer