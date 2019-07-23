import React, {Component , useState , useEffect} from 'react';

class Index2 extends Component {
    state = {
        count: 0,
        size: {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        }
    }

    onResize = () => {
        this.setState({
            size: {
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight
            }
        })
    }

    componentDidMount() {
        document.title = `${ this.state.size.width } * ${ this.state.size.height }`
        window.addEventListener('resize', this.onResize)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        document.title = `${ this.state.size.width } * ${ this.state.size.height }`
    }

    render() {
        const { count } = this.state
        return (
            <div>
                <button onClick={()=>{
                    this.setState({
                        count: count + 1
                    })
                }}>
                    count: { count }
                </button>
            </div>
        );
    }
}

function Index(){
    const [count, setCount] = useState(0);
    const [size, setSize] = useState({
        width: document.documentElement.clientWidth,
        height:document.documentElement.clientHeight
    });

    let onResize = () => {
        setSize({
            width: document.documentElement.clientWidth,
            height:document.documentElement.clientHeight
        })
    }

    let onClick = () => {
        console.log('click')
    }

    // 绑定resize
    useEffect(()=>{
        window.addEventListener('resize',onResize)
    },[])

    useEffect(()=>{
        document.title = `${ size.width } * ${ size.height }`
    },[ size ])

    useEffect(()=>{
        let oSpan = document.querySelector("#xxx")
        oSpan.addEventListener('click', onClick)
        return () => {
            console.log("移除了")
            oSpan.removeEventListener('click', onClick)
        }
    },[count])

    //只有count变化时才会执行 remove 以及新的 add
    //不指定依赖时，每一次state变化都会执行 remove 和 add
    //指定为空数组时，只会在首次渲染时执行一次。

    return (
        <div>
            <button onClick={()=>{
                setCount(count + 1)
            }}>
                count: { count }
            </button>
            <br/>
            {
                count%2?
                    <span id="xxx">
                        size: {size.width} * {size.height}
                    </span>
                    :
                    <p id="xxx">
                        size: {size.width} * {size.height}
                    </p>
            }

        </div>
    )
}

export default Index;