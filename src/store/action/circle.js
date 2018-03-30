import * as Types from "../action-types"

const zanAction={
    async dianZan(MyData){
        return await {type:Types.DIAN_ZAN_NUM,MyData}
    }
};
export default zanAction
