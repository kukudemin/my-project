import React from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"

class AttentionList extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div>AttentionList</div>
        )
    }
}
export default connect()(AttentionList)