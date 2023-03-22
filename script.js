// create a new div element
var newDiv = document.createElement("div");

// set the content of the div element
newDiv.innerHTML = "This is a new div element created by The Super JavaScript.";

// add some CSS styles to the div element
newDiv.style.backgroundColor = "lightblue";
newDiv.style.width = "200px";
newDiv.style.height = "200px";
newDiv.style.padding = "20px";
newDiv.style.border = "1px solid black";
newDiv.style.position = "absolute";

// set the initial position of the div element
newDiv.style.left = "0px";
newDiv.style.top = "0px";

// add the div element to the body of the page
document.body.appendChild(newDiv);

// Define the first animation function
function animateDiv1(callback) {
  // Get the current position of the div
  let x = parseInt(newDiv.style.left);
  let y = parseInt(newDiv.style.top);

  // Update the position of the div
  x += 5;
  y += 5;

  // Set the new position of the div
  newDiv.style.left = x + "px";
  newDiv.style.top = y + "px";

  // check if the end condition for this animation has been met
  if (
    x >= window.innerWidth - newDiv.offsetWidth ||
    y >= window.innerHeight - newDiv.offsetHeight
  ) {
    // call the callback function to start the next animation
    callback(animateDiv2);
    return;
  }

  // Call the animation function again after a delay
  setTimeout(function () {
    animateDiv1(callback);
  }, 10);
}
  // Define the second animation function
function animateDiv2(callback) {
    // Get the current position of the div
    let x = parseInt(newDiv.style.left);
    let y = parseInt(newDiv.style.top);
  
    // Update the angle of rotation
    let angle = parseInt(newDiv.getAttribute("data-angle")) || 0;
    angle += 5;
    newDiv.setAttribute("data-angle", angle);
  
    // Calculate the new position of the div
    let centerX = window.innerWidth / 2;
    let centerY = window.innerHeight / 2;
    let radius = 150;
    let radians = angle * Math.PI / 180;
    x = centerX + radius * Math.cos(radians);
    y = centerY + radius * Math.sin(radians);
  
    // Set the new position of the div
    newDiv.style.left = x + 'px';
    newDiv.style.top = y + 'px';

    // check if the end condition for this animation has been met
    if (angle >= 360) {
        // reset the angle of rotation
        newDiv.setAttribute("data-angle", 0);
        
        // call the callback function to start the next animation
        callback(animateDiv1);
        return;
    }
  
    // Call the animation function again after a delay
    setTimeout(function() {animateDiv2(callback)}, 10);
}


// Call the first animation function to start the animation
animateDiv1(animateDiv2);
