import React from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import Recipe from "../../component/recipe/Recipe"
import CookBook from "../../component/recipe/CookBook"

class MasterList extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div>
                <Recipe/>
                <CookBook/>
            </div>

        )
    }
}
export default connect()(MasterList)