var counter;
var modal;
var previousCount;
window.onload = function(){
    counter = document.getElementById('counter');
    modal = document.getElementById('donationSignUp');
    previousCount = getCurCount()-1;
    updateCount();
    loopTimer();
    
}

function loopTimer() {
    setInterval(function () {
        updateCount()
    }, 5000);
}

function getCurCount(){
    var date = new Date();
    var time = date.getTime() / 1000;
    //always increasing function of time ensures that download numbers are consistent across page reloads and that the nummber steadily increases.
    var downloads = Math.ceil((1.5*time + Math.abs(Math.sin(time)))) - 2446000000;
    return downloads;
}
function display(num){
    var date = new Date();
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    var curMonth = months[date.getMonth()];
    counter.innerHTML = "As of " + curMonth + " " + date.getDate() + ", " + date.getFullYear() + ", we have reached over " + num.toLocaleString() + " Downloads!";
}
function updateCount() {
    
    curCount = getCurCount();
    console.log("A: "+ (curCount-previousCount))
    for(let i = 0; i < (curCount-previousCount); i++){      
        let x = curCount + i;
        setTimeout(display,i*100,x);
        console.log("B: " + curCount)
        
    }
    previousCount = curCount;
}
function openModal() {
    modal.style.display = "block";
}
function closeModal(){
    modal.style.display = "none";
}