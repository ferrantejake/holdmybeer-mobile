# holdmybeer-cordova

Setting Up Emulator:

1. Go to the following link: https://www.genymotion.com/fun-zone/ 
2. Download the personal emulator 
  -You will have to make an account with Genymotion
  -If you don't have VirtualBox already download the package that contains VB as well
3. Follow the onscreen instructions to install Genymotion
4. Open Genymotion and sign in to the account you made with them
5. This will pull up a list of all available emulators, choose Google Nexus 4 - 4.1.1 - API 16 - 768x1280
  -This is what I've seen a lot of people using online and it seems far enough back to ensure the app will work on most devices
6. You should now be able to click the start button and run the emulator


Installing the App onto the Emulator

1. Open a command prompt in the directory holdmybeer-cordova/
2. Run the following command:
       >ionic build android
3. This will take a while the first time but all subsequent builds will be much faster
4. Once the application finishes building it will store the .apk in the following file path:
       \holdmybeer\platforms\android\build\outputs\apk\android-debug.apk
5. Now, with the emulator already open, you can drag that .apk file directly onto the screen of the emulator and it will install it on the virtual device.
