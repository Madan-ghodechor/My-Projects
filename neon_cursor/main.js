const svg = document.querySelector(".thread-svg");
let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
let points = []; // Array to hold the points of the path
let isDrawing = false;

// Function to start drawing
const startDrawing = (x, y) => {
    isDrawing = true;
    addPoint(x, y); // Add the initial point and start drawing
};

// Function to add a point and set a timeout to remove it
const addPoint = (x, y) => {
    points.push([x, y]); // Add the new point
    updatePath(); // Update the path with all points

    // Set a timeout to remove the oldest point after 7 seconds
    setTimeout(() => {
        points.shift(); // Remove the first (oldest) point
        updatePath(); // Update the path again without the removed point
    }, 1000); // Point disappears after 7 seconds
};

// Function to update the SVG path based on the points
const updatePath = () => {
    if (points.length > 0) {
        // Create a string for the SVG path "d" attribute
        const d = points.reduce((acc, point, index) => {
            return acc + (index === 0 ? `M ${point[0]} ${point[1]} ` : ` ${point[0]} ${point[1]} `);
        }, "");

        path.setAttribute("d", d); // Update the path with new points
        svg.appendChild(path); // Append the updated path to the SVG
    }
};

// Mouse move event listener
document.addEventListener("mousemove", (evt) => {
    const xPos = evt.clientX;
    const yPos = evt.clientY;

    if (!isDrawing) {
        startDrawing(xPos, yPos); // Start a new path if not already drawing
    } else {
        addPoint(xPos, yPos); // Add new points and keep drawing
    }
});



// Set up the line style
path.setAttribute("class", "line");
