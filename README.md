# React native starter
Whenever i wanted to start a new react native project i was always in doubt about where to start.
There are some very good free starter libraries out there, like [Ignite](https://github.com/infinitered/ignite) or [React Native Starter](https://github.com/ueno-llc/react-native-starter) but none were to my liking 100%. So this is my own take on a starter project.  
  
There are those for which you pay a couple of dolars like [React Native Starter](https://reactnativestarter.com/), [Native Ting App](https://market.nativebase.io/view/react-native-ting-app).  
[Expo](https://expo.io/) was out of the question as i wanted to have a react-native-cli app. 
  
I wanted to build one for me for my own productivity, and if it can help some of you guys then cool :sunglasses:

### Disclaimer
The starter does not provide any specific ui code which you can reuse, is ment to be a code scaffold to help you start fast.\
I am using JavaScript, but do plan to switch to Typescript in a later build.

### Instalation 
:exclamation: Before starting make sure you [follow the official steps to have React Native working on your machine](https://facebook.github.io/react-native/docs/getting-started)
```bash
  $ git clone https://github.com/marius4896/react-native-starter <folder_name>
  $ cd <folder_name>
  $ npm install
  $ react-native run-ios
  $ react-native run-android
```

### Packages ( and versions ) 
- [React Native](https://facebook.github.io/react-native/) - **59.9**
- [React Navigation](https://reactnavigation.org/) - **3.11.0** also  ( [react-native-gesture-handler](https://github.com/kmagiera/react-native-gesture-handler) and [react-native-screens](https://github.com/kmagiera/react-native-screens_) )
- [Redux](https://redux.js.org/) - **4.0.1**
- [React-redux](https://github.com/reduxjs/react-redux) - **7.1.0**
- [Redux-Saga](https://github.com/redux-saga/redux-saga) - **1.0.4**
- [Async Storage](@react-native-community/async-storage) - **1.5.0** - *as React native plans to depricate it from the core*

### Folder Structure
All the magic happens in the `/src/` folder where all the files are stored

- **src/components** - the place for reusable components - mostly UI ( ex:  Button, Row, Column )
- **src/config** - configuration files, related to the way the app as a whole functions
- **src/helpers** - the place to store functions to reuse all over the app
- **src/navigation** - store navigation files. Best practice is to split different navigation sections into their own files to be ease to find and adjust them
- **src/redux** - the place to store all your reducers, actions and types as well as the createStore logic. I am unsing [ApiSauce](https://github.com/infinitered/apisauce) and [ReduxSauce](https://github.com/infinitered/reduxsauce) to help with the process. Big shout out to them
- **src/sagas** - the place for saga used in the redux-saga flow
- **src/screens** - each "page" of the application goes here. Namig convetion "NameScreen".
- **src/screens/styles** - styles for each of the screens ( to keep things separate ) 
- **src/services** - api connections and other useful actions. 
- **src/theme** - styles, measures, images and colors used in the entire app.


### Next Steps
[ ] More documentation
