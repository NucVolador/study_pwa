import React,{Component} from 'react';

import {Battery} from './index';

class Item extends Component{
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
export default Item