import React,{Component} from 'react';

import {Battery} from './battery';

class Item extends Component{
    static contextType = Battery;
    render(){
        return (
        	<Battery.Consumer>
				{
					value=>
						<div>
							数字： {value}
						</div>
				}
			</Battery.Consumer>
        );
    }
}

// Item.contextType = Battery;
export default Item