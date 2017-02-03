define(["require", "exports", "./components/index"], function (require, exports, index_1) {
    "use strict";
    // Called when the application is started. Here is where we load the Cordova 
    // application components. Once all of the Cordova components are loaded, we
    // can then start the application by calling `onDeviceReady`, indicating the 
    // device is ready.
    function initialize() {
        console.log('Loading device..');
        index_1.splashScreen.show();
        document.addEventListener('deviceready', onDeviceReady, false);
    }
    exports.initialize = initialize;
    // Loads when the device has completely loaded the app. This is similar to
    // the global associated with the main function in C or Java.
    function onDeviceReady() {
        // Log that the device has been loaded correctly.
        console.log('Device ready');
        // Hide the splash screen
        setTimeout(index_1.splashScreen.hide, 3000);
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
    function onPause() {
        console.log("The application has been paused");
        // TODO: This application has been suspended. Save application state here.
    }
    // Indicates the user has resumed the application.
    function onResume() {
        console.log("The application has been resumed.");
        // TODO: This application has been reactivated. Restore application state here.
    }
    // Load the components for the application.
    function reloadComponents() {
        index_1.connection.getConnectionType();
        index_1.camera.load();
        // Show some custom information
        var connectedElem = document.getElementById('connected');
        var connectionElem = document.getElementById('connection');
        var platformElem = document.getElementById('platform');
        connectedElem.innerText = index_1.connection.isConnected() ? "true" : "false";
        connectionElem.innerText = index_1.connection.getConnectionTypeAsString();
        platformElem.innerHTML = navigator.platform;
    }
});
//# sourceMappingURL=application.js.map