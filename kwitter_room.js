
var firebaseConfig = {
  apiKey: "AIzaSyCt5nJeS1yz1houkr8owSzOlKCiuZaFd68",
  authDomain: "project-94-c7083.firebaseapp.com",
  projectId: "project-94-c7083",
  storageBucket: "project-94-c7083.appspot.com",
  messagingSenderId: "751583970122",
  appId: "1:751583970122:web:a55e307efc609fa6ceb7b3"
};

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',function(snapshot) { document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {
childKey = childSnapshot.key;
Room_names = childKey;
  console.log("Room Name - " + Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
  document.getElementById("output").innerHTML += row;
});});}
getData();

function redirectToRoomName(Name)
{
  console.log(Name);
  localStorage.setItem("room_name", Name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}