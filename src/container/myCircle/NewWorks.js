import React from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import Recipe from "../../component/recipe/Recipe"


class NewWorks extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div>
                <div className='recipeList'>
                    <Recipe/>
                </div>
            </div>
        )
    }
}
export default connect()(NewWorks)