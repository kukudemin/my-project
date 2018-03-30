import React from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import Recipe from "../../component/recipe/Recipe"


class NewWorks extends React.Component{
    constructor(){
        super();
        this.state={dataList:[]}
    }
    componentWillMount(){
        let {data}=this.props;
        let arrList=[];
        data.forEach((item,index)=>{
            item.allWorks.forEach((ite,i)=>{
                arrList.push({...item,...ite})
            })
        });
        this.setState({
           dataList:[...arrList]
       })

    }
    render(){

  let {dataList}=this.state;
        return (
            <div>
                <div className='recipeList'>
                    {
                        dataList.map((item,index)=>{
                            return <Recipe item={item} key={index} index={index} alldataList={dataList}/>
                        })
                    }
                </div>
            </div>
        )
    }
}
export default connect()(NewWorks)