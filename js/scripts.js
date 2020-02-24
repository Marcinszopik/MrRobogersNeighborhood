//back-end logic
function beepBooper(number) {
  var outputArray= [];
  for (var index = 0; index < number + 1; index++) {
    var inputString = index.toString();
    if ((index >= 1) && (index % 3 === 0)){
    outputArray.push("<li>Won't you be my Neighbor?</li>");
  } else if ((index === 1) || (inputString.includes("1"))) {
    outputArray.push("<li>Boop!</li>");
  } else if ((index === 0) || (inputString.includes("0"))) {
    outputArray.push("<li>Beep!</li>");
    } else {
    outputArray.push("<li>"+index+"</li>");
    }
  }
  console.log(outputArray);
  return outputArray;
}


//front-end logic
$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
    var inputNumber = parseInt($("#userInput").val());
    var beepBoopArray = beepBooper(inputNumber);
    var finalString = beepBoopArray.join('');
    console.log(finalString);
    $("#output").html(finalString);
    $("#output").show();
  });
});
