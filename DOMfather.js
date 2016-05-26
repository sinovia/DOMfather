// Change font
document.body.style.fontFamily='Tahoma';

// Add my information

document.getElementById('fullname').innerHTML="Sinovia Mayfield";
document.getElementById("hometown").innerHTML="Little Rock, Arkansas";
document.getElementById("movie").innerHTML="The Prestige";
document.getElementById("food").innerHTML="Southern Soul food";

//


var LIarray= document.getElementsByTagName("li");
for (var i=0; i < LIarray.length; i++) {
  LIarray[i].setAttribute("class", "listItem");
  LIarray[i].style.color="red";
}


// Playing around with the Elements in this JS Fiddle helped me add the picture
//http://jsfiddle.net/snake/UPQqN/
var link = document.createElement("peekchure");
var img = document.createElement("img");
img.src = "http://i.imgur.com/FFQ5yCA.jpg";
link.appendChild(img);

document.body.appendChild(link);
