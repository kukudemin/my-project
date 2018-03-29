import React,{Component} from "react"
import PropTypes from 'prop-types';
import './CourseDetail.less'
import {courseList} from "../../api/university";

export default class CourseDetail extends Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    async componentWillMount() {
        let result = await courseList();
        this.setState({
            data: result
        });
        console.log(this.state.data);
    }

    render(){
        let {data}=this.state;
        return (
            <div className='courseDetail'>
                <a className='course clearfix'>
                    <h1>
                        <img onClick={ev=>{
                            this.props.history.goBack()
                        }} src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt=""/>
                        失败戚风蛋糕
                    </h1>
                    <div className='container clearfix'>
                        <div className='imgBox'>
                            <img src="https://image.hongbeibang.com/Fid0l4JQRpovFzs1ulfqFkW36ZQx?750X400&imageView2/1/w/200/h/133" alt=""/>
                        </div>
                        <div className='con-right'>
                            <p className='title'>
                                <span>2017网红甜心派</span>
                            </p>

                            <p className='courseClass'>
                                <span>13人报名</span>
                            </p>
                            <p className='date'>
                                <span>专题课程费</span>
                            </p>
                            <p className='price'>
                                <span>¥69.90</span>
                            </p>

                        </div>

                    </div>
                    <h3 className='course'>课程介绍</h3>
                    <p>创意火锅蛋糕+生巧克力+香蕉抱抱蛋糕+台湾肉松拔丝蛋糕！</p>


                    {
                        data.map((item,index)=>{
                           return  <div className='courseCon' key={index} onClick={event => {
                               this.props.history.push(`/pay`);
                               localStorage.universityId = item.id;
                           }}>
                               <img src={item.img} alt=""/>
                               <div className="courseText">
                                   <h4>{item.title}</h4>
                                   <p>{item.type}</p>
                                   <p>{item.time}</p>
                                   <p>{item.hot}</p>

                               </div>
                           </div>
                        })
                    }






                </a>

                <div className='subFooter'>
                    付费进入 69.9
                </div>

            </div>
        )
    }
}
