// Internet connection abstraction
define(["require", "exports"], function (require, exports) {
    "use strict";
    // Load internet connection type. Do something if there is no internet connection.
    function getConnectionType() {
        var networkState = navigator.connection.type;
        var states = {};
        states[Connection.UNKNOWN] = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI] = 'WiFi connection';
        states[Connection.CELL_2G] = 'Cell 2G connection';
        states[Connection.CELL_3G] = 'Cell 3G connection';
        states[Connection.CELL_4G] = 'Cell 4G connection';
        states[Connection.CELL] = 'Cell generic connection';
        states[Connection.NONE] = 'No network connection';
        console.log('Internet connection:', networkState);
        return networkState;
    }
    exports.getConnectionType = getConnectionType;
    function getConnectionTypeAsString() {
        var networkState = navigator.connection.type;
        var states = {};
        states[Connection.UNKNOWN] = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI] = 'WiFi connection';
        states[Connection.CELL_2G] = 'Cell 2G connection';
        states[Connection.CELL_3G] = 'Cell 3G connection';
        states[Connection.CELL_4G] = 'Cell 4G connection';
        states[Connection.CELL] = 'Cell generic connection';
        states[Connection.NONE] = 'No network connection';
        console.log('Internet connection:', networkState);
        return states[networkState];
    }
    exports.getConnectionTypeAsString = getConnectionTypeAsString;
    function isConnected() {
        var connection = getConnectionType();
        return (connection === Connection.NONE || connection == Connection.UNKNOWN) ? false : true;
    }
    exports.isConnected = isConnected;
});
//# sourceMappingURL=connection.js.map