import React, {Component, useState} from 'react';

class Index2 extends Component {
    state = {
        count: 0
    }
    render() {
        const {count} = this.state;
        return (
            <div>
                <button onClick={()=>{
                    this.setState({
                        count: count+1
                    })
                }}>
                    count:({count})
                </button>
            </div>
        );
    }
}

function Index(){
    // 多个state时要注意：useState的调用顺序、调用个数要保持一致。
    let [count,setCount] = useState(0);

    // useState 可以接收一个函数作为参数，函数的返回值作为默认值，这个函数只调用一次
    // 如果传递的不是一个函数作为参数，那么会导致每次都会执行一大段逻辑，会导致性能下降
    // 这个函数只执行一次！
    let [card,setCard] = useState(()=>{
        console.log("install")
        return 0
    });
    return (
        <div>
            <button onClick={()=>{
                setCount(count+1)
                setCard(card + 2)
            }}>
                hookscount:({count})
                card:({card})
            </button>
        </div>
    )
}

export default Index;