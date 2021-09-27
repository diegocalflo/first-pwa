let url = window.location.href;
let swDirect = "/miRepositorio/sw.js"

if(navigator.serviceWorker){
    console.log("SW Available");

    if (url.includes('localhost')) {
        swDirect = '/sw.js';
    }
    navigator.serviceWorker.register('/sw.js');
}else {
    console.log('SW Not Available');
}