var trainInput;
var destinationInput; 
var timeInput; 
var frequencyInput; 

function employeeAdd() {
    $("#employee-text").append(
        "<tr>" +
        "<td>" + employeeInput + "</td>"
        + "<td>" + roleInput + "</td>"
        + "<td>" + dateInput + "</td>"
        + "<td>" + rateInput + "</td>"
        + "<td>" + rateInput + "</td>"
        
        + "</tr>"
    );
}

var firebaseConfig = {
    apiKey: "AIzaSyA-4RCOuX3lYGXJHqj7Q6a-6K_l7uN7xcU",
    authDomain: "train-scheduler-cb858.firebaseapp.com",
    databaseURL: "https://train-scheduler-cb858.firebaseio.com",
    projectId: "train-scheduler-cb858",
    storageBucket: "train-scheduler-cb858.appspot.com",
    messagingSenderId: "742211835570",
    appId: "1:742211835570:web:01d2a932fb98fc82"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

database = firebase.database()

database.ref().on("child_added", function (snapshot) {

    // if (snapshot.val().employee == undefined) {
    //     employeeInput = "Name";
    // } else {
    //     employeeInput = snapshot.val().employee
    // }


   
    trainInput = snapshot.val().train
    destinationInput = snapshot.val().destination
    timeInput = snapshot.val().time
    frequencyInput = snapshot.val().frequency


    

    // if (snapshot.val().employee == undefined) {
    //     roleInput = "Role";
    // } else {
    //     roleInput = snapshot.val().role
    // }

    //     if (snapshot.val().employee == undefined){
    //         dateInput = "Employee";
    //     }else{


    //     dateInput = snapshot.val().startdate
    //     }

    //     if (snapshot.val().employee == undefined){
    //         rateInput = "Rate";
    //     }else{
    //     rateInput = snapshot.val().monthly
    //     }
        // employeeAdd()

    });

$("body").on("click", "#submit", function () {

    trainInput = $("#trainName").val().trim();
    destinationInput = $("#destination").val().trim();
    timeInput = $("#time").val().trim();
    frequencyInput = $("#frequency").val().trim();

    console.log(trainInput)
    database.ref().push({

        train: trainInput,
        destination: destinationInput,
        time: timeInput,
        frequency: frequencyInput,
        
    })


});


console.log(moment().format())
moment("unixTimeStamp", "YYYYMMDD").fromNow();    
moment().add(10,'days').calendar();  