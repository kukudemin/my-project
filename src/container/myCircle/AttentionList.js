import React from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import Recipe from "../../component/recipe/Recipe"
import CookBook from "../../component/recipe/CookBook"

class AttentionList extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div>
                <CookBook/>
            </div>
        )
    }
}
export default connect()(AttentionList)