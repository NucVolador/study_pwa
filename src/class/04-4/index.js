import React, {Component , useState, useContext, createContext} from 'react';

const Battery = createContext();


// useContext和contextType，contextType只适合一个context的时候

// 少用context，因为会导致组件之间有依赖


// consumer版
// 多个context时可随意嵌套Consumer
class Item3 extends Component{
    render(){
        return (
            <Battery.Consumer>
                {
                    aa=>
                        <p>
                            {aa}
                        </p>
                }
            </Battery.Consumer>
        )
    }
}

// contextType版，可省略Consumer，但是只限于一个context
class Item2 extends Component{
    static contextType = Battery
    render(){
        const aa = this.context
        return (
            <p>
                {aa}
            </p>
        )
    }
}

// useContext
function Item(){
    const aa = useContext(Battery);
    return (
        <p>{aa}</p>
    )
}

function Parent(){
    return (
        <div>
            <Item/>
            <Item2/>
            <Item3/>
        </div>
    )
}




function Index(){
    const [count,setCount] = useState(0);

    return (
        <div>
            <button onClick={()=>{
                setCount(count+1)
            }}>
                count: {count}
            </button>
            <Battery.Provider value={count}>
                <Parent/>
            </Battery.Provider>
        </div>
    )
}

export default Index;