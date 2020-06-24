/*
    Author : Muthana Khdaier
    file name: script.js
    06/15/2020
 */

window.onload = function () {
    todayDate();
    setUpEvents();
    createButton();
    var totalPoint = 0;
    var pText = document.getElementById("display");
    var buttonCalculate = document.getElementById("button_Calculate");
    buttonCalculate.addEventListener("click",function(e){
      totalPoint += getTable();
        pText.textContent= "My Value is " + totalPoint + ". Thank you, I appricate your evaluation";
    });


}


//inside the function below we should put the functions that we want them to execute after loading the page directly
// requirement #2
function setUpEvents() {
    function currentTime() {
        var date = new Date(); /* creating object of Date class */
        var hour = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();
        var midday = "AM";
        midday = (hour >= 12) ? "PM" : "AM"; /* assigning AM/PM */
        hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12) : hour); /* assigning hour in 12-hour format */
        hour = updateTime(hour);
        min = updateTime(min);
        sec = updateTime(sec);

        // now we need to display the clock inside clock div
        //Requirement #3.a.1
        document.getElementById("clock").innerHTML = hour + " : " + min + " : " + sec + " " + midday; /* adding time to the div */
        var t = setTimeout(currentTime, 1000); /* setting timer */

    }
  //============================================================================================================










    function updateTime(k) { /* appending 0 before time elements if less than 10 */
        if (k < 10) {
            return "0" + k;
        }
        else {
            return k;
        }
    }
    currentTime();
    // store clock div inside a variable
    // Requirement #3.a.2
    var clock = document.querySelector("#clock");
    var clock_cover = document.getElementById("clock-cover");
    clock_cover = clock;

}

//==========================================================================================================

function rotate() {
    var img = document.getElementById('my-pic');
    img.setAttribute('style', 'transform:rotate(100deg)');
}
my - pic.addEventListener(onclick, rotate());
//===========================================================================================================
function todayDate() {
    var date = new Date();
    document.getElementById("todayDate").innerHTML = date.toDateString();
}

//==========================================================================================================
// create the button Contact To Me
function createButton(){
// create DIV tag on HTML to append the content in DIV.
var divContactToMe = document.getElementById("buttonContactToMe"); //take id from DIV tag.
var buttonContactToMe = document.createElement("input");

buttonContactToMe.setAttribute("type", "button");
buttonContactToMe.setAttribute("id", "buttonContact");
buttonContactToMe.setAttribute("value", "Contact To Me");
buttonContactToMe.addEventListener("click", function (e) {
   
    alert("Please, you can contact my phone number and email. My Phone Number: 4250072222. My email: muthana@gmail.com");
});

divContactToMe.append(buttonContactToMe);
console.log(divContactToMe);

}

//============================================================================================================
//call Table
function getTable(){

    var display = document.getElementById("display").innerText;
    var getStar = 0;

    var checkboxSkill = document.querySelectorAll('input[class="checkbox_skill"]');
    for (var i = 0; i < checkboxSkill.length; i++) {
        if (checkboxSkill[i].checked == true) {
            getStar += checkboxSkill[i].value;
            display += " ," + checkboxSkill[i].name;
        }
    }

    var radioTypeOfWorking = document.getElementsByClassName("radio_typeOfWorking");
    for (var i = 0; i < radioTypeOfWorking.length; i++) {
        if (radioTypeOfWorking[i].checked == true) {
            display += " ," + radioTypeOfWorking[i].name;
        }
    }

    var quantity = parseInt(document.querySelector('select[name="qty"]').value);
    var totalPoint = getStar * quantity 

    // to create a table to dipslay checkbox, radio that user checked.  
    var tableEvaluation = document.getElementById("diplayEvaluation");
    var trTable = document.createElement("tr");
    var tdTitle = document.createElement("td");
    
   return totalPoint;
}
//===================================================================================================

