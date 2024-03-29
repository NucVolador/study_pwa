import React, {Component, PureComponent,memo} from 'react';

// memo 是函数组件继承的PureComponent

const Foo = memo(function(props){
    console.log("foo")
    return (
        <div>
            {props.person.age}
        </div>
    );
})

// class Foo extends PureComponent{
//     render(){
//         console.log("foo")
//         return (
//             <div>
//                 {this.props.person.age}
//             </div>
//         );
//     }
// }

//问题，pureComponent和memo是如何判断是否需要渲染的，如果传入前后都是undefined该如何渲染

class Index extends Component {
    state = {
        count: 1,
        person:{
            age: 1
        }
    }

    handleClick = ()=>{
        const {person} = this.state;
        person.age++;
        // 这样修改无法
        this.setState({
            person
        })
    }

    render() {
        console.log(this.state.person.age)
        return (
            <div>
                <Foo person={this.state.person} />
                <button
                    onClick={this.handleClick}
                >
                    Add</button>
            </div>
        );
    }
}

export default Index;