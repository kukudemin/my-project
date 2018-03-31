import React from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {Link,NavLink} from  "react-router-dom"
import "./Recipe.less"
import action from "../../store/action/index"

class Recipe extends React.Component{
    constructor(props){
        super(props);
        this.state={
          countData:this.props.MyData
        }
    }
   componentWillMount(){
      // this.props.dianZan(this.props.alldataList);//
       //console.log("alldataList",this.props);
   }

    render(){
        //console.log(this.props);
        let {item,index} =this.props;
         item={...item,index};
        let {id, icon='',author, createTime='2017-01-02',title='',description='',imgList=[],reMark='',isRemind=0,isComment=0,isCollected=0,remindPoint=[],comment=[]}=item;
       // console.log(id);

        return (
            <div className='recipe-item'>
                {/*个人列表*/}
                    <a>
                       <div className='infoHeader'>
                           <div className='infoLeft'>
                               <img src={icon} alt=""/>
                           </div>
                           <div className='infoRight'>
                               <p className='userName'><img  className='masterIcon' src={require("../../common/image/icon-master.png")} alt=""/>{author}</p>
                               <p className='recipe-text'>
                                   <span className='time'>{createTime}</span>
                                   <span className='content'>{title}</span>
                               </p>
                           </div>

                       </div>
                    </a>

                {/*跳转到 详情 */}
                <Link to={`/recipeDetail/${id+''}`} >
                    <div className='dec1'>
                        <span className="mark">#{reMark}#</span>
                        <span>{description}</span>
                    </div>
                    <div className='imgList'>
                        {imgList.map((item,index)=>{
                            return (
                                <div key={index}>
                                    <img src={item} alt=""/>
                                </div>
                            )

                        })}
                    </div>
                </Link>

                {/*点赞 评论*/}
                {this.props.list=="detail"?
                    <div className='infoFooter1'>
                        <span className='footerTitle'>作品标题</span>
                        <span className='footerSearch'>搜索食谱 ></span>
                    </div>:
                    <ul className='infoFooter'>
                    <li >
                        <div>
                            <img index={id} ref="img" src="https://image.hongbeibang.com/Fqv9VBHXG627znbKlZYnHQMTHVdc?200X200&imageView2/1/w/38/h/38" alt="" onClick={(ev)=>{
                               // this.props.dianZan(remindPoint.count,12);
                                let targetIndex=this.refs.img.getAttribute('index');//当前点击的index:id
                                console.log(targetIndex);


                            }}/>
                        </div>
                        <span>{remindPoint.count}</span>
                    </li>
                    <li>
                        <div>
                            <img src="https://image.hongbeibang.com/Fi6E0gsACPeVV5_xgH5JBn6PN45m?200X200&imageView2/1/w/38/h/38" alt=""/>
                        </div>
                        <span>打赏</span>
                    </li>
                    <li>
                        <Link to={`/recipeDetail/${id+''}`} >
                            <div>
                                <img src="https://image.hongbeibang.com/FiZ5-B7_rmV_gnPl97P-FkpjSlij?200X200&imageView2/1/w/38/h/38" alt=""/>
                            </div>
                        </Link>
                        <span>{comment.count}</span>
                    </li>
                </ul>}

            </div>

        )
    }
}
export default connect((state)=>({...state.zan}),action.dianZan)(Recipe)