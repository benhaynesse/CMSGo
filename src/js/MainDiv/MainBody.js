import React,{Component} from 'react';
import $ from 'jquery';
import uid from 'uuid';

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
        this.state = {apiData:[]};        
    }

    componentDidMount(){        
        this.jsonData = $.get("https://jsonplaceholder.typicode.com/comments").then((data)=>{                    
            var newData = data.map((item)=>{
                var newItem = {jsonItem:item, color:"green"};
                return newItem;
            })
            this.setState({apiData:newData});
       });  
    }

    render(){       
        let panels = this.state.apiData.slice(0,10).map(item=>{            
            return(                
                <BPanel key={uid.v4()} getInfo={item}/>
            )
        })
        return <div>
                {panels}
        </div>
    }

}

export default MainBody;