// Change Text Color Every sec for Hi!
const hi = document.getElementById("change-color") ;
const colors = ["#3C6148", "#E0887E", "#A8C788", "#E6CB63"];

let currentColor = 0 ;

function changeColor() {
    hi.style.color = colors[currentColor];
    currentColor = (currentColor + 1) % colors.length;
}

setInterval(changeColor, 1000) ;

hi.style.color = colors[currentColor] ;


// Alert Text for "welcome" prompt name
function welcome() {
    let text;
    let person = prompt("Please enter your name:", "");
    if (person == null || person == "") {
        text = "Well, Well, Well,<br><b>WHO ARE YOU ?</b><br> Nevermind, welcome to my world<br>Please scroll down to see more about ME :)";
    } else {
        text = "Well, Hello<br>" + "<b>" + person + " !</b><br>" + "Welcome Welcome<br>Please scroll down to see more about ME :)"
    }
    document.getElementById("welcome").innerHTML = text;
}
window.onload = welcome ;


// On Mouse Over Event for profile image - image change and text appear.

function profileChange() {
    document.getElementById("profile").src = "img/pear-profile.jpg"
    document.getElementById("profileText").innerHTML = "It's Me"
}

function profileReturn() {
    document.getElementById("profile").src = "img/pear.png"
    document.getElementById("profileText").innerHTML = ""
}



// ChangeText in about - Below is lists of love item and hobbies list
let loveItems = ["Dog 🐶", "Cat 🐱", "Pig 🐷", "Harry Potter ⚡️", "Eating 🍔", "Baking 👩🏻‍🍳", "Playing Games 🎮", "Travelling 🧳"]
let hobbyLists = ["Watch movies, series, and cartoon 🍿", "Sleep 💤", "Play Games 🎮"] 
// ChangeText in about - Print text about things I love
function loveThings() {
    document.getElementById("about-changetext").innerHTML = "I LOVE.. <br>" 
    + loveItems[0] + " and " + loveItems[1] + ". I have a Border Collie named Putin (see more about him below), but I also love cats—sadly, I'm allergic to them.😢 <br>"
    + "I'm a huge " + loveItems[3] + " fan - definitely a Potterhead! <br>" 
    + "I also love " + loveItems[2] + ", " + loveItems[4] + ", " + loveItems[5] + ", " + loveItems[6] + ", " + "and " + loveItems[7] + " with my family.";
}
// ChangeText in about - print text about my hobbies
function hobbies() {
    document.getElementById("about-changetext").innerHTML = "When I'm in my spare time, I like to.. <br>"
    + hobbyLists.join(", ") + "<br>" + " My favourite movies are " + loveItems[3] + " and Detective Conan 🔎 <br>"
    + "My game collection includes Stardew Valley 🐓, Hogwarts Legacy, Don't Starve Together, and Oxygen Not Included." ;
}
// ChangeText in about - Background
function myBackground() {
    document.getElementById("about-changetext").innerHTML = "Originally from Bangkok, Thailand, I’m now in Toronto chasing my goals.<br>After studying Visual Arts and working as a graphic designer, I’m diving into Multimedia Design and Development at Humber Polytechnic. Excited for what’s next! 🎨✨" ;
}


// On Mouse Over Event for Dog image - image change and text appear.

// Dog1
function dogChange1() {
    document.getElementById("dog1").src = "img/dog-change1.png"
    document.getElementById("dogText1").innerHTML = "Enjoy soaking in W A T E R ~ 💦"
}

function dogReturn1() {
    document.getElementById("dog1").src = "img/dog-putin1.png"
    document.getElementById("dogText1").innerHTML = ""
}

// Dog2
function dogChange2() {
    document.getElementById("dog2").src = "img/dog-change2.png"
    document.getElementById("dogText2").innerHTML = "This is my M O M 💓"
}

function dogReturn2() {
    document.getElementById("dog2").src = "img/dog-putin2.png"
    document.getElementById("dogText2").innerHTML = ""

}

// Dog3
function dogChange3() {
    document.getElementById("dog3").src = "img/dog-change3.png"
    document.getElementById("dogText3").innerHTML = "With my H O O M A N 👩🏻"

} 

function dogReturn3() {
    document.getElementById("dog3").src = "img/dog-putin3.png"
    document.getElementById("dogText3").innerHTML = ""
}

// Dog4
function dogChange4() {
    document.getElementById("dog4").src = "img/dog-change4.png"
    document.getElementById("dogText4").innerHTML = "Am I fit ? 😬"
}

function dogReturn4() {
    document.getElementById("dog4").src = "img/dog-putin4.png"
    document.getElementById("dogText4").innerHTML = ""
}

// Dog5
function dogChange5() {
    document.getElementById("dog5").src = "img/dog-change5.png"
    document.getElementById("dogText5").innerHTML = "OOH! D E L I C I O U S ! 🤤"
}

function dogReturn5() {
    document.getElementById("dog5").src = "img/dog-putin5.png"
    document.getElementById("dogText5").innerHTML = ""
}
