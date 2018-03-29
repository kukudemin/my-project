import React from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import  "./DetailTab.less"

class DetailTab extends React.Component{
    constructor(){
        super();
        this.state={
            dis:true
        }
    }
    handleDis=()=>{
        let  {handleDisplay} =this.props;
        handleDisplay("block")
    };

    render(){
        let {countCount,comCount} = this.props;
        return (
            <div>
                <ul className='infoFooter2'>
                    <li>
                        <div>
                            <img src="https://image.hongbeibang.com/Fqv9VBHXG627znbKlZYnHQMTHVdc?200X200&imageView2/1/w/38/h/38" alt=""/>
                        </div>
                        <span>{countCount}</span>
                    </li>
                    <li>
                        <div>
                            <img src="https://image.hongbeibang.com/Fi6E0gsACPeVV5_xgH5JBn6PN45m?200X200&imageView2/1/w/38/h/38" alt=""/>
                        </div>
                        <span>打赏</span>
                    </li>
                    <li onClick={(ev)=>{
                        this.handleDis()
                    }}>
                        <div ref='comment' >
                            <img src="https://image.hongbeibang.com/FiZ5-B7_rmV_gnPl97P-FkpjSlij?200X200&imageView2/1/w/38/h/38" alt=""/>
                        </div>
                        <span>{comCount}</span>
                    </li>
                </ul>
            </div>
        )
    }
}
export default connect()(DetailTab)