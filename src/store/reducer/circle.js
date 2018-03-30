import * as Types from "../action-types"


const   zanReducer=(state={
    /*remindPoint:{count:""}*/
},action)=>{
    state=JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case Types.DIAN_ZAN_NUM:
            state.MyData= action.MyData;
            break;
    }
    return state
};
export default zanReducer