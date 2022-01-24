import React, {useContext} from "react";
import notecontext from "../context.js/notes/Notecontext";
const Screen = () => {
    const a=useContext(notecontext);
    return (
        <div class="col-md-6 row pad" id="Screen">
            <div class="col-md-12 Scn" id="Scree">
                <h1 id="creen_output">{a.Screen_data}</h1>
            </div>
        </div>
    )
}
export default Screen;