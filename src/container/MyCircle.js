import React from "react"
import {connect} from "react-redux"


class myCircle extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div>myCircle</div>
        )
    }
}
export default connect()(myCircle)