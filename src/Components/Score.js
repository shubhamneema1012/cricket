import React, { useContext, useState } from "react";
import notecontext from "../context.js/notes/Notecontext";
const Score = () => {
    const a=useContext(notecontext);
    return (
        <div class="col-md-6 pad row">
        <div class="col-md-3 score">
            <h2 id="Playing_team">IND</h2>
        </div>
        <div class="col-md-3 score">
            <h2 id="score">{a.Runs}</h2>
        </div>
        <div class="col-md-3 score">
            <h2>-</h2>
        </div>
        <div class="col-md-3 score wickets">
            <h2 id="wickets">{a.Wickets}</h2>
        </div>
    </div>
    )
}
export default Score;