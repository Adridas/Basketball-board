let numberHome = document.getElementById("score-number-home");
let numberAway = document.getElementById("score-number-away");
let resetButton = document.getElementById("reset-button");
let firstHome = document.getElementById("first-home");
let secondHome = document.getElementById("second-home");
let thirdHome = document.getElementById("third-home");
let fourHome = document.getElementById("four-home");
let fiveHome = document.getElementById("five-home");
let firstAway = document.getElementById("first-away");
let secondAway = document.getElementById("second-away");
let thirdAway = document.getElementById("third-away");
let fourAway = document.getElementById("four-away");
let fiveAway = document.getElementById("five-away");
let homeNumber=0;
let awayNumber=0;


function reset() {
    homeNumber = 0;
    awayNumber = 0;
    numberHome.textContent = 0;
    numberAway.textContent = 0;
    numberHome.classList.remove("score-number-winning");
    numberAway.classList.remove("score-number-winning");
}


function addOne() {
    homeNumber +=1;
    numberHome.textContent = homeNumber;

    if (homeNumber > awayNumber) {
    
        numberHome.classList.add("score-number-winning");
        numberAway.classList.remove("score-number-winning");
    } else if (awayNumber > homeNumber) {
        numberHome.classList.remove("score-number-winning");
        numberAway.classList.add("score-number-winning");
    } else {
        numberHome.classList.add("score-number-winning");
        numberAway.classList.add("score-number-winning");
    }
}

function addTwo() {
    homeNumber +=2;
    numberHome.textContent = homeNumber;
    if (homeNumber > awayNumber) {
    
        numberHome.classList.add("score-number-winning");
        numberAway.classList.remove("score-number-winning");
    } else if (awayNumber > homeNumber) {
        numberHome.classList.remove("score-number-winning");
        numberAway.classList.add("score-number-winning");
    } else {
        numberHome.classList.add("score-number-winning");
        numberAway.classList.add("score-number-winning");
    }
    
}

function addThree() {
    homeNumber +=3;
    numberHome.textContent = homeNumber;
    if (homeNumber > awayNumber) {
    
        numberHome.classList.add("score-number-winning");
        numberAway.classList.remove("score-number-winning");
    } else if (awayNumber > homeNumber) {
        numberHome.classList.remove("score-number-winning");
        numberAway.classList.add("score-number-winning");
    } else {
        numberHome.classList.add("score-number-winning");
        numberAway.classList.add("score-number-winning");
    }
}

function addOneAway() {
    awayNumber +=1;
    numberAway.textContent = awayNumber;
    if (homeNumber > awayNumber) {
    
        numberHome.classList.add("score-number-winning");
        numberAway.classList.remove("score-number-winning");
    } else if (awayNumber > homeNumber) {
        numberHome.classList.remove("score-number-winning");
        numberAway.classList.add("score-number-winning");
    } else {
        numberHome.classList.add("score-number-winning");
        numberAway.classList.add("score-number-winning");
    }
}

function addTwoAway() {
    awayNumber +=2;
    numberAway.textContent = awayNumber;
    if (homeNumber > awayNumber) {
    
        numberHome.classList.add("score-number-winning");
        numberAway.classList.remove("score-number-winning");
    } else if (awayNumber > homeNumber) {
        numberHome.classList.remove("score-number-winning");
        numberAway.classList.add("score-number-winning");
    } else {
        numberHome.classList.add("score-number-winning");
        numberAway.classList.add("score-number-winning");
    }
    
}

function addThreeAway() {
    awayNumber +=3;
    numberAway.textContent = awayNumber;
    if (homeNumber > awayNumber) {
    
        numberHome.classList.add("score-number-winning");
        numberAway.classList.remove("score-number-winning");
    } else if (awayNumber > homeNumber) {
        numberHome.classList.remove("score-number-winning");
        numberAway.classList.add("score-number-winning");
    }else {
        numberHome.classList.add("score-number-winning");
        numberAway.classList.add("score-number-winning");
    }
}

function addcolorFirst() {
    firstHome.classList.toggle("red");
}

function addcolorSecond() {
    secondHome.classList.toggle("red");
}

function addcolorThird() {
    thirdHome.classList.toggle("red");
}
 
function addcolorFour() {
    fourHome.classList.toggle("red");
}

function addcolorFive() {
    fiveHome.classList.toggle("red");
}

function addcolorFirstAway() {
    firstAway.classList.toggle("red");
}

function addcolorSecondAway() {
    secondAway.classList.toggle("red");
}

function addcolorThirdAway() {
    thirdAway.classList.toggle("red");
}
function addcolorFourAway() {
    fourAway.classList.toggle("red");
}

