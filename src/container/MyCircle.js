
import React from "react"
import {connect} from "react-redux"
import NewWorks from "./myCircle/NewWorks"
import Tab from "../component/Tab"

class myCircle extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (<div>
                <div className='myCircle'>
                    {/*最新的*/}
                    <div >
                        <NewWorks />
                    </div>
                </div>
                <Tab/>
            </div>
        )
    }
}
export default connect()(myCircle)

