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

    // Hide the splash screen
    setTimeout(splashScreen.hide, 3000);

    // Add event event listeners (look at onPause and onResume for more info).
    document.addEventListener('pause', onPause, false);
    document.addEventListener('resume', onResume, false);

    var parentElement = document.getElementById('deviceready');
    var listeningElement = parentElement.querySelector('.listening');
    var receivedElement = parentElement.querySelector('.received');
    listeningElement.setAttribute('style', 'display:none;');
    receivedElement.setAttribute('style', 'display:block;');

    // Reload all components (see helper function below);
    reloadComponents();
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

// Load the components for the application.
function reloadComponents() {
    connection.getConnectionType();
    camera.load();

    // Show some custom information
    const connectedElem = document.getElementById('connected');
    const connectionElem = document.getElementById('connection');
    const platformElem = document.getElementById('platform');

    connectedElem.innerText = connection.isConnected() ? "true" : "false";
    connectionElem.innerText = connection.getConnectionTypeAsString();
    platformElem.innerHTML = navigator.platform
}