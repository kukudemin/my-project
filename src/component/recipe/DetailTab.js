import React from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import  "./DetailTab.less"

class DetailTab extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div>
                <ul className='infoFooter2'>
                    <li>
                        <div>
                            <img src="https://image.hongbeibang.com/Fqv9VBHXG627znbKlZYnHQMTHVdc?200X200&imageView2/1/w/38/h/38" alt=""/>
                        </div>
                        <span>45</span>
                    </li>
                    <li>
                        <div>
                            <img src="https://image.hongbeibang.com/Fi6E0gsACPeVV5_xgH5JBn6PN45m?200X200&imageView2/1/w/38/h/38" alt=""/>
                        </div>
                        <span>45</span>
                    </li>
                    <li>
                        <div>
                            <img src="https://image.hongbeibang.com/FiZ5-B7_rmV_gnPl97P-FkpjSlij?200X200&imageView2/1/w/38/h/38" alt=""/>
                        </div>
                        <span>45</span>
                    </li>
                </ul>
            </div>
        )
    }
}
export default connect()(DetailTab)