import * as Types from "../action-types"
import {homeList} from "../../api/home"

const homeAction={
    async getHomeList(){
        return {
            type:Types.INIT_HOME,
            homeData:await homeList()
        }
    }
};
export default homeAction
