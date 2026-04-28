function addToCalendar(){
  alert("Event added");
}

let input = document.getElementById("searchInput");

if(input){
input.addEventListener("keyup", function(){
let value = input.value.toLowerCase();

document.querySelectorAll(".event-card").forEach(card=>{
card.style.display =
card.textContent.toLowerCase().includes(value)
? "block" : "none";
});
});
}

let form = document.getElementById("contactForm");

if(form){
form.addEventListener("submit", function(e){
e.preventDefault();

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let box = document.getElementById("alertBox");

if(name === "" || email === ""){
box.innerHTML = "خطأ";
}
else{
box.innerHTML = "تم";
}
});
}