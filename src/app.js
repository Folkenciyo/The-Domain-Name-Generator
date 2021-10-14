/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#domain").innerHTML = generateDomain();
  document.querySelector("#domain2").innerHTML = generateDomain();
  console.log("e");
};

let generateDomain = () => {
  let domineStart = ["http://www."];
  let domineFirst = ["caza", "tiembla", "gico", "muerde"];
  let domineSecond = [
    "royo",
    "fiesta",
    "nori",
    "lepo",
    "tuki",
    "mambo",
    "troncho"
  ];
  let domineThird = ["company", "shop", "market", "sellers"];
  let domineEnd = [".com", ".es", ".net"];

  let startIndex = generateRandomNumber(domineStart);
  let firstIndex = generateRandomNumber(domineFirst);
  let secondIndex = generateRandomNumber(domineSecond);
  let thirdIndex = generateRandomNumber(domineThird);
  let endIndex = generateRandomNumber(domineEnd);

  function generateRandomNumber(dominePosition) {
    let randomNumber = Math.floor(Math.random() * dominePosition.length);
    return randomNumber;
  }

  return (
    domineStart[startIndex] +
    domineFirst[firstIndex] +
    domineSecond[secondIndex] +
    domineThird[thirdIndex] +
    domineEnd[endIndex]
  );
};
