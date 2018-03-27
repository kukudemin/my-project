import React from "react"
import {connect} from "react-redux"
import ReactSwipe from "react-swipe"
import PropTypes from "prop-types"
import "./Banner.less"
class Banner extends React.Component{
    static defaultProps = {
        data: [],
        style: {},
        initSlide: 0,
        auto: 3000,
        isFocus: true
    };
    static propTypes = {
        data: PropTypes.array,
        style: PropTypes.object,
        initSlide: PropTypes.number,
        auto: PropTypes.number,
        isFocus: PropTypes.bool
    };

    constructor(props){
        super(props);
        this.state={
            step:props.initSlide
        }
    }

    render(){
        let {data,auto,initSlide,isFocus}=this.props;
        if (data.length === 0) {
            return null;
        }
        return <div className="bannerBox">
            <ReactSwipe swipeOptions={{
                startSlide:initSlide,
                auto:auto,
                callback:(index)=>{
                    this.setState({
                        step:index
                    })
                }
            }}>
                {
                    data.map((item,index)=>{
                        return <div key={index}>
                            <img src={item.img} alt=""/>
                        </div>
                    })
                }
            </ReactSwipe>
            {
                isFocus?<ul className="focus">
                    {
                        data.map((item,index)=>{
                            return <li key={index} className={index===this.state.step?"active":null}>

                            </li>
                        })
                    }
                </ul>:null
            }
        </div>
    }
}
export default connect()(Banner)