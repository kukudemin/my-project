import React,{Component} from "react"
import PropTypes from 'prop-types';
import './series.less'

export default class Series extends Component{
    constructor(){
        super();
    }
   
    render(){
        return (
            <div className='series'>
                <div className='text'>
                    <a onClick={ev=>{
                        this.props.history.push(`/university`);
                    }}>
                        <span className='recommend'>推荐</span>
                    </a>
                    <a>
                        <span className='series active' >系列</span>
                    </a>
                </div>
                <div className='seriesCon'>
                    <a onClick={ev=>{
                        this.props.history.push('/courseDetail')
                    }}>
                        <div className='imgBig'>
                            <img src="https://image.hongbeibang.com/FvtZnjrBhJobFPQg7bAWG30JXtNe?1181X787&imageView2/1/w/750/h/429" alt=""/>
                        </div>
                        <div className='container'>
                            <p>2017网红甜心派系列课程 专科班（入门必学）</p>
                            <div className='seriesText '>
                                <p>最新</p>
                            </div>
                            <span>台湾肉松拔丝蛋糕</span>
                            <p className='join'>13人报名</p>
                        </div>
                    </a>
                </div>

                <div className='seriesCon'>
                    <a onClick={ev=>{
                        this.props.history.push('/courseDetail')
                    }}>
                        <div className='imgBig'>
                            <img src="https://image.hongbeibang.com/FvtZnjrBhJobFPQg7bAWG30JXtNe?1181X787&imageView2/1/w/750/h/429" alt=""/>
                        </div>
                        <div className='container'>
                            <p>2017网红甜心派系列课程 专科班（入门必学）</p>
                            <div className='seriesText '>
                                <p>最新</p>
                            </div>
                            <span>台湾肉松拔丝蛋糕</span>
                            <p className='join'>13人报名</p>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}
