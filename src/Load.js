import { useContext } from "react";
import notecontext from "./context.js/notes/Notecontext";
const Load=()=>{
    const a=useContext(notecontext)
    return(
        <button onClick={a.update}>Change</button>
    )
}
export default Load;