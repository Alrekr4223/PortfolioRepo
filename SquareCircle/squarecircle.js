 //easter egg: email me how comments are different in javascript 
//than in html.  What are they like in CSS?


var maxZ = 1000;   // Global var: initial z-index of shape that gets clicked

//This function gets called once when the page loads as it implies
//here we will do our button initializiation and add all our initial
//elements
window.onload = function() {
  var addS = document.getElementById("addS");
  addS.onclick = addSquare;
  var addC = document.getElementById("addC");
  addC.onclick = addCircle;
  var colors = document.getElementById("colors");
  colors.onclick = changeColors;
  var allP = document.getElementById("allP");
  allP.onclick = changeToPurple;
  var spam = document.getElementById("spam");
  spam.onclick = spamEverywhere;
  var clear = document.getElementById("clear");
  clear.onclick = clearHalf;
  
  // create several randomly positioned squares
  /*easter egg: Tell me which number determines the range and 
  which determines the minimum value (the floor) and why*/
  var elementsCount = parseInt(Math.random() * 40) + 20;
  for (var i = 0; i < elementsCount; i++) {
  	   var randW = parseInt(Math.random() * 40) + 20;
  	   var randH = parseInt(Math.random() * 40) + 20;
    addElems(randW, randH);
  }
};

// Creates and adds a new square div to the page.
function addElems(randW, randH) {
  var square = document.createElement("div");
  square.className = "square";
  square.style.left = parseInt(Math.random() * 600) + "px";
  square.style.top = parseInt(Math.random() * 200) + "px";
  square.style.backgroundColor = getRandomColor();
  square.style.width = randW;
  square.style.height = randH;
  square.onclick = squareClick;

  var elementArea = document.getElementById("elementarea");
  elementArea.appendChild(square);

  var circle = document.createElement("div");
  circle.className = "circle";
  circle.style.left = parseInt(Math.random() * 600) + "px";
  circle.style.top = parseInt(Math.random() * 200) + "px";
  circle.style.backgroundColor = getRandomColor();
  circle.style.width = randW;
  circle.style.height = randH;
  circle.onclick = squareClick;

  var elementArea = document.getElementById("elementarea");
  elementArea.appendChild(circle);
}

// Gives a new randomly chosen color to every element on the page.
function changeColors() {
  var elementArea = document.getElementById("elementarea");
  var elements = elementArea.getElementsByTagName("div");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = getRandomColor();
  }
}

//Changes all elements to have a purple background
function changeToPurple() {
  var elementArea = document.getElementById("elementarea");
  var elements = elementArea.getElementsByTagName("div");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = getPurple();
  }

}

// Gives a new randomly chosen color to every square on the page.
function changeSquareColors() {
  var elementArea = document.getElementById("elementarea");
  var elements = elementArea.getElementsByTagName("div");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = getRandomColor();
  }
}

// Gives a new randomly chosen color to every square on the page.
function changeCircleColors() {
  var elementArea = document.getElementById("elementarea");
  var elements = elementArea.getElementsByTagName("div");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = getRandomColor();
  }
}

function spamEverywhere() {
    var elementsCount = 5000;
    for (var i = 0; i < elementsCount; i++) {
        var randW = parseInt(Math.random() * 40) + 20;
        var randH = parseInt(Math.random() * 40) + 20;
        addElems(randW, randH);
    }
}

function clearHalf() {
    var elementArea = document.getElementById("elementarea");
    var elements = elementArea.getElementsByTagName("div");
    for (var i = 0; i < elements.length; i++) {
        elementArea.removeChild(elements[i]);
    }
}


// Creates and adds a new square div to the page.
function addSquare() {
  var square = document.createElement("div");
  square.className = "square";
  square.style.left = parseInt(Math.random() * 600) + "px";
  square.style.top = parseInt(Math.random() * 200) + "px";
  square.style.backgroundColor = getRandomColor();
  var randW = parseInt(Math.random() * 40) + 20;
  var randH = parseInt(Math.random() * 40) + 20;
  square.style.width = randW;
  square.style.height = randH;
  square.onclick = squareClick;

  var elementArea = document.getElementById("elementarea");
  elementArea.appendChild(square);
}

// Creates and adds a new circle div to the page.
function addCircle() {
  var circle = document.createElement("div");
  circle.className = "circle";
  circle.style.left = parseInt(Math.random() * 600) + "px";
  circle.style.top = parseInt(Math.random() * 200) + "px";
  circle.style.backgroundColor = getRandomColor();
  var randW = parseInt(Math.random() * 40) + 20;
  var randH = parseInt(Math.random() * 40) + 20;
  circle.style.width = randW;
  circle.style.height = randH;
  circle.onclick = squareClick;

  var elementArea = document.getElementById("elementarea");
  elementArea.appendChild(circle);
}

// Generates and returns a random color string such as "#f08a7c".
function getRandomColor() {
  var letters = "0123456789abcdef";
  var result = "#";
  for (var i = 0; i < 6; i++) {
    result += letters.charAt(parseInt(Math.random() * letters.length));
  }
  return result;
}

function getPurple(){
    var letters = "08";
    var result = "#";
    result += letters.charAt(1);
    result += letters.charAt(0);
    result += letters.charAt(0);
    result += letters.charAt(0);
    result += letters.charAt(1);
    result += letters.charAt(0);
    return result;
}

// Called when a square is clicked; moves it to the top or removes it.
function squareClick() {
  var oldZ = parseInt(this.style.zIndex);
  if (oldZ == maxZ) {
    this.parentNode.removeChild(this);   // square is on top; remove it
  } else {
    maxZ++;
    this.style.zIndex = maxZ;
  }
}
