var coin = document.getElementById('coin');
var button = document.getElementById('button');
var result = document.getElementById('result');
var headsCounter = document.getElementById('headsCounter');
var TailsCounter = document.getElementById('TailsCounter');
var heads = 0;
var tails = 0;

/* On click of button spin coin ainamtion */
function coinToss() {
  /* Random number 0 or 1  */
  var x = Math.floor(Math.random() * 2);
  /* If statement */
  if (x === 0) {
    coin.innerHTML = '<img class="heads animate-coin" src="http://random-ize.com/coin-flip/us-quarter/us-quarter-front.jpg"/>';
    
    heads += 1;
    result.innerHTML = 'You got heads';
    headsCounter.innerHTML = '<h1> Number of heads: ' + heads + '</h1>';

  } else {
    coin.innerHTML = '<img class="tails animate-coin" src="http://random-ize.com/coin-flip/us-quarter/us-quarter-back.jpg"/>';
     tails += 1;
    result.innerHTML = 'You got tails';
     tailsCounter.innerHTML = '<h1> Number of tails: ' + tails + '</h1>';

  }

}
button.onclick = function() {
  coinToss();
}

