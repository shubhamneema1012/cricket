import React, { useContext} from "react";
import notecontext from "../context.js/notes/Notecontext";
const Review = () => {
    const a=useContext(notecontext);
    return (
        <div class="col-md-3 pad">
                <h2>Review</h2>
                <h3 id="review">{a.Review_counter}</h3>
            </div>
    )
}
export default Review;