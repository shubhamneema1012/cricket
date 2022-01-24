import { useContext } from "react";
import notecontext from "../context.js/notes/Notecontext";

const Review_button=()=>{
    const a = useContext(notecontext)
    return (
        <div class="col-md-3 ball">
            <button onClick={a.Take_review} id="Reviewd">Review</button>
        </div>
    )
}
export default Review_button;