// ********************For Ball****************************
const Ball_Data = [2, 1, "Wide", 3, 4, "Noball", 6, "Dot"];
const Wickets_Data = ["Bold", "Lbw", "Caught", "RunOut"];
let Wickets = document.getElementById("wickets");
let Scn = document.getElementById("Screen_output");
let Chase_runs = document.getElementById("Chase_runs");
let Chase_balls = document.getElementById("Chase_balls");
let Score = document.getElementById("score");
let Pl_team = document.getElementById("Playing_team");
let Bowling = document.getElementById("Bowling");
let Innings = document.getElementById("innings");
let Review = document.getElementById("review");
let Rev = document.getElementById("rev");
let Overs = document.getElementById("overs");
let Target = document.getElementById("target");
let ball;
let b;
let ball_cur = 0;
let result;
let Review_counter = 3;
let ball_counter = 0;
let Reviewtime;
let match=0;
// ***************DataCollecter********************
let First_team;
let Second_team;
let Match_Overs;
let Series_name;
let game = document.getElementById("game");
let mand = document.getElementById("main_div");
const Form=()=>{
    game.style.display="none";
    mand.style.display="block";
     First_team=document.getElementById("First_team").value;
     Second_team=document.getElementById("Second_team").value;
     Match_Overs=document.getElementById("Overs").value;
     Series_name=document.getElementById("Series").value;
    document.getElementById("First_team_name").innerHTML=First_team;
    document.getElementById("Second_team_name").innerHTML=Second_team;
    document.getElementById("Playing_series_name").innerHTML=Match_Overs;
    
}

const Throw_the_ball = () => {
    ball = String(Math.floor(Math.random() * (1000 - 100)) + 100);
    b = ball.split("");
    ball_cur = parseInt(b[0]) + parseInt(b[1] + parseInt(b[2]));
    if (parseInt(ball) % 10 == 0) {
        result = Wickets_Data[Math.floor(Math.random() * (3 - 0)) + 0];
        Scn.innerHTML = result;
    } else {
        result = Ball_Data[ball_cur % 8];
        Scn.innerHTML = result;
    }
}

