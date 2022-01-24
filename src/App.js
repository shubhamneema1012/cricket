import Firstteam from "./Components/Firstteam";
import Overs from "./Components/Overs";
import Second_team from "./Components/Second_team";
import Series_name from "./Components/Series_name";
import Screen from "./Components/Screen";
import "./index_copy.css"
import Target from "./Components/Target";
import Review from "./Components/Review";
import Score from "./Components/Score";
import Review_button from "./Components/Review_button";
import Innings from "./Components/Innings";
import Throw_ball_button from "./Components/Throw";
import Notestate from "./context.js/notes/notestate";
import Overs_detail from "./Components/Overs_detail";
function App() {
  return (
    <Notestate>
    <section class="container-fluid" id="main_div">
      <div class="row">
        <Firstteam />
        <Series_name />
        <Second_team />
        <div class="row">
          <Overs/>
          <Screen/>
          <Target/>
        </div>
        <div class="row">
        <Review/>
        <Score/>
        <Review_button/>
      </div>
      <div class="row">
        <Innings/>
        <Throw_ball_button/>
         <Overs_detail/>
      </div>
      </div>
    </section>
    </Notestate>
  );
}

export default App;
