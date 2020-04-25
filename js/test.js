const desks = document.querySelectorAll(".desk");
const coders = document.querySelectorAll(".coder");
const btnStart = document.querySelector("button");
btnStart.className = "btnStr";

// const startScreen = document.querySelector(".start-screen");
const showScore = document.querySelector(".show-score");
let currentScore = document.querySelector(".class");
let splashScreen = document.querySelector(".splash-screen");

let score = 0;
let lastDesk;
let timeUp = false;
let increaseTime = 1;

let gameTimer = 9;

const peep = () => {
  const time = randomTime(500, 1000);
  const desk = randomDesk(desks);

  desk.classList.add("up");

  setTimeout(() => {
    desk.classList.remove("up");
    if (gameTimer) peep();
  }, time);
};

const start = () => {
  gameTimer = 9;
  timeUp = false;
  peep();

  timerStarting(() => {
    timeUp = true;
  }, gameTimer);
};

let timerStarting = () => {
  display = document.querySelector("#time");
  let startTime = Date.now();
  startTimer(display, startTime);
};

const startTimer = (display, startTime) => {
  const gameTimerShow = setInterval(function() {
    display.textContent = `${gameTimer}`;
    gameTimer = --gameTimer;
    startTime;
    if (gameTimer < 0) {
      let finalTime = Date.now() - startTime; //we will pass final time to the post function.
      console.log(finalTime);
      clearInterval(gameTimerShow);
      // debugger;
    }
  }, 1000);
};

// let finalTime = Date.now();

const bonk = e => {
  gameTimer = gameTimer + increaseTime;
  console.log("GUACAcoder!!!!");
};

const randomTime = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

const randomDesk = desks => {
  const idx = Math.floor(Math.random() * desks.length);
  const desk = desks[idx];

  if (desk === lastDesk) {
    return randomDesk(desks);
  }
  lastDesk = desk;
  return desk;
};

const scoreBoard = () => {
  fetch("http://localhost:3000/scores")
    .then(resp => resp.json())
    .then(resp => console.log(resp));
};

//create a timer on the event listner start.

coders.forEach(coder => {
  coder.addEventListener("click", bonk);
});

const startScreen = () => {
  document.querySelector(".start-screen");
};

btnStart.addEventListener("click", () => {
  document.querySelector(".start-screen").style.display = "none";
  start();

  // startScreen.hide();
  // splashScreen.hide();
}); // here I have to add the timer start

//timer does not need to be on the page

// COMMENT FOR AARON:
// time/score thing
// create a variable "totalScore" starting with 10, increments when you whack a coder
// when timer hits 0. show 'You lasted  "totalScore" seconds!' in score board



const desks = document.querySelectorAll(".desk");
const coders = document.querySelectorAll(".coder");
const btnStart = document.querySelector("#button");
const usernameForm = document.querySelector("#usernameForm");
btnStart.className = "btnStr";

// const startScreen = document.querySelector(".start-screen");
const showScore = document.querySelector(".show-score");
let currentScore = document.querySelector(".class");
let splashScreen = document.querySelector(".splash-screen");

let score = 0;
let lastDesk;
let timeUp = false;
let increaseTime = 1;

let gameTimer = 9;

const peep = () => {
  const time = randomTime(500, 1000);
  const desk = randomDesk(desks);

  desk.classList.add("up");

  setTimeout(() => {
    desk.classList.remove("up");
    if (gameTimer) peep();
  }, time);
};

const start = (username) => {
  gameTimer = 9;
  timeUp = false;
  peep();

  timerStarting((username) => {
    timeUp = true;
  }, gameTimer);
};

let timerStarting = (username) => {
  display = document.querySelector("#time");
  let startTime = Date.now();
  startTimer(display, startTime, username);
};

const startTimer = (display, startTime, username) => {
  const gameTimerShow = setInterval(function() {
    display.textContent = `${gameTimer}`;
    gameTimer = --gameTimer;
    startTime;
    if (gameTimer < 0) {
      let finalTime = Date.now() - startTime; //we will pass final time to the post function.
      console.log(finalTime);
      console.log(username);
      clearInterval(gameTimerShow);
    }
  }, 1000);
};

// let finalTime = Date.now();

const bonk = e => {
  gameTimer = gameTimer + increaseTime;
  console.log("GUACAcoder!!!!");
  
};

const randomTime = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

const randomDesk = desks => {
  const idx = Math.floor(Math.random() * desks.length);
  const desk = desks[idx];

  if (desk === lastDesk) {
    return randomDesk(desks);
  }
  lastDesk = desk;
  return desk;
};

const scoreBoard = () => {
  fetch("http://localhost:3000/scores")
    .then(resp => resp.json())
    .then(resp => console.log(resp));
};

//create a timer on the event listner start.

coders.forEach(coder => {
  coder.addEventListener("click", bonk);
});

const startScreen = () => {
  document.querySelector(".start-screen");
};

usernameForm.addEventListener("submit", e => {
  e.preventDefault();
  document.querySelector(".start-screen").style.display = "none";
  const username = document.querySelector("#username").value;
        debugger;

  start(username);
  // startScreen.hide();
  // splashScreen.hide();
}); // here I have to add the timer start

//timer does not need to be on the page

// COMMENT FOR AARON:
// time/score thing
// create a variable "totalScore" starting with 10, increments when you whack a coder
// when timer hits 0. show 'You lasted  "totalScore" seconds!' in score board
