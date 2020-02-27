import React, { Component } from 'react'

class ClassTimer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             timer:0
        }
    }
    componentDidMount(){
        this.interval=setInterval(()=>{
            this.setState(prevState=>{
                return{
                    timer:prevState.timer+1
                }
                
            })
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    
    render() {
        return (
            <div>
              ClassTimer -{this.state.timer} <br/>
              <button onClick={()=>{clearInterval(this.interval)}}> Click to stop</button>
            </div>
        )
    }
}

export default ClassTimer
