let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];


const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("healthText")
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterNameText");
const monsterHealthText = document.querySelector("#monsterHealthText");

const locations = [
  {
    name: "town square",
    "button text": ["Go to store" , "Go to cave" , "Fight dragon"],
    "button functions" : [goStore, goCave, fightDragon],
    text: "You are curently in town square. You see a sign that says 'store.'"

  }
]

// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location) {
  
}

function goTown() {
  button1.innerText = "Go to store";
  button2.innerText = "Go to Cave";
  button3.innerText = "Fight Dragon";
  button1.onclick = goStore;
  button2.onclick = goCave;
  button3.onclick = fightDragon;
  text.innerText = "You are curently in town square. You see a sign that says 'store.'";
}

function goStore() {
  button1.innerText = "Buy 10 health (10 gold)";
  button2.innerText = "Buy weapon (30 gold)";
  button3.innerText = "Go to townsquare";
  button1.onclick = buyHealth;
  button2.onclick = buyWeapon;
  button3.onclick = goTown;
  text.innerText = "You are curently in the store.";
}

function goCave() {
  console.log("Going to the Cave...")
}

function fightDragon() {
  console.log("Fighting the Dragon...")
}

// At the store function
function buyHealth() {
 
}

function buyWeapon() {

}

