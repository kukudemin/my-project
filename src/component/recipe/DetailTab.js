import React from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import  "./DetailTab.less"
import {isLogin} from "../../api/profile";


class DetailTab extends React.Component{
    constructor(props){
        super(props);
        this.state={
            dis:true,
        }
    }
    handleDis=()=>{
        let  {handleDisplay} =this.props;
        handleDisplay("block")
    };
    handNum=()=>{
        let  {handZan,countCount} =this.props;
        countCount++;
        handZan(countCount);

    }
componentWillMount(){

}
    render(){
        console.log("componentWillMount",this.props);

        let {countCount,comCount} = this.props;
        return (
            <div>
                <ul className='infoFooter2'>
                    <li>
                        <div>
                            <img src="https://image.hongbeibang.com/Fqv9VBHXG627znbKlZYnHQMTHVdc?200X200&imageView2/1/w/38/h/38" alt=""
                                 onClick={ async (ev)=>{
                                   
                                    this.handNum();
                                 }}
                            />
                        </div>
                        <span>{countCount}</span>
                    </li>
                    <li>
                        <div>
                            <img src="https://image.hongbeibang.com/Fi6E0gsACPeVV5_xgH5JBn6PN45m?200X200&imageView2/1/w/38/h/38" alt=""/>
                        </div>
                        <span>打赏</span>
                    </li>
                    <li onClick={ async (ev)=>{
                        /*先验证是否已经登录 没有=> 登录页面  已经登录 弹出评论页面 */
                        let loginId = await isLogin();
                        loginId = Number(loginId);
                        if (isNaN(loginId) || loginId === 0) {
                            this.props.history.push('/login');
                            return;
                        }
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