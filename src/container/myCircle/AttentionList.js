import React from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import Recipe from "../../component/recipe/Recipe"
import CookBook from "../../component/recipe/CookBook"

class AttentionList extends React.Component{
    constructor(){
        super();
        this.state={
            dataList:[]
        }
    }

    render(){
        return (
            <div>
                <div style={{width:'2rem',height:"3rem",textAlign:"center",margin:"0 auto",color:"#999",paddingTop:"1rem",fontSize:".20rem",}}>
                    暂时没有关注
                </div>
                {/*<CookBook/>*/}
            </div>
        )
    }
}
export default connect()(AttentionList)