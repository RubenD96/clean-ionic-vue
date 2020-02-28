# Clean Ionic-Vue.js
This repository will supply you with a clean and working version of Ionic-Vue.

## Project setup
### Clone the project
```
git clone https://github.com/RubenD96/clean-ionic-vue.git
```
### Install plugins and compile dist
```
npm i
npm run build
```
### Add platforms
```
npx cap add android
npx cap add ios
```

## Run project
### Compiles and hot-reloads for development on browser
```
npm run serve
```

### Compiles and sync with installed platforms
```
npm run build; npx cap sync
```

### Run on mobile device
To run the application on a mobile device a user has to open their native code programming tool to compile the code for their device.
```
npx cap open android
npx cap open ios
```

## Install & Run application with Gradle
After the android folder has been created with
```
npm i
npm run build
```
Future builds can be created using Gradle by running the command
```
npm run android
```
Which runs the `android-install.bat`
