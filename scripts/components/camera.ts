

// Loads the camera plugin 
export function load() {
    console.log("load camera..");

    const camera_button = document.getElementById("camera");

    // Remove all current event listeners (avoid memory leak here)
    camera_button.removeEventListener('click', addCameraListener(camera_button));

    // Show image data on screen
    function onSuccess(imageData) {
        console.log('success');
        const image = document.getElementById('myImage');
        image.setAttribute('src', `data:image/jpeg;base64,${imageData}`);
        console.log(imageData);
    }

    // Shout errors
    function onFail(message) {
        console.log('Failed because: ' + message);
    }

    // Add event listener for camera button
    function addCameraListener(button: HTMLElement): EventListenerOrEventListenerObject {
        button.addEventListener('click', function (e) {
            console.log('Camera button has been clicked!');
            //console.log(navigator.camera.getPicture);
            navigator.camera.getPicture(onSuccess, onFail, {
                quality: 50,
            });
        });
        return null;
    };
}

