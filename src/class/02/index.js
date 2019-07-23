import React, {Component, lazy, Suspense} from 'react';

const About = lazy(() => import(/* webpackChunkName: "About" */ './About'))

class Index extends Component {
    state= {
        hasError: false
    };
    // componentDidCatch() {
    //     this.setState({
    //         hasError: true
    //     })
    // }

    static getDerivedStateFromError(){
        return {
            hasError: true
        }
    }

    //问题，在捕获到加载错误后，如何重新请求

    render() {
        if(this.state.hasError){
            return (
                <div>
                    Error
                </div>
            )
        }
        return (
            <div>
                <Suspense fallback={<div>loading</div>}>
                    <About/>
                </Suspense>
            </div>
        );

    }
}

export default Index;