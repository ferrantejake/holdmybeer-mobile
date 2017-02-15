// Imports
import { splashScreen, connection, camera } from './components/index';

// Called when the application is started. Here is where we load the Cordova 
// application components. Once all of the Cordova components are loaded, we
// can then start the application by calling `onDeviceReady`, indicating the 
// device is ready.
export function initialize(): void {
    console.log('Loading device..');
    splashScreen.show();
    document.addEventListener('deviceready', onDeviceReady, false);
}

// Loads when the device has completely loaded the app. This is similar to
// the global associated with the main function in C or Java.
function onDeviceReady(): void {

    // Log that the device has been loaded correctly.
    console.log('Device ready');

    // Add event event listeners (look at onPause and onResume for more info).
    applyEventListeners();
}

function applyEventListeners() {
    document.addEventListener('pause', onPause, false);
    document.addEventListener('resume', onResume, false);
    document.getElementById('signInButton').addEventListener('click', removeSignIn);
    document.getElementById('facebook').addEventListener('click', login);
    document.getElementById('google').addEventListener('click', login);
    document.getElementById('myspace').addEventListener('click', login);
    document.getElementById('switchFriends').addEventListener('click', goToFriends);
    document.getElementById('switchRecommendations').addEventListener('click', goToRec);
    document.getElementById('goToCam').addEventListener('click', goToCamera);
    document.getElementById('camera').addEventListener('click', function (e) {
        navigator.camera.getPicture(onSuccess, onFail, {
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL
        }
        );
    });
}

// Indicates the user has left the application
function onPause(): void {
    console.log("The application has been paused");
    // TODO: This application has been suspended. Save application state here.
}

// Indicates the user has resumed the application.
function onResume(): void {
    console.log("The application has been resumed.");
    // TODO: This application has been reactivated. Restore application state here.
}

function removeSignIn() {
    document.getElementById('signIn').setAttribute('style', 'display:none;');
    document.getElementById('socialMedia').setAttribute('style', 'display:block;');
}

function login() {
    document.getElementById('socialMedia').setAttribute('style', 'display:none;');
    document.getElementById('cameraScreen').setAttribute('style', 'display:block;');
}

function goToFriends() {
    document.getElementById('cameraScreen').setAttribute('style', 'display:none;');
    document.getElementById('recommendations').setAttribute('style', 'display:none;');
    document.getElementById('friends').setAttribute('style', 'display:block;');
}

function goToRec() {
    document.getElementById('cameraScreen').setAttribute('style', 'display:none;');
    document.getElementById('recommendations').setAttribute('style', 'display:block;');
    document.getElementById('friends').setAttribute('style', 'display:none;');
}

function goToCamera() {
    console.log("clicked");
    document.getElementById('cameraScreen').setAttribute('style', 'display:block;');
    document.getElementById('recommendations').setAttribute('style', 'display:none;');
    document.getElementById('friends').setAttribute('style', 'display:none;');
}

function onSuccess(imageData) {
    var image = document.getElementById('myImage');
    (image as any).src = "data:image/jpeg;base64," + imageData;
}

function onFail(message) {
    alert('Failed because: ' + message);
}