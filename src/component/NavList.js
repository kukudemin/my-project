import React from "react"
import {connect} from "react-redux"
import PropTypes from "prop-types"
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
        return <div className="navList">
            {
                data.map((item,index)=>{
                    return <div key={index} className="listItem">
                        <div className="item">
                            <img src={item.image} alt=""/>
                        </div>
                        <p>{item.title}</p>
                    </div>
                })
            }
        </div>
    }
}
export default connect()(NavList)