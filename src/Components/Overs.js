import React, { useContext, useState } from "react";
import notecontext from "../context.js/notes/Notecontext";
const Overs=()=>{
    const a=useContext(notecontext);
    return(
        <div class="col-md-3 pad">
                <div class="col-md-12">
                    <h2>Over</h2>
                </div>
                <div class="col-md-12">
                    <h3 id="overs">{a.state.ball}</h3>
                </div>
            </div>
    )
}
export default Overs;