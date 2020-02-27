import React,{useState,useEffect,useRef} from 'react'

function HookTimer() {
    const [timer,setTimer]=useState(0);
    const intervalRef=useRef();
    useEffect(()=>{
        intervalRef.current=setInterval(()=>{
            setTimer(prevTimer=>prevTimer+1)
        },1000)
        return ()=>{
            clearInterval(intervalRef.current)
        }
    },[])
    return (
        <div>
            Hook Timer-{timer}<br/>
            <button onClick={()=>{clearInterval(intervalRef.current)}}>Click to stop</button>
        </div>
    )
}

export default HookTimer
