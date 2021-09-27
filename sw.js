console.log('sw: hello');

self.addEventListener('install', (event) =>{
    console.log('ServiceWorker installed');
});

self.addEventListener('activate', (event) =>{
    console.log('ServiceWorker activated & controlling app');
});

self.addEventListener('fetch', (event) => {

    // if (event.request.url.includes('.jpg')) {
    //     let newResp = fetch('/image/mango.jpg')

    //     console.log('Image');
    //     event.respondWith(newResp);
    // }

    if (event.request.url.includes('page.css')) {

        let newResponse = new Response(`body{
            background-color: tomato !important;
            color: white;
        }`, {
            headers:{
                'Content-Type':'text/css'
            }
        });
        event.respondWith(newResponse);
    }
});

