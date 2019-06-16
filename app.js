var trainInput;
var destinationInput;
var timeInput;
var frequencyInput;
var currentTime = moment();
var timeConverted;
var timeDifference;
var remainder;
var howMuchLonger;
var arrival;
var arrivalText;

function trainAdd() {
    $("#employee-text").append(
        "<tr>" +
        "<td>" + trainInput + "</td>"
        + "<td>" + destinationInput + "</td>"
        + "<td>" + frequencyInput + "</td>"
        + "<td>" + arrivalText + "</td>"
        + "<td>" +  howMuchLonger + "</td>"
        + "</tr>"
    );
    console.log(remainder)
}

function getTime(){
    // var tFrequency = 18;
    
    // var timeTester = "11:30"; 
    
    
    timeConverted = moment(timeInput,"HH:mm").subtract(1,"years");
    
    console.log(moment(timeConverted).format("hh:mm"))
    
    console.log("current time: " + moment(currentTime).format("hh:mm"));
    
    timeDifference = moment().diff(moment(timeConverted), "minutes");
    
    console.log(timeDifference)
    
    remainder = timeDifference % frequencyInput;
    console.log(remainder)
    
    howMuchLonger = frequencyInput - remainder;
    console.log(howMuchLonger)
    
    arrival = moment().add(howMuchLonger, "minutes");
    
    
    arrivalText = moment(arrival).format("hh:mm");
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
$( document ).ready(function() {
    console.log( "ready!" );


database.ref().on("child_added", function (snapshot) {
    // console.log(snapshot)

    trainInput = snapshot.val().train
    destinationInput = snapshot.val().destination
    timeInput = snapshot.val().time
    frequencyInput = snapshot.val().frequency
    console.log(timeInput)
   
    getTime(timeInput)
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


});
 
