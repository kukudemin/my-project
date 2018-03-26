import React from "react"
import {connect} from "react-redux"
import NewWorks from "./myCircle/NewWorks"

class myCircle extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
           <div className='myCircle'>

               {/*最新的*/}
                    <div >
                        <NewWorks />
                    </div>

           </div>
        )
    }
}
export default connect()(myCircle)