import React from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import Recipe from "../../component/recipe/Recipe"
import CookBook from "../../component/recipe/CookBook"
import {allMaster} from "../../api/circle"

class MasterList extends React.Component{
    constructor(){
        super();
        this.state={
            allMasterData:[]
        }
    }

    async componentWillMount(){
         let result =await allMaster();//所有的shipu数据
        //console.log(result);
        let arrMaster=[];
        result.forEach((item,index)=>{
            if(item.isStar){
                item.allDish.forEach((it,ind)=>{
                    arrMaster.push({...item,...it})
                })
            }
        });
        this.setState({
            allMasterData:arrMaster
        });
        /* 按时间排序....*/
       /* console.log(arrMaster);*/
    }

    render(){
        let {allMasterData}=this.state;
        return (
            <div>
                {
                    allMasterData.map((item,index)=>{
                        return  <CookBook data={item} key={index}/>
                    })
                }

            </div>

        )
    }
}
export default connect()(MasterList)