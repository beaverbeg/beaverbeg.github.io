var current = "home"
var lock = false;
document.addEventListener("keyup", ({key}) => {
    	if (key === "Enter") {
			go1()
    	}
})

//go
function go1(){
	if(lock==true) return false;
	if(current=="home"){
        pro()
	}
	else if(current=="projects"){
		home()
	}
	else{
		home()
	}
}


//projects
function pro(){
	lock = true;
	setTimeout(function(){lock = false},3000)
	current = "projects";
	var box = document.getElementById("box");
	box.classList.add("fall")
	setTimeout(function(){
	 box.innerHTML = `
	 <canvas id="canvas"></canvas>
	<script src="js/main.canvas.js"></script>
	 <div id="content" class="content" onclick="go1()">
			<center>
				<h1>projects</h1><br>
                <a class="tap">TAP HERE OR ENTER TO BACK HOME</a>
			</center>
		</div>
        <div class="p" id="p">
            <center>
              <div class="main">
                <!--simple 2 breaks to make the same height-->
                <div class="table">
                  <div class="p-element" onclick="link('https://boted.beaverbeg.ml')">Boted - discord bot<br><br></div>
                  <div class="p-element" onclick="link('https://replit.com/talk/share/DUNGEON-GAME/140552')">dungeon game - console game</div>
                  <div class="p-element" onclick="link('https://rps.beaverbeg.ml')">RPS - website game</div>
                </div>
				<div class="table">
                  <div class="p-element" onclick="link('https://draw.beaverbeg.ml')">draw - website drawing system</div>
				<div class="p-element" onclick="link('https://tb.beaverbeg.ml')">The Box - Website Game</div>
                </div>
              </div>
              <div class="other">
                <h2>other</h2>
                <br>
                <div class="table">
                  <div class="p-element" onclick="link('https://replit.com/talk/share/AMONG-US/116939')">amoung us game - console game</div>
                  <div class="p-element" onclick="link('https://replit.com/talk/share/West-Cowboy-GAME/121318')">west cowboy - console game</div>
                  <div class="p-element" onclick="link('https://replit.com/talk/share/HOVER-BUTTONS/139556')">hover buttons - website</div>
                </div>
                <div class="table">
                  <div class="p-element" onclick="link('https://replit.com/talk/share/Working-timer-in-nodejs/111326')">js timer - console timer</div>
                  <div class="p-element" onclick="link('https://quiz.beaverbeg.repl.co')">Quiz - website<br><br></div>
                </div>
              </div>
            </center>
        </div>
	 `
	 box.classList.remove("fall")
	 box.classList.add("rise")
	 setTimeout(function(){
		box.classList.remove("rise")

	 },1500);}, 1500); 
}

//home
function home(){
	lock = true;
	setTimeout(function(){lock = false},3000)
	var box = document.getElementById("box")
	current = "home";
	box.classList.add("fall")
	setTimeout(function(){
	 box.innerHTML = `
	 <div class="box">
	 <div onclick="go1()">
	 <center>
	   <h1>beaverbeg.ml</h1>
	   <br>
	   <a class="tap">TAP HERE OR ENTER TO SEE PROJECTS</a>
	 </center>
	 </div>
	 </div>
	 <div class="co">
	   <img class="img" src="i/dc.png" onclick="link('https://discord.com/users/769167166162599977')"><br>
	   <img src="i/repl.png" class="img" onclick="link('https://replit.com/@BeaverBeg')">
	 </div>
	 `
	 box.classList.remove("fall")
	 box.classList.add("rise")
	 setTimeout(function(){
		box.classList.remove("rise")

	 },1500);}, 1500); 
}

function link(url){
	window.open(url,`_blank`)
}

//keys

	document.addEventListener('contextmenu', event => event.preventDefault());

	//double window.onkeydown function protects from spamming
	window.onkeydown = function(evt) {
        if (evt.keyCode == 123 || evt.keyCode == 85 || evt.keyCode == 17 || evt.keyCode == 16 || evt.keyCode == 74 || evt.keyCode == 116 || evt.keyCode == 73) return false;
    };
    window.onkeypress = function(evt) {
        if (evt.keyCode == 123 || evt.keyCode == 85 || evt.keyCode == 17 || evt.keyCode == 16 || evt.keyCode == 74 || evt.keyCode == 116 || evt.keyCode == 73) return false;
    };

    function disableF5(e) {
        if ((e.which || e.keyCode) == 116) e.preventDefault();
    };
        $(document).on("keydown", disableF5);