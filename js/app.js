(funtion() {

// Initialize Firebase
    var config = {
      apiKey: "AIzaSyDDahul-ML9670Hw4fBhG8MCosixAw86fA",
      authDomain: "jessicas-website.firebaseapp.com",
      databaseURL: "https://jessicas-website.firebaseio.com",
      projectId: "jessicas-website",
      storageBucket: "",
      messagingSenderId: "277398527548"
    };

    firebase.initializeApp(config);

    var bigOne = document.getElementById('bigOne');
    var dbRef = firebase.database().ref('text');

    dbRef.on('value', snap => bigOne.innerText = snap.val());

}());