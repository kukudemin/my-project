import React from "react";
import ReactDom from "react-dom";
import "./HeadPortrait.less"

class HeadPortrait extends React.Component {


    render() {
        return <div>
            <div className="profile-header">
                <div className=" head-portrait">
                    <img
                        src="https://image.hongbeibang.com/FsGBK00-JpKFOtHVxSwcpAy7ZVUh?132X132&imageView2/1/w/132/h/132"
                        alt=""/>
                </div>
                <div className="headPortraitName">
                    <div className="hpn-s">
                        <span className="hpn-name">从零开始</span>
                        <span><img className="hpn-icon"
                                   src="https://image.hongbeibang.com/Fkwt9tYiYAFxX-lC-WHvmbPSOUwv?94X94&imageView2/1/w/30/h/30"/></span>
                        <span><img className="hpn-img"
                                   src="https://image.hongbeibang.com/FmFlZjZn6BHHnqrYVMz6MGecwc0J?200X200&imageView2/1/w/50/h/50"
                                   alt=""/></span>
                    </div>
                    <div className="headPortraitId">ID：y29320180327112735331</div>
                    <div className="headPortraitExperience">经验值：0/100</div>
                    <div className="headPortraitBorder"><div className="headPortraitBorder1"></div></div>
                </div>
                <div className="headPortraitBox">
                    <div className="headPortraitBox1">
                        <div className="headPortraitFollow">
                            <div>0</div>
                            <div>关注</div>
                        </div>
                        <div className="headPortraitFans">
                            <div>
                                <span>0</span>
                            </div>
                            <div>粉丝</div>
                        </div>
                        <div className="headPortraitTribute">
                            <div><span>0</span></div>
                            <div>帮贡</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    }
}

export default HeadPortrait;
