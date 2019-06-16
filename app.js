var trainInput;
var destinationInput;
var timeInput;
var frequencyInput;

function trainAdd() {
    $("#employee-text").append(
        "<tr>" +
        "<td>" + trainInput + "</td>"
        + "<td>" + destinationInput + "</td>"
        + "<td>" + timeInput + "</td>"
        + "<td>" + frequencyInput + "</td>"
        + "<td>" + timeInput + "</td>"
        + "</tr>"
    );
}




// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBAq-ncA6gwPqsd218TSijIyPuCj9X3tpE",
    authDomain: "train-scheduler-d1220.firebaseapp.com",
    databaseURL: "https://train-scheduler-d1220.firebaseio.com",
    projectId: "train-scheduler-d1220",
    storageBucket: "train-scheduler-d1220.appspot.com",
    messagingSenderId: "744323586617",
    appId: "1:744323586617:web:f09dcc278d383fb6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


database = firebase.database()

database.ref().on("child_added", function (snapshot) {
    // console.log(snapshot)

    trainInput = snapshot.val().train
    destinationInput = snapshot.val().destination
    timeInput = snapshot.val().time
    frequencyInput = snapshot.val().frequency


    trainAdd()

});

$("body").on("click", "#submit", function () {

    trainInput = $("#trainName").val().trim();

    destinationInput = $("#destination").val().trim();

    timeInput = $("#time").val().trim();

    frequencyInput = $("#frequency").val().trim();

    if (trainInput == "" || destinationInput == "" || timeInput == "" || frequencyInput == "") {
        alert("you complete all fields")
    } else {
        database.ref().push({

            train: trainInput,
            destination: destinationInput,
            time: timeInput,
            frequency: frequencyInput

        })

    }
});


// console.log(moment().format())
// moment("unixTimeStamp", "YYYYMMDD").fromNow();    
// moment().add(10,'days').calendar();  