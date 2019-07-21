import React,{Component} from 'react';
import Parent from './parent';

export let Battery = React.createContext();

class Demo extends Component{
	state = {
		number: 60
	}
    render(){
        return (
        	<Battery.Provider value={this.state.number}>
				<Parent/>
				<button onClick={this.handleClick}>增加</button>
			</Battery.Provider>
        );
    }
    handleClick = ()=>{
		let {number} = this.state;
		this.setState({number:number+1})
	}
}

function Parent1(){
	return (
		<Item />
	);
}

class Item extends Component{
	static contextType = Battery;
	render(){
		const value = this.context
		return (
			<div>
				数字： {value}
			</div>
		);
	}
}

export default Demo