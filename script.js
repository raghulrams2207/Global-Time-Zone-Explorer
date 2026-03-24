let interval;

const input = document.getElementById("input");
const suggestions = document.getElementById("suggestions");

// Countries → Timezones
const countries = {
"afghanistan":"Asia/Kabul",
"albania":"Europe/Tirane",
"algeria":"Africa/Algiers",
"argentina":"America/Argentina/Buenos_Aires",
"australia":"Australia/Sydney",
"austria":"Europe/Vienna",
"bangladesh":"Asia/Dhaka",
"belgium":"Europe/Brussels",
"brazil":"America/Sao_Paulo",
"canada":"America/Toronto",
"china":"Asia/Shanghai",
"denmark":"Europe/Copenhagen",
"egypt":"Africa/Cairo",
"finland":"Europe/Helsinki",
"france":"Europe/Paris",
"germany":"Europe/Berlin",
"greece":"Europe/Athens",
"india":"Asia/Kolkata",
"indonesia":"Asia/Jakarta",
"iran":"Asia/Tehran",
"iraq":"Asia/Baghdad",
"ireland":"Europe/Dublin",
"israel":"Asia/Jerusalem",
"italy":"Europe/Rome",
"japan":"Asia/Tokyo",
"kenya":"Africa/Nairobi",
"malaysia":"Asia/Kuala_Lumpur",
"mexico":"America/Mexico_City",
"morocco":"Africa/Casablanca",
"netherlands":"Europe/Amsterdam",
"new zealand":"Pacific/Auckland",
"nigeria":"Africa/Lagos",
"norway":"Europe/Oslo",
"pakistan":"Asia/Karachi",
"philippines":"Asia/Manila",
"poland":"Europe/Warsaw",
"portugal":"Europe/Lisbon",
"qatar":"Asia/Qatar",
"russia":"Europe/Moscow",
"saudi arabia":"Asia/Riyadh",
"singapore":"Asia/Singapore",
"south africa":"Africa/Johannesburg",
"south korea":"Asia/Seoul",
"spain":"Europe/Madrid",
"sri lanka":"Asia/Colombo",
"sweden":"Europe/Stockholm",
"switzerland":"Europe/Zurich",
"thailand":"Asia/Bangkok",
"turkey":"Europe/Istanbul",
"uae":"Asia/Dubai",
"uk":"Europe/London",
"united kingdom":"Europe/London",
"usa":"America/New_York",
"united states":"America/New_York",
"vietnam":"Asia/Ho_Chi_Minh",
"zimbabwe":"Africa/Harare"
};

// Suggestions
input.addEventListener("input", function(){

let value = input.value.toLowerCase();
suggestions.innerHTML = "";

if(value === "") return;

Object.keys(countries)
.filter(c => c.includes(value))
.slice(0,10)
.forEach(c => {

let div = document.createElement("div");
div.classList.add("suggestion");
div.innerText = c;

div.onclick = function(){
input.value = c;
suggestions.innerHTML = "";
};

suggestions.appendChild(div);

});

});

// Search function
function search(){

let value = input.value.toLowerCase().trim();
let tz = countries[value];

if(!tz){
document.getElementById("country").innerHTML = "Country Not Found!";
document.getElementById("timezone").innerHTML = "";
document.getElementById("time").innerHTML = "";
return;
}

// SHOW RESULT BOX
document.querySelector(".result").style.display = "flex";

// clear suggestions
suggestions.innerHTML = "";

// start clock
startClock(value, tz);

}

// Start Clock
function startClock(name, tz){

document.getElementById("country").innerHTML = name.toUpperCase();

clearInterval(interval);

interval = setInterval(function(){

let now = new Date();

let time = now.toLocaleTimeString("en-US",{timeZone:tz});
let date = now.toLocaleDateString("en-US",{timeZone:tz});

document.getElementById("time").innerHTML = time;
document.getElementById("timezone").innerHTML =
"Time Zone: " + tz + "<br>Date: " + date;

},1000);

}

// ⌨️ Enter key support
input.addEventListener("keypress", function(e){
if(e.key === "Enter"){
search();
}
});
