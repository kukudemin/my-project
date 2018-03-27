import React from "react";
import ReactDom from "react-dom";
import "./HeadPortraitBoy.less"
class HeadPortraitBoy extends React.Component{


    render(){
        return<div>
            <div className="headPortraitBoy-Box">
                <div className="headPortraitBoyBox">
                    <div className="box-item">
                        <div>
                            <img src="https://image.hongbeibang.com/FgyV7GBC4RPoagtZnK-npLaoB1N6?160X160&imageView2/1/w/80/h/80" alt=""/>
                        </div>
                        <div>作品</div>
                    </div>
                    <div className="box-item">
                        <div>
                            <img src="https://image.hongbeibang.com/FhxeeHCgOPEcoLPR3sP6XNbybdvK?160X160&imageView2/1/w/80/h/80" alt=""/>
                        </div>
                        <div>食谱</div>
                    </div>
                    <div className="box-item">
                        <div>
                            <img src="https://image.hongbeibang.com/FkmRCthKDaI5Afc_NdkTZaqNLPE1?160X160&imageView2/1/w/80/h/80" alt=""/>
                        </div>
                        <div>收藏</div>
                    </div>
                    <div className="box-item">
                        <div>
                            <img src="https://image.hongbeibang.com/FgKxvkwdg8OOr9mhPok2JBVnCG2n?160X160&imageView2/1/w/80/h/80" alt=""/>
                        </div>
                        <div>问题</div>
                    </div>
                </div>
            </div>
        </div>

    }
}
export default HeadPortraitBoy;
