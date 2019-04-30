var config = {
    apiKey: "AIzaSyB5UpKy62SG-bWXU2dJ35B8pl_KI2gsH84",
    authDomain: "temperature-notification0.firebaseapp.com",
    databaseURL: "https://temperature-notification0.firebaseio.com",
    projectId: "temperature-notification0",
    storageBucket: "temperature-notification0.appspot.com",
    messagingSenderId: "585223755012"
  };
firebase.initializeApp(config);

firebase.auth.Auth.Persistence.LOCAL;
 
/*
$("#btn-login").click( function(){
    var email= $("email").val();
    var password = $("password").val();

    
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);

        // ...
      });
 
});*/

document.getElementById('btn-login').addEventListener('click',e => {
    //get Email and Pass
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email,pass);
    promise.catch(e => console.log(e.message));
});