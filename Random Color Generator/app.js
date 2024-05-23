let div = document.querySelector('.color-display');
let btn = document.querySelector('button');

function randomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let color = `rgb(${red},${green},${blue})`;
    return color;
}

btn.addEventListener('click', function() {
    let h3 = document.querySelector('h3');
    let randRgb = randomColor();
    h3.innerText = randRgb; // Update the text of h3 to show the generated color
    div.style.backgroundColor = randRgb; // Apply the generated color to the div
    
    // Creates a new circle with the generated color
    let circle = document.createElement('div');
    circle.classList.add('circle');
    circle.style.backgroundColor = randRgb;
    
    // Append the circle to the circle container
    let circleContainer = document.querySelector('.circle-container');
    circleContainer.appendChild(circle);

    // Add click event to the circle
    circle.addEventListener('click', function() {
        // Update the color display text
        h3.innerText = this.style.backgroundColor;
        
        // Remove the active class from any other circle
        document.querySelectorAll('.circle').forEach(c => c.classList.remove('active'));
        
        //add
        this.classList.add('active');
    });
});
