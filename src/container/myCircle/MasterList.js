import React from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"

class MasterList extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div>MasterList</div>
        )
    }
}
export default connect()(MasterList)