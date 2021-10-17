var counter;
var modal;
window.onload = function(){
    counter = document.getElementById('counter');
    modal = document.getElementById('donationSignUp')
    updateCount();
    loopTimer();
    
}

function loopTimer() {
    setInterval(function () {
        updateCount()
    }, 5000);
}

function updateCount() {

    var date = new Date();
    var time = date.getTime() / 1000;


    var downloads = Math.ceil((1.5*time + Math.abs(Math.sin(time)))) - 2446000000
    counter.innerHTML = "As of " + date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + ", we have reached over " + downloads.toLocaleString() + " Downloads!";
}

function openModal() {
    modal.style.display = "block";
}
function closeModal(){
    modal.style.display = "none";
}