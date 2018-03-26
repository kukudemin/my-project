import React from "react"
import Tab from "../component/Tab"
import {connect} from 'react-redux';
import "./Home.less"
class Home extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <div>
            <section className="footerContainer">
                <Tab/>
            </section>
        </div>
    }
}
export default connect()(Home)