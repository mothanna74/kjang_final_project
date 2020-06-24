
document.getElementById("p1").innerHTML="<p> Lots of folks out there want to learn to fix cars, but don’t" +
    " know " + "how. Fear not, clean-handed folks, for we have the answer to how you can get greasy and smelly just " +
    "like us!</p>";

var p2 = document.getElementById("p2");
var add = document.getElementById("add");
add.addEventListener("click", addParagrph);

function addParagrph(){
    document.getElementById("p2").innerHTML="<p> I walk around town in greasy pants, torn shirts, ripped " +
        "shoes, and grease all over my arms and face. And I drive a ratty old Jeep truck. Most people think I’m a " +
        "hobo. It’s great! And I’m sure you’re thinking “Man, I wish people thought I was a hobo.” Well, we can " +
        "help with that!</p>";
}
//====================================== Requirement 4 ============================================================

var section_1 = document.getElementById("section-1");
var section_2 = document.getElementById("section-2");
var section_3 = document.getElementById("section-3");

document.getElementById("section-1").addEventListener("keypress",changeAllDivColor );
document.getElementById("section-1").addEventListener("keyup", reAllDivColor);
document.getElementById("section-1").addEventListener("mouseenter", changeColor1);
document.getElementById("section-1").addEventListener("mouseleave", reColor1);


function changeColor1(){
    document.getElementById("section-1").style.backgroundColor = "rgba(0, 172, 238, 0.98)";
}
function reColor1(){
    document.getElementById("section-1").style.backgroundColor = "rgba(0, 172, 238, 0.6)";
}



document.getElementById("section-2").addEventListener("mouseenter", changeColor2);
document.getElementById("section-2").addEventListener("mouseleave", reColor2);

function changeColor2(){
    document.getElementById("section-2").style.backgroundColor = "rgba(218, 23, 23, 0.92)";
}
function reColor2(){
    document.getElementById("section-2").style.backgroundColor = "rgba(218, 23, 23, 0.56)";
}



document.getElementById("section-3").addEventListener("mouseenter", changeColor3);
document.getElementById("section-3").addEventListener("mouseleave", reColor3);

function changeColor3(){
    document.getElementById("section-3").style.backgroundColor = "rgba(255, 222, 173, 0.98)";
}
function reColor3(){
    document.getElementById("section-3").style.backgroundColor = "rgba(255, 222, 173, 0.77)";
}

function changeAllDivColor() {
    document.getElementById("section-1").style.backgroundColor = "rgba(0, 172, 238, 0.98)";
    document.getElementById("section-2").style.backgroundColor = "rgba(218, 23, 23, 0.92)";
    document.getElementById("section-3").style.backgroundColor = "rgba(255, 222, 173, 0.98)";
}
function reAllDivColor() {
    document.getElementById("section-1").style.backgroundColor = "rgba(0, 172, 238, 0.6)";
    document.getElementById("section-2").style.backgroundColor = "rgba(218, 23, 23, 0.56)";
    document.getElementById("section-3").style.backgroundColor = "rgba(255, 222, 173, 0.77)";
}


//===================================== Requirement 5 =============================================================

var createLi =document.createElement("li");
createLi.innerHTML="<h4>javaScript</h4>";

var createLi1 =document.createElement("li");
createLi1.innerHTML="<h4>HTML</h4>";

var createLi2 =document.createElement("li");
createLi2.innerHTML="<h4>CSS</h4>";

var createLi3 =document.createElement("li");
createLi3.innerHTML="<h4>Database</h4>";


var skillMenu =document.getElementsByTagName("ul")[1];
document.getElementById("addSkill").addEventListener("click", addSkills);
function addSkills(){
    skillMenu.appendChild(createLi);
    skillMenu.appendChild(createLi1);
    skillMenu.appendChild(createLi2);
    skillMenu.appendChild(createLi3);
}
document.getElementById("removeSkill").addEventListener("click", removeSkill);
function removeSkill() {
skillMenu.removeChild(createLi3);
}


var myBackground= document.getElementById("body"),
 images =[ "../Images/background_2.jpeg","../Images/background_3.jpeg","../Images/background_4.jpeg",
    "../Images/background_5.jpeg"],
 randomNum=Math.floor(Math.random()*images.length);

function changeBackgroundImage( myBackground,images) {

    setInterval(function () {
    myBackground.src =images[randomNum];
    }, 3000)
}
changeBackgroundImage( myBackground,images);



//==============================================================================================================

