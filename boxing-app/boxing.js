var Boxer1109 = document.querySelector("#ten91");
var Boxer1108 = document.querySelector("#ten81");
var Boxer1107 = document.querySelector("#ten71");
var Boxer2109 = document.querySelector("#ten92");
var Boxer2108 = document.querySelector("#ten82");
var Boxer2107 = document.querySelector("#ten72");
var boxer1UserPoints = document.querySelector("#boxer1UserPoints");
var boxer2UserPoints = document.querySelector("#boxer2UserPoints");
var whatRound = document.querySelector("#roundNumber");
var boxer1Name = document.querySelector("#boxer1Name");
var boxer2Name = document.querySelector("#boxer2Name");
var roundStatus = document.querySelector("#roundStatus");
var meatOfCard = document.querySelectorAll(".userOptions");
var changeTotalPoints = document.querySelectorAll(".totalPointsHeader");



boxer1Name.innerHTML = "Manny Pacquaio";
boxer2Name.innerHTML = "Keith Thurman";

boxer1Name = "Manny Pacquaio";
boxer2Name = "Keith Thurman";


var boxer1 = 0;
var boxer2 = 0;
var startingRound = 1;
var finalBoxer1 = 0;
var finalBoxer2 = 0;



Boxer1109.addEventListener('click', function(){
    boxer1 += 10;
    boxer2 += 9;
    displayUserPoints();
    increaseRound();
    fightIsOver();
    // alert("Voted 10-9 for Pacquaio");
});

Boxer1108.addEventListener('click', function(){
    boxer1 += 10;
    boxer2 += 8;
    displayUserPoints();
    increaseRound();
    fightIsOver();

    // alert("Voted 10-8 for Pacquaio");
});

Boxer1107.addEventListener('click', function(){
    boxer1 += 10;
    boxer2 += 7;
    displayUserPoints();
    increaseRound();
    fightIsOver();

    // alert("Voted 10-7 for Pacquaio");
});

Boxer2109.addEventListener('click', function(){
    boxer1 += 9;
    boxer2 += 10;
    displayUserPoints();
    increaseRound();
    fightIsOver();

    // alert("Voted 10-9 for Thurman");
});

Boxer2108.addEventListener('click', function(){
    boxer1 += 8;
    boxer2 += 10;
    displayUserPoints();
    increaseRound();
    fightIsOver();

    // alert("Voted 10-8 for Thurman");
});

Boxer2107.addEventListener('click', function(){
    boxer1 += 7;
    boxer2 += 10;
    displayUserPoints();
    increaseRound();
    fightIsOver();

    // alert("Voted 10-7 for Thurman");
});

function displayUserPoints(){
    boxer1UserPoints.innerHTML = boxer1;
    boxer2UserPoints.innerHTML = boxer2;
    console.log(boxer1, boxer2);
}

function increaseRound(){
    startingRound += 1;
    whatRound.innerHTML = startingRound;
}

function fightIsOver(){
    if (startingRound >= 13){
        finalBoxer1 += boxer1;
        finalBoxer2 += boxer2;
        console.log(finalBoxer1);
        console.log(finalBoxer2);
        roundStatus.style.display = "none";
        meatOfCard.forEach(function(i){
            i.style.display = "none";
        });
        for(var i in changeTotalPoints){
            changeTotalPoints[i].innerHTML = "Your Point Total";
        }
        // changeTotalPoints.textContent = "Your Point Total"
        alert("Thanks For Scoring With Us! You're Final Score was " + boxer1Name + " " + boxer1 + " and " + boxer2Name + " " + boxer2);
    }
}

