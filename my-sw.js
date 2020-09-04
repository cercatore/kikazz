importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase.js');
// importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');



firebase.initializeApp({
    apiKey: "AIzaSyCnfDtTBNv_W66cxLfmitf0oGsJkH49OVg",
    projectId: "969428577500",
    messagingSenderId: "969428577500"
});

const messaging = firebase.messaging();


// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// [START background_handler]
messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});