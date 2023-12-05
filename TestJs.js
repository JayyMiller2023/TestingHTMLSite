function buttonPress() {
    
    alert("Test 12: button Press")

}

function Forloop() {

    var CurrentTime = 10;
    for (var i = 1; i < 12; i++) {
 
        setTimeout(function () {
            document.getElementById("Countdown").innerHTML = "Time left: " + CurrentTime;
            CurrentTime = CurrentTime - 1;
        }, 1000 * i);
    }
}

function Doloop() {
    var i = 1;
    var CurrentTime = 10;
    alert("dhfshsuifhw");
    do 
    {
        setTimeout(function() {
            document.getElementById("Countdown2").innerHTML = "Time left: " + CurrentTime;
            CurrentTime = CurrentTime - 1;
        }, 1000*i);
        i++;
    } while(i < 12)
}

function strings() 
{
    var typeface = document.getElementById("testName").value;
    document.getElementById("testNamedisplay").innerHTML = "Your input: " + typeface;
    
    var in1 = document.getElementById("Input1").value;
    var in2 = document.getElementById("Input2").value;

    var Out = in1 + in2;
    var lenout = Out.length;
    document.getElementById("Output").innerHTML = "Test #16: Concatenate: amount: " + lenout;
    var Out2 = in1.substring(0,4);
    document.getElementById("Output2").innerHTML = "Test #17: Substring: " + Out2;
    var Out3 = in1.replace(/qwer/, "OOPS")
    document.getElementById("Output3").innerHTML = "Test #18: Replacement: " + Out3;
    var Out4 = Out3.toLowerCase();
    document.getElementById("Output4").innerHTML = "Test #19: Changing Caps: " + Out4;
    var Out5 = Out3.replace(/qwer/g, "OOPs");
    document.getElementById("Output5").innerHTML = "Test #20: Modified Replacement: " + Out5;
    var Out6 = in1.split("")
    document.getElementById("Output6").innerHTML = "Test #21: S P L I T: " + Out6;
    var Out7 = Out6.reverse();
    document.getElementById("Output7").innerHTML = "Test #22: esreveR: " + Out7;
    var Out8 = in1;
    var reverse = "";
    for (i= Out8.length-1; i >= 0; i--){
        reverse += Out8[i];
    }
    document.getElementById("Output8").innerHTML = "Test #22: esreveR V2: " + reverse;
}

function changeButton() {
    var button = document.getElementById("myButton");
    button.style.width = 500 + "px";
    button.textContent = "Test #23: Button Change"
}

function checkCreds() {
    var Name = document.getElementById("name").value;
    var City = document.getElementById("city").value;
    var Bnum = document.getElementById("badge").value;

    if (Name.length > 0) {
        alert("Test #24 - 26: login")
        if (Bnum > 99 && Bnum < 1000) {
        }
        else{
            alert("Invalid!")
        }
    }
    else
    {
        alert("invalid!")
    }
}

function startSound() 
{
    mySound = new sound("Audio/hey.mp3");
    mySound.play();

    document.getElementById("Stopthing").disabled = false;
    document.getElementById("Startthing").disabled = true;

}

function sound(src)
{
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.play = function()
    {
        this.sound.play()
    }
 
}

function stopSound(){
    window.location.reload();

    document.getElementById("Startthing").disabled = false;
    document.getElementById("Stopthing").disabled = true;

}