$(function() {
  $("#gamePage").hide();
  $("#endPage").hide();
  var guessNumber = Math.floor(Math.random() * 100) + 19;
  var buttonNumber = Math.floor(Math.random() * 12) + 1;
  var setup = generateRandomNumbers();
  var totalGuess = 0;
  var winNumber = $("#correct-number").text(guessNumber);
  var wins = 0;
  var losses = 0;

  function generateRandomNumbers() {
    var randomValues = [];
    var currentValue;

    // generate 4 random numbers 1-12
    while (randomValues.length < 4) {
      currentValue = Math.floor(Math.random() * 12) + 1;
      console.log(currentValue);

      // Avoid duplicates
      if (randomValues.indexOf(currentValue) < 0) {
        randomValues.push(currentValue);
      }
    }

    return {
      options: randomValues
    };
  }

  // Assign each of the values to a button
  $("#button-1").val(setup.options[0]);
  $("#button-2").val(setup.options[1]);
  $("#button-3").val(setup.options[2]);
  $("#button-4").val(setup.options[3]);

  $(".crystal").on("click", function() {
    console.log(this);
    // parse variable to return string, add sum of numbers clicked
    var selectedValue = parseInt($(this).val(), 10);
    totalGuess = Number(totalGuess) + Number(selectedValue);
    // display score in html
    var yourGuess = $("#result").text(totalGuess);
    console.log(yourGuess);

    if (totalGuess === guessNumber) {
      wins++;
      $(".wins").text("Wins: " + wins);
      $("#endPage").show();
      $("#gamePage").hide();
    } else if (totalGuess > guessNumber) {
      losses++;
      $(".losses").text("Losses: " + losses);
      $("#endPage").show();
      $("#gamePage").hide();
    }
  });
  console.log("random number: " + guessNumber);
  console.log("guess: " + buttonNumber);

  $("#startButton").click(function() {
    $("#gamePage").show();
    $("#startPage").hide();
    setup;
  });

  $("#resetButton").click(function() {
    totalGuess = 0;
    $("#startPage").show();
    $("#endPage").hide();
    var guessNumber = Math.floor(Math.random() * 100) + 19;
   winNumber.text(guessNumber);
    
  });
});
