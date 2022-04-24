/*
Give the service worker access to Firebase Messaging.
Note that you can only use Firebase Messaging here, other Firebase libraries are not available in the service worker.
*/
importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-messaging.js');

/*
Initialize the Firebase app in the service worker by passing in the messagingSenderId.
* New configuration for app@pulseservice.com
*/
firebase.initializeApp({
  apiKey: "AIzaSyBeH64WMUm4zwHY38Ie7rvRNb9gJkaAV44",
  authDomain: "push-b091c.firebaseapp.com",
  projectId: "push-b091c",
  storageBucket: "push-b091c.appspot.com",
  messagingSenderId: "220900655264",
  appId: "1:220900655264:web:ee92fe42276b88799549c5",
  measurementId: "G-SC2KPJCLJR"
});

/*
Retrieve an instance of Firebase Messaging so that it can handle background messages.
*/
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload,
  );
  /* Customize notification here */
  const notificationTitle = "Background Message Title";
  const notificationOptions = {
    body: "Background Message body.",
    icon: "/itwonders-web-logo.png",
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions,
  );
});
