import React, {Component} from "react"
import PropTypes from 'prop-types'
import './university.less'
import '../common/css/reset.min.css'
import Tab from '../component/Tab'
import Pay from "./university/Pay";
import {Link} from 'react-router-dom';
import axios from 'axios'
import {courseList} from "../api/university";

export default class University extends Component {
    constructor() {
        super();
        this.state = {
            courseList: {}
        }
    }


    async componentWillMount() {
        let result = await courseList();
        this.setState({
            courseList: result
        });
        console.log(result);

    }

    render() {
      let {courseList}=this.props;
        return (
            <div className="university">
                <div className='text'>
                    <a href="">
                        <span className='recommend'>推荐</span>
                    </a>
                    <a href="">
                        <span className='series'>系列</span>
                    </a>
                </div>
                <ul className='universityList'>
                    <li className="universityItem">
                        <a href="">
                            <h3 className='course'>预科班 (新手尝鲜)</h3>
                            <div className='container clearfix'>
                                <div className='imgBox'>
                                    <img
                                        src="https://image.hongbeibang.com/Fid0l4JQRpovFzs1ulfqFkW36ZQx?750X400&imageView2/1/w/200/h/133"
                                        alt=""/>
                                </div>
                                <div className='con-right'>
                                    <p className='title'>
                                        <span>失败戚风专题课</span>
                                    </p>
                                    <p className='price'>
                                        <span>¥9.9</span>
                                    </p>
                                    <p className='courseClass'>
                                        <span>预科班(新手尝鲜)</span>
                                    </p>
                                    <p className='date'>
                                        <span>2017-3-25</span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className="universityItem">
                        <a href="">
                            <h3 className='course'>预科班 (新手尝鲜)</h3>
                            <div className='container clearfix'>
                                <div className='imgBox'>
                                    <img
                                        src="https://image.hongbeibang.com/Fid0l4JQRpovFzs1ulfqFkW36ZQx?750X400&imageView2/1/w/200/h/133"
                                        alt=""/>
                                </div>
                                <div className='con-right'>
                                    <p className='title'>
                                        <span>失败戚风专题课</span>
                                    </p>
                                    <p className='price'>
                                        <span>¥9.9</span>
                                    </p>
                                    <p className='courseClass'>
                                        <span>预科班(新手尝鲜)</span>
                                    </p>
                                    <p className='date'>
                                        <span>2017-3-25</span>
                                    </p>

                                </div>

                            </div>
                        </a>

                    </li>
                    <li className="universityItem">
                        <a href="">
                            <h3 className='course'>预科班 (新手尝鲜)</h3>
                            <div className='container clearfix'>
                                <div className='imgBox'>
                                    <img
                                        src="https://image.hongbeibang.com/Fid0l4JQRpovFzs1ulfqFkW36ZQx?750X400&imageView2/1/w/200/h/133"
                                        alt=""/>
                                </div>
                                <div className='con-right'>
                                    <p className='title'>
                                        <span>失败戚风专题课</span>
                                    </p>
                                    <p className='price'>
                                        <span>¥9.9</span>
                                    </p>
                                    <p className='courseClass'>
                                        <span>预科班(新手尝鲜)</span>
                                    </p>
                                    <p className='date'>
                                        <span>2017-3-25</span>
                                    </p>

                                </div>

                            </div>
                        </a>

                    </li>
                    <li className="universityItem">
                        <a href="">
                            <h3 className='course'>预科班 (新手尝鲜)</h3>
                            <div className='container clearfix'>
                                <div className='imgBox'>
                                    <img
                                        src="https://image.hongbeibang.com/Fid0l4JQRpovFzs1ulfqFkW36ZQx?750X400&imageView2/1/w/200/h/133"
                                        alt=""/>
                                </div>
                                <div className='con-right'>
                                    <p className='title'>
                                        <span>失败戚风专题课</span>
                                    </p>
                                    <p className='price'>
                                        <span>¥9.9</span>
                                    </p>
                                    <p className='courseClass'>
                                        <span>预科班(新手尝鲜)</span>
                                    </p>
                                    <p className='date'>
                                        <span>2017-3-25</span>
                                    </p>

                                </div>

                            </div>
                        </a>

                    </li>
                </ul>

                <div className="footer">
                    <Tab/>
                </div>
            </div>
        )
    }
}
