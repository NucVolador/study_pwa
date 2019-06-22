import React,{Component} from 'react';
import Item from "./item"

class Parent extends Component{
    render(){
        return (
            <div>
				<Item />
			</div>
        );
    }
}
export default Parent