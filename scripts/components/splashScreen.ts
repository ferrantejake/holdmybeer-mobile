// Splash screen modularization

export function show() {
    console.log('show splash screen');
    navigator.splashscreen.show();
}

export function hide() {
    console.log('hide splash screen');
    navigator.splashscreen.hide();
}