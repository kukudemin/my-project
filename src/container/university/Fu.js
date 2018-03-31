import React, {Component} from "react"
import PropTypes from 'prop-types';
import './fu.less'

export default class Fu extends Component {
    constructor() {
        super();
        this.state = {
            flag:false,

    }
    }

    componentDidMount(){
        let {flag} = this.props;

        this.setState({
            flag:flag
        });
    }

    handleChange(flag){
        this.props.changePrice(flag);
    }

    render() {
        let {flag} = this.state;
        return (
            <div className='fu' style={{display:flag?'block':'none'}}>
                <h1>失败戚风专题课</h1>
                <img src="https://image.hongbeibang.com/FvbI_v3ce7nuHZq3Cq5yd37BvjuG?94X94&imageView2/1/w/50/h/50"
                     alt="" onClick={event => {
                         this.setState({
                             flag:false,
                         });
                         this.handleChange(flag);
                }}/>
                <h3>付款方式</h3>
                <div className='zhiFu'>
                    <img className='iconOne'
                         src="https://image.hongbeibang.com/FmJsFSIDrm4Nx1C1gjqvi7TfufO7?100X100&imageView2/1/w/50/h/50"
                         alt=""/>
                    <h3>支付宝</h3>
                    <img className="icon"
                         src="https://image.hongbeibang.com/Fl1bjSaqFGi6Xfq0uyOhN0LlOlxB?100X100&imageView2/1/w/50/h/50"
                         alt=""/>
                </div>
                <div className='zhiFuBao'>
                    <h4>需支付</h4>
                    <span>¥9.9</span>
                </div>

                <button>
                    确认支付
                </button>


            </div>
        )
    }
}
