import React,{Component} from 'react';
import Parent from './parent'

export const Battery = React.createContext();

class Demo extends Component{
	state = {
		number: 60
	}
    render(){
        return (
        	<Battery.Provider value={this.state.number}>
				<Parent></Parent>
				<button onClick={this.handleClick}>增加</button>
			</Battery.Provider>
        );
    }
    handleClick = ()=>{
		let {number} = this.state;
		this.setState({number:number+1})
	}
}
export default Demo