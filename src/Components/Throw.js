import { useContext } from "react";
import notecontext from "../context.js/notes/Notecontext";

const Throw_ball_button = () => {
    const a = useContext(notecontext)
    return (
        <div class="col-md-3 ball">
            <button onClick={a.update}>Ball</button>
        </div>
    )
}
export default Throw_ball_button;