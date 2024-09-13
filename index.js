
function updateTime (){

let MiamiElement = document.querySelector("#Miami");
let MiamiDateElement = MiamiElement.querySelector(".date");
let MiamiTimeElement=MiamiElement.querySelector(".time");
let MiamiTime = moment().tz("America/New_York");

MiamiDateElement.innerHTML = MiamiTime.format("MMMM Do YYYY");
MiamiTimeElement.innerHTML=MiamiTime.format("h:mm:ss [<small>]A[</small>]");

let ParisElement = document.querySelector("#Paris");
let ParisDateElement = ParisElement.querySelector(".date");
let ParisTimeElement=ParisElement.querySelector(".time");
let ParisTime = moment().tz("Europe/Paris");

ParisDateElement.innerHTML = ParisTime.format("MMMM Do YYYY");
ParisTimeElement.innerHTML=ParisTime.format("h:mm:ss [<small>]A[</small>]");}

updateTime();
setInterval(updateTime, 1000);