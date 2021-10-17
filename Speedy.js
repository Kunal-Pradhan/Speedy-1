if(window.addEventListener){
window.addEventListener('load', InitiateSpeedDetection, false);
}

else if(window.attachEvent){
window.attachEvent('onload', InitiateSpeedDetection);
}

function ShowProgressMessage(msg){
if(document.getElementById("progress")){
document.getElementById("progress").innerHTML = msg;
}
}

function showResultMessage(msg){
document.getElementById("result").innerHTML = msg;
}

function InitiateSpeedDetection(){
ShowProgressMessage("");
window.setTimeout(MeasureConnectionSpeed, 1);
};

function MeasureConnectionSpeed(){
alert("Calculating your internet speed...");
document.getElementById("test").style.animation="hide 0.7s ease-out";
setTimeout(()=>{
document.getElementById("test").style.display="none";
},669)
var startTime, endTime;
var download = new Image();
download.onload = function(){
endTime = (new Date()).getTime();
showResults();
}
download.onerror = function (){
if (confirm("No Internet!\n\rTry to turn on mobile data or Wi-Fi, then click 'OK' to test again.")){
history.go(0);
}
else{
document.getElementById("container").style.opacity="0";
document.getElementById("test2").style.opacity="1"; in
document.getElementById("no").style.right="62%";
document.getElementById("no").style.opacity="1";
document.getElementById("internet").style.left="40%";
document.getElementById("internet").style.opacity="1";
}
}
startTime = (new Date()).getTime();
var cacheBuster = "?nnn=" + startTime;
download.src = "https://4k-uhd.nl/wp-content/uploads/2018/08/4K-3840x2160-Wallpaper-Uitzicht-5.jpg" + cacheBuster;
function showResults(){
var duration = (endTime - startTime) / 1000;
showResultMessage("<center id='speed'>" + (((6000000 * 8 / duration).toFixed(2) / 1024).toFixed(2) / 1024).toFixed(2) + "</center>");
document.getElementById("title").innerHTML=(((6000000 * 8 / duration).toFixed(2) / 1024).toFixed(2) / 1024).toFixed(2) + " MBPS";
setTimeout(()=>{
document.getElementById("container").style.display="none";
},969)
document.getElementById("test").style.display="block";
document.getElementById("test").style.animation="show 0.7s ease-out";
setTimeout(()=>{
document.getElementById("test").style.opacity="0";
document.getElementById("test2").style.opacity="1";
},700)
document.getElementById("result").style.transform="translateY(0)";
document.getElementById("mbps").style.fontSize="345%";
document.getElementById("hr").style.width="90%";
document.getElementById("hr").style.opacity="1";
}
}

function refresh(){
setTimeout(()=>{
if (confirm("Download Speedy app") == true){
window.open("https://drive.google.com/u/2/uc?export=download&confirm=8zjo&id=1h05wht0idX0Z16GYrqKNGAmjxRp5Gr18")
}
else{
history.go(0)
}
},800)
}

if ('serviceWorker' in navigator){
navigator.serviceWorker
.register('sw.js')
}

let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) =>{
e.preventDefault();
deferredPrompt = e;
deferredPrompt.prompt();
deferredPrompt.userChoice.then((choiceResult) => {
deferredPrompt = null;
});
});