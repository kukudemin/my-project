import React from "react"
import {connect} from "react-redux"
import PropTypes from "prop-types"
import {Link} from "react-router-dom"
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
        let {data}=this.props;
        if (data.length === 0) {
            return null;
        }
        console.log(data);
        let ary=["/recipes","/newHand","/video","/radio","/recipes","/newHand","/video","/radio"];
        return <div className="navList">
            {
                data.map((item,index)=>{
                    return <Link to={ary[index]} key={index} className="listItem">
                        <div className="item" >
                            <img src={item.image} alt=""/>
                        </div>
                        <p>{item.title}</p>
                    </Link>
                })
            }
        </div>
    }
}
export default connect()(NavList)