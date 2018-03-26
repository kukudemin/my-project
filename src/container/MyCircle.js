
import React from "react"
import {connect} from "react-redux"
import NewWorks from "./myCircle/NewWorks"
import Tab from "../component/Tab"
import "./MyCircle.less"

class myCircle extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div className='myCircle'>
                <div className='CircleList'>
                    {/*最新的*/}
                    <div >
                        <NewWorks />
                    </div>
                </div>

                <div className='footer'>
                    <Tab/>
                </div>
            </div>
        )
    }
}
export default connect()(myCircle)

