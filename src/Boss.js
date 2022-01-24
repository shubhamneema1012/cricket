import { useContext, useEffect, useState } from "react";
import notecontext from "./context.js/notes/Notecontext";
const Boss=()=>{
    const Ball_Data = [2, 1, "Wide", 3, 4, "Noball", 6, "Dot"];
    const Wickets_Data = ["Bold", "Lbw", "Caught", "RunOut"];
    const a=useContext(notecontext)
    return(
        <>
        <h1>OVER-{a.state.ball}</h1>
        <h2>Overballdata:{a.state.balldata}</h2>
        <h2>Overballd:{a.state.balld}</h2>
        <h1>Screen:{Ball_Data[a.state.balld % 8]}</h1>
        <h1>Screen:{Wickets_Data[a.state.balld % 4]}</h1>
        </>
    )
}
export  default Boss;