function addcolorFiveAway() {
    fiveAway.classList.toggle("red");
}

// clock counting down the time 



var timerBt = document.querySelector('.countdown-container .start-button'),
    stopBt = document.querySelector('.countdown-container .stop-button'),
    countDownContainer = document.querySelector('.countdown-container');

timerBt.addEventListener('click', startClock);
stopBt.addEventListener('click', stopClock);

countDownContainer.classList.add('fade-in');

//calculates the time remaining
function getTimeRemaining(endtime) {
    var totalTime = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((totalTime / 1000) % 60),
        minutes = Math.floor((totalTime / 1000 / 60) % 60),
        hours = Math.floor((totalTime / (1000 * 60 * 60)) % 24),
        days = Math.floor(totalTime / (1000 * 60 * 60 * 24));

    //return the data as a reusable object
    return {
        'total': totalTime,
        // 'days': days,
        // 'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

//outputs timer data to html
function initializeClock(id, endtime) {
    var clock = document.getElementById(id),
        // daysSpan = clock.querySelector('.days'),
        // hoursSpan = clock.querySelector('.hours'),
        minutesSpan = clock.querySelector('.minutes'),
        secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var totalTime = getTimeRemaining(endtime);

        // daysSpan.innerHTML = totalTime.days;
        // hoursSpan.innerHTML = ('0' + totalTime.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + totalTime.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + totalTime.seconds).slice(-2);

        //timer end - fadein start button and play audio
        if (totalTime.total <= 0) {
            clearInterval(timeinterval);
            toggleButtons();

            var audio = new Audio('music\timeout-90320.mp3');
            audio.play();

            timerBt.childNodes[1].innerHTML = "START";
        }
    }

    updateClock();
    window.timeinterval = setInterval(updateClock, 1000);
}

function startClock() {
    //takes the current time and adds minutes
    var
        timeInMinutes = 1,
        currentTime = Date.parse(new Date()),
        deadline = new Date(currentTime + timeInMinutes * 600 * 1000);

    //initialize the clock countdown
    initializeClock('countdown', deadline);

    timerBt.classList.remove('fade-in');
    timerBt.classList.add('fade-out');
    stopBt.classList.remove('fade-out');
    stopBt.classList.add('fade-in');

    return false;
}

function stopClock() {
    clearInterval(timeinterval);
    toggleButtons();
    timerBt.childNodes[1].innerHTML = "START";

    return false;
}

function toggleButtons() {
    timerBt.classList.remove('fade-out');
    timerBt.classList.add('fade-in');
    stopBt.classList.remove('fade-in');
    stopBt.classList.add('fade-out');
}

// var timerBt = document.querySelector('.countdown-container .start-button'),
//     stopBt = document.querySelector('.countdown-container .stop-button'),
//     pauseBt = document.querySelector('.countdown-container .pause-button'), // Add a pause button
//     countDownContainer = document.querySelector('.countdown-container');
// var timeinterval; // Declare the interval variable
// var isPaused = false; // Variable to track whether the timer is paused

// timerBt.addEventListener('click', startClock);
// stopBt.addEventListener('click', stopClock);
// pauseBt.addEventListener('click', pauseClock); // Add an event listener for the pause button
// countDownContainer.classList.add('fade-in');


// function startClock() {
//     if (isPaused) {
//         // If the timer is paused, resume from where it left off
//         isPaused = false;
//         initializeClock('countdown', deadline);
//     } else {
//         // If not paused, start a new countdown
//         var timeInMinutes = 1;
//         var currentTime = Date.parse(new Date());
//         deadline = new Date(currentTime + timeInMinutes * 600 * 1000);
//         initializeClock('countdown', deadline);
//     }

//     timerBt.classList.remove('fade-in');
//     timerBt.classList.add('fade-out');
//     stopBt.classList.remove('fade-out');
//     stopBt.classList.add('fade-in');
//     pauseBt.classList.remove('fade-out'); // Show the pause button
//     pauseBt.classList.add('fade-in');

//     return false;
// }

// function pauseClock() {
//     isPaused = true; // Set the timer to paused
//     clearInterval(timeinterval);
//     toggleButtons();

//     return false;
// }

// // ... Rest of your code ...

// function toggleButtons() {
//     timerBt.classList.remove('fade-out');
//     timerBt.classList.add('fade-in');
//     stopBt.classList.remove('fade-in');
//     stopBt.classList.add('fade-out');
//     pauseBt.classList.remove('fade-in'); // Hide the pause button
//     pauseBt.classList.add('fade-out');
// }




 
