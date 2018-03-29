import React from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import Recipe from "../../component/recipe/Recipe"
import CookBook from "../../component/recipe/CookBook"
import "./AttentionList.less"

class AttentionList extends React.Component{
    constructor(){
        super();
        this.state={
            dataList:[]
        }
    }

    render(){
        let {dataList}=this.state;
        return (
            <div className='My-focus'>
                {dataList.length==0?
                    <div  className='kong' >
                        暂时没有关注
                    </div>: <div className='myList'>
                        {/*  我的关注列表 */}
                    </div>
                }


                {/*<CookBook/>*/}


            </div>
        )
    }
}
export default connect()(AttentionList)