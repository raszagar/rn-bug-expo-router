# Bug in expo-router

Creating a project from scratch with expo, with the version of expo-router v4.0.17, the header is lost when navigating and then it goes blank.

Downgrading the version of expo-router to v3.5.23 works fine.

### Steps to create the app

~~~bash
npx create-expo-app@latest ./
npm run reset-project
~~~

### Run the application

~~~bash
npx expo start
~~~

Navigate through the routes with the first button 4 or 5 times

\* Happens on Android (tested on a physical device), does not happen on the web
  