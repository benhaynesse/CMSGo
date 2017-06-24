import React,{Component} from 'react';

import style from '../../style/mainbody.css';

import BPanel from './BPanel';

class MainBody extends Component{
    
    constructor(){
        super();
        this.info = [
            {
            headerText:"THIS IS THE HEADER",
            bodyText : "THIS IS A NEW BODY OF TEXT FOR THE PENGUINS THAT SIT ON THE MOON",
            color:"red"
        },
        {
            headerText:"THIS IS THE SECOND HEADER",
            bodyText : "THIS IS A NEW BODY OF TEXT FOR THE PENGUINS THAT SIT ON THE MOON",
            color:"green"
        },
        {
            headerText:"THIS IS THE THIRD HEADER",
            bodyText : "THIS IS A NEW BODY OF TEXT FOR THE PENGUINS THAT SIT ON THE MOON",
            color:"black"
        }
        ,
        {
            headerText:"THIS IS THE THIRD HEADER",
            bodyText : "THIS IS A NEW BODY OF TEXT FOR THE PENGUINS THAT SIT ON THE MOON",
            color:"blue"
        }    
        ];
        
    }


    render(){

        let panels = this.info.map(item=>{
            return(
                <BPanel getInfo={item}/>
            )
        })

        return <div>
                
                
                {panels}


        </div>
    }

}

export default MainBody;