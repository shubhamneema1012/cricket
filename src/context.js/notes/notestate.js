import React, { useState } from "react";
import notecontext from "./Notecontext";
let my=document.getElementById("overgy");
const Wickets_data=["LBW","RUN OUT","CATCH","BOWLED"];
const Run_data=[1,2,3,4,6];
const Ball_data=["NOBALL","Wide","DOT",];
const Notestate=(props)=>{
    const s1={
        ball:0,
        ballCounter:0,
        balldata:0,
        balld:0
    } 
    const [state,setState]=useState(s1);
    const [Runs,setRuns]=useState(0);
    const [Wickets,setWickets]=useState(0);
    const [Screen_data,setScreen_data]=useState(0)
    const [Review_counter,setReview_counter]=useState(3);
    const update=()=>{
        let ballp=String(Math.floor(Math.random() * (1000 - 100)) + 100);
        let balldata=ballp.split("");
        let ballcr=parseInt(balldata[0])+parseInt(balldata[1])+parseInt(balldata[2]);
        if(state.ballCounter==5){
            setState({ball:parseInt(state.ball)+1,
                ballCounter:0,
                balldata:ballp,
                balld:ballcr
            })
        }else{
            setState({ball:(parseFloat(state.ball) + 0.1).toFixed(1),
                ballCounter:state.ballCounter+1,
                balldata:ballp,
                balld:ballcr
            })
        }
        if(parseInt(ballp)%10==0){
            setWickets(Wickets+1)
            setScreen_data(Wickets_data[Math.floor(Math.random() * (3 - 0)) + 0])
        }else{
            setRuns(Runs+Run_data[state.balld%5]);
            setScreen_data(Run_data[state.balld%5])
        } 
    }
const Take_review=()=>{
        if(Review_counter>0){
            setScreen_data("Review")
            setReview_counter(Review_counter-1)
        }
        else{
        setScreen_data("No Review")
        }
}
    return(
        <notecontext.Provider value={{state,update,Runs,Wickets,Screen_data,Review_counter,Take_review}}>
            {props.children}
        </notecontext.Provider>
    )
}
export default Notestate;