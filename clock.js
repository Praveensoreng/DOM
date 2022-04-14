console.log("working");
function time(){
    let hours = document.querySelector("#hours");
    let minutes = document.querySelector("#minutes");
    let seconds = document.querySelector("#seconds");
    let amPm = document.querySelector("#ampm");

    let currentTime = new Date();
    let currentHrs = currentTime.getHours();
    let currentMins = currentTime.getMinutes();
    let currentSecs = currentTime.getSeconds();
    let currentAmPm = "AM";


if(currentHrs == 0){
    currentHrs = 12;
}
if(currentHrs > 12){
    currentHrs = currentHrs - 12;
    currentAmPm = "PM";
}
if(currentHrs < 10){
    currentHrs = "0" + currentHrs;
}
if(currentMins < 10){
    currentMins = "0" + currentMins;
}
if(currentSecs < 10){
    currentSecs = "0" + currentSecs;
}
hours.innerText = currentHrs;
minutes.innerText = currentMins;
seconds.innerText = currentSecs;
amPm.innerText = currentAmPm;


}

let oneSecond = 1000;
setInterval(time,oneSecond);