const Show_the_screen = () => {
    switch (result) {
        case "Bold":
            Wickets.innerHTML = parseInt(Wickets.innerHTML) + 1;
            Overs_Balls();
            break;
        case "Caught":
            Wickets.innerHTML = parseInt(Wickets.innerHTML) + 1;
            Overs_Balls();
            break;
        case "Lbw":
            Wickets.innerHTML = parseInt(Wickets.innerHTML) + 1;
            Overs_Balls();
            break;
        case "RunOut":
            Wickets.innerHTML = parseInt(Wickets.innerHTML) + 1;
            Overs_Balls();
            break;
        case 1:
            Score.innerHTML = parseInt(Score.innerHTML) + 1;
            Overs_Balls();
            if(match==1){
                Chase_runs.innerHTML=parseInt(Chase_runs.innerHTML)-1;
            }
            break;
        case 2:
            Score.innerHTML = parseInt(Score.innerHTML) + 2;
            Overs_Balls();
            if(match==1){
                Chase_runs.innerHTML=parseInt(Chase_runs.innerHTML)-2;
            }
            break;
        case 3:
            Score.innerHTML = parseInt(Score.innerHTML) + 3;
            Overs_Balls();
            if(match==1){
                Chase_runs.innerHTML=parseInt(Chase_runs.innerHTML)-3;
            }
            break;
        case 4:
            Score.innerHTML = parseInt(Score.innerHTML) + 4;
            Overs_Balls();
            if(match==1){
                Chase_runs.innerHTML=parseInt(Chase_runs.innerHTML)-4;
            }
            break;
        case 6:
            Score.innerHTML = parseInt(Score.innerHTML) + 6;
            Overs_Balls();
            if(match==1){
                Chase_runs.innerHTML=parseInt(Chase_runs.innerHTML)-6;
            }
            break;
        case "Noball":
            Score.innerHTML = parseInt(Score.innerHTML) + 1;
            if(match==1){
                Chase_runs.innerHTML=parseInt(Chase_runs.innerHTML)-1;
            }
            break;
        case "Wide":
            Score.innerHTML = parseInt(Score.innerHTML) + 1;
            if(match==1){
                Chase_runs.innerHTML=parseInt(Chase_runs.innerHTML)-1;
            }
            break;
        case "Dot":
            Overs_Balls();
            break;
    }
}
const balls = () => {
    Throw_the_ball();
    Show_the_screen();
    if (result == "Lbw" && Review_counter > 0) {
        Bowling.setAttribute("disabled", "disabled");
        Rev.removeAttribute("disabled");
        let time = 15;
        Reviewtime = setInterval(() => {
            Review.innerHTML = time;
            time--;
            if (time == 0) {
                Review.innerHTML = Review_counter;
                Bowling.removeAttribute("disabled");
                clearInterval(Reviewtime);
        Rev.setAttribute("disabled", "disabled");
            }
        }, 1000);
    }
    if (Overs.innerHTML == 2 || parseInt(Wickets.innerHTML)>9){
        Chase_balls.innerHTML=Overs.innerHTML*6;
        Target.innerHTML = parseInt(Score.innerHTML)+1;
        Overs.innerHTML = 0;
        Wickets.innerHTML = 0;
        Score.innerHTML = 0;
        Innings.innerHTML = "P2";
        Pl_team.innerHTML="Englend";
        Chase_runs.innerHTML=Target.innerHTML;
        match++;
    }
}
const Overs_Balls = () => {
    ball_counter++;
    Overs.innerHTML = (parseFloat(Overs.innerHTML) + 0.1).toFixed(1);
    if (ball_counter == 6) {
        ball_counter = 0;
        Overs.innerHTML = parseInt(Overs.innerHTML) + 1;
    }
    if(match==1){
        Chase_balls.innerHTML=Chase_balls.innerHTML-1
    }
}
const view=()=>{
    if(Review_counter>0){
        review();
    }
    else{
    Scn.innerHTML = "NO REVIEW";
    }
}
const review = () => {
    let Impact = (parseInt(ball) % 2 == 0) ? "EVEN" : "ODD";
    let pitching = (parseInt(ball_cur) % 2 == 0) ? "EVEN" : "ODD";
    let w=(Impact==pitching)?"MISSING":"HITTING";                                                                                                                                                                                                                                                              
    clearInterval(Reviewtime);
    Scn.innerHTML = "DECISION PADDING...";
    Review_counter--;
    Review.innerHTML = Review_counter;
    Rev.setAttribute("disabled", "disabled");
    const revi = (x,y,z) => {
        let first = document.createElement("div");
        document.getElementById("Scree").appendChild(first);
        first.setAttribute("class", "col-md-4");
        first.setAttribute("id", z);
        let second = document.createElement("h1");
        let st = document.createTextNode(x);
        setTimeout(() => {
            first.appendChild(second);
        }, 3000);
        second.appendChild(st);
        setTimeout(() => {
            let second = document.createElement("h1");
            let st = document.createTextNode(y);
            first.appendChild(second);
            second.appendChild(st);
        }, 8000);
    }
    setTimeout(() => {
        Scn.style.display = "none";
        revi("IMPACT", Impact, "imp1")
    }, 5000)
    setTimeout(() => {
        revi("PITCHING", pitching, "imp2")
    }, 15000);
    setTimeout(() => {
        revi("WICKETS", w, "imp3");
        setTimeout(() => {
            document.getElementById("imp1").remove();
            document.getElementById("imp2").remove();
            document.getElementById("imp3").remove();
            Scn.style.display = "block";
            if(w=="MISSING"){
                Review_counter++;
                Review.innerHTML = Review_counter;
                Scn.innerHTML = "NOT OUT";
            Wickets.innerHTML = parseInt(Wickets.innerHTML) - 1;
            }
            else{
                Scn.innerHTML = "OUT";
            }
        Bowling.removeAttribute("disabled");
        }, 13000);
    }, 25000)
}