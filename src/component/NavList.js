import React from "react"
import {connect} from "react-redux"
import PropTypes from "prop-types"
import {Link,withRouter} from "react-router-dom"
import "./NavList.less"
class NavList extends React.Component{
    static defaultProps = {
        data: [],

    };
    static propTypes = {
        data: PropTypes.array
    };
    constructor(){
        super()
    }
    render(){
        let {data,history}=this.props;
        if (data.length === 0) {
            return null;
        }
        let ary=["/recipes","/newHand","/video","/radio","/recipes","/wonderfulActivities","/video","/radio"];
        return <div className="navList">
            {
                data.map((item,index)=>{
                    return <Link to={ary[index]} key={index} className="listItem">
                        <div className="item">
                            <img src={item.image} alt=""/>
                        </div>
                        <p>{item.title}</p>
                    </Link>
                })
            }
        </div>
    }
}
export default withRouter(connect()(NavList))