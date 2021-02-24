//Imports
//import {database} from "./database.js";

//date and time System
var today = new Date(),
    month = today.getMonth(),
    monthDay = today.getDate(),
    year = today.getFullYear(),
    hours = today.getHours(),
    minutes = today.getMinutes(),
    seconds = today.getSeconds();
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var fullDate = monthDay + " " + months[month] + " " + year;
var tomorrow = monthDay + 1 + " " + months[month] + " " + year;


//pushAppointment();
//function pushAppointment(){
//    database.push({Date: fullDate, Send: "Hello my good sir how are you today"});
//    console.log(database[0]);
//    if(database[0].Date == fullDate){
//        alert("Email Send")
//        sendMail();
//    }
//}

//sendEmail System
//function sendMail() {
//    Email.send({
//        Host : "smtp.sendgrid.net",
//        Username : "apikey",
//        Password : "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",
//        //SecureToken : "595cd3b2-44c9-4539-9463-cdf39b022331",
//        To : 'juulstausholmoscar@gmail.com',
//        From : "juulstausholmoscar@gmail.com",
//        Subject : "Appointment " + fullDate,
//        Body : database[0].Send
//    }).then(
//    message => console.log(message)
//    );
//}