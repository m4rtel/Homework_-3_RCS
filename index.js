var NEW_DIV_COUNT = 101;


function generateDivs(selectedID) {
  var container = document.createElement("main");
  var CLASS_1 = "class-1";
  var CLASS_2 = "class-2";
  var CLASS_3 = "class-3";
  var CLASS_4 = "class-4";
  var TEXT_1 = "FizzBuzz";
  var TEXT_2 = "Fizz";
  var TEXT_3 = "Buzz";
  var blockDiv, textSpan;  // used in the for loop
  
  
  container.getElementById = "div";
  document.getElementById(selectedID.replace("#", "")).appendChild(container);
  
  function generateTexts(ClassVar, TextVar) {
    blockDiv.className = ClassVar;
    textSpan = document.createElement("p");
    textSpan.append(TextVar);  // see note about browser compatibility
    blockDiv.append(textSpan);
    container.append(blockDiv);
  }
  
  for(var i = 1; i < NEW_DIV_COUNT; i++) {
    blockDiv = document.createElement("div");
    blockDiv.setAttribute("id", "myid" + i);
    
    //id number(1 to 100) divides evenly with 3 and 5 (15,30, etc)
    if (i % 3 === 0 && i % 5 === 0) {
      generateTexts(CLASS_1, TEXT_1);
    } else if (i % 3 === 0) { //id number(1 to 100) divides evenly with 3 ONLY (3,6,9)
      generateTexts(CLASS_2, TEXT_2);
    } else if (i % 5 === 0) { //id number(1 to 100) divides evenly with 5 ONLY (5,10)
      generateTexts(CLASS_3, TEXT_3);
    } else if (i % 3 !== 0 && i % 5 !== 0) { //id number(1 to 100) does not divide with 3 nor 5 (for example 4,7 etc)
      generateTexts(CLASS_4, i++);
    }
    
  }
}

generateDivs("main-body");

function updateGenerator() {
  //alert("Function Works!");
  var StartValue = document.getElementById("input1").value;
  //document.getElementById("demo").innerHTML = x;
}