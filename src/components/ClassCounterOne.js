import React, { Component } from 'react'

class ClassCounterOne extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    componentDidMount(){
        document.title=`You clicked ${this.state.count} times`
    }

    componentDidUpdate(){
        document.title=`You clicked ${this.state.count} times`
    }
    
    incrementCount=()=>{
        this.setState({
            count:this.state.count+1
        })
    }

    
    render() {
        const {count}=this.state;
        return (
            <div>
               <button onClick={this.incrementCount}>Clicked {count} times</button> 
            </div>
        )
    }
}

export default ClassCounterOne
