import React, {Component} from "react"
import PropTypes from 'prop-types'
import './university.less'
import '../common/css/reset.min.css'
import Tab from '../component/Tab'
import Pay from "./university/Pay";
import {Link} from 'react-router-dom';
import axios from 'axios';

import {courseList} from "../api/university";

export default class University extends Component {
    constructor() {
        super();
        this.state = {
            courseList: []
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
      let {courseList}=this.state;
        return (
            <div className="university">
                <div className='text'>
                    <a>
                        <span className='recommend active\'>推荐</span>
                    </a>
                    <a>
                        <span className='series' onClick={ev=>{
                            this.props.history.push(`/series`);
                        }}>系列</span>
                    </a>
                </div>
                <ul className='universityList'>
                    {
                        courseList.map((item,index)=>{
                            return  <li className="universityItem" key={index}>
                                    <a onClick={event => {
                                        this.props.history.push(`/pay`);
                                        localStorage.universityId = item.id;
                                    }}>
                                        <h3 className='course'>{item.type}</h3>
                                        <div className='container clearfix'>
                                            <div className='imgBox'>
                                                <img
                                                    src={item.img}
                                                    alt=""/>
                                            </div>
                                            <div className='con-right'>
                                                <p className='title'>
                                                    <span>{item.title}</span>
                                                </p>
                                                <p className='price'>
                                                    <span>{item.price}</span>
                                                </p>
                                                <p className='courseClass'>
                                                    <span>{item.hot}</span>
                                                </p>
                                                <p className='date'>
                                                    <span>{item.time}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                        })
                    }

                </ul>

                <div className="footer">
                    <Tab/>
                </div>
            </div>
        )
    }
}
