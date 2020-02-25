import React, { Component } from 'react'

class ClassCounterOne extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0,
             name:''
        }
    }
    componentDidMount(){
        document.title=`You clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps,prevState){
        if(prevState.count!==this.state.count){
            console.log('updating the document title');
            document.title=`You clicked ${this.state.count} times`
        }
        
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
                <input type="text" 
                value={this.state.name} 
                onChange={e=>{this.setState({name: e.target.value} )}}
                />
               <button onClick={this.incrementCount}>Clicked {count} times</button> 
            </div>
        )
    }
}

export default ClassCounterOne
