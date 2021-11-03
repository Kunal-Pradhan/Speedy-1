if ('serviceWorker' in navigator){
navigator.serviceWorker
.register('Cache.js')
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

var acceleration = new Accelerometer({frequency: 60});
acceleration.start();
acceleration.addEventListener('reading',()=>{
document.getElementById("result").style.transform="translateX(" + acceleration.x*9 + "px)";
document.getElementById("test").style.transform="translateY(" + acceleration.z*3 + "px)";
document.getElementById("test2").style.transform="translateY(" + acceleration.z*3 + "px)";
});