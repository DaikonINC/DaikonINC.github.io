var counter;
var modal;
var previousCount;
var canvas;
var img;



window.onload = function () {
    counter = document.getElementById('counter');
    modal = document.getElementById('donationSignUp');
    previousCount = getCurCount() - 1;
    img = new Image(300, 300);
    const hamburger = document.querySelector(".hamburger");
    const mobile_menu = document.querySelector(".mobile");
    hamburger.addEventListener("click", function(){
    hamburger.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-active");
    });
    img.src = 'leafSmall.png';
    updateCount();
    loopTimer();
    startCanvas();

}


//-------CANVAS STUFF-----------

//create 7 leaves with random starting positions
var leaves = [];
function startCanvas() {
    canvas = document.getElementById("background");

    canvas.height = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
    );

    canvas.width = Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.body.clientWidth,
        document.documentElement.clientWidth
    );

    //populate
    for (let i = 0; i < 10; i++) {
      setTimeout(addLeaf,(3500*i) + Math.random()*1000 - 500);
    }

    window.requestAnimationFrame(updatePosition);
}
function addLeaf(){
    leaves[leaves.length] = [Math.floor(Math.random() * canvas.width),-img.height,0,Math.random()*50];
}

function updatePosition() {
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgb(0,100,5)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < leaves.length; i++) {
        leaves[i][2] += 1
        var x = (canvas.width / 2 - img.width / 4) + (canvas.width / 2 - img.width / 4) * Math.sin(leaves[i][0]-leaves[i][2] * Math.PI / 540);
        var y = leaves[i][1]+ (leaves[i][2]/2)*(leaves[i][3]/50 +0.5)
         // if out of bounds, go back up
        if(y >= canvas.height){
            leaves[i][0] = Math.floor(Math.random() * canvas.width);
            leaves[i][1] = - img.height;
            leaves[i][2] = 0;
        }
        ctx.save();
        ctx.translate(x + img.width / 4,y + img.height / 4);
        ctx.rotate(leaves[i][2] * Math.PI / 540 + leaves[i][3]);
        ctx.drawImage(img, -img.width / 4, -img.height / 4);
        ctx.restore();
        
    }
    window.requestAnimationFrame(updatePosition);
}




//---------COUNTER FUNCTIONS-------------

//updates counter every 5 seconds
function loopTimer() {
    setInterval(function () {
        updateCount()
    }, 5000);
}

//Returns placeholder dowload number according to current time
function getCurCount() {
    var date = new Date();
    var time = date.getTime() / 1000;
    //always increasing function of time ensures that download numbers are consistent across page reloads and that the nummber steadily increases.
    var downloads = Math.ceil((1.5 * time + Math.abs(Math.sin(time)))) - 2446000000;
    return downloads;
}

//updates the counter element to display num amount of downloads
function display(num) {
    var date = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    var curMonth = months[date.getMonth()];
    counter.innerHTML = "As of " + curMonth + " " + date.getDate() + ", " + date.getFullYear() + ", we have reached over " + num.toLocaleString() + " Downloads!";
}

//calls many displays in quick succession to show the counter "counting up"
function updateCount() {

    curCount = getCurCount();
    for (let i = 0; i < (curCount - previousCount); i++) {
        let x = curCount + i;
        setTimeout(display, i * 100, x);

    }
    previousCount = curCount;
}


//Opens and closes modal
function openModal() {
    modal.style.display = "block";
}
function closeModal() {
    modal.style.display = "none";
}