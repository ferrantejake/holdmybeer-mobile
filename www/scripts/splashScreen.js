// Splash screen modularization
define(["require", "exports"], function (require, exports) {
    "use strict";
    function show() {
        console.log('show splash screen');
        navigator.splashscreen.show();
    }
    exports.show = show;
    function hide() {
        console.log('hide splash screen');
        navigator.splashscreen.hide();
    }
    exports.hide = hide;
});
//# sourceMappingURL=splashScreen.js.map