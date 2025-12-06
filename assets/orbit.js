const circle1 = document.getElementById("circle1");
const circle2 = document.getElementById("circle2");

let angle = 0;

// Orbit settings
const orbitRadius = 180;  // distance from center
const speed = 0.001;       // lower = slower orbit

function animate() {
    const w = window.innerWidth;
    const h = window.innerHeight;

    // Center of the screen
    const centerX = w / 2;
    const centerY = h / 2;

    // First circle position
    const x1 = centerX + orbitRadius * Math.cos(angle);
    const y1 = centerY + orbitRadius * Math.sin(angle);

    // Second circle position (opposite side)
    const x2 = centerX + orbitRadius * Math.cos(angle + Math.PI);
    const y2 = centerY + orbitRadius * Math.sin(angle + Math.PI);

    // Apply positions
    circle1.style.left = (x1 - 75) + "px";  // subtract half width
    circle1.style.top  = (y1 - 75) + "px";

    circle2.style.left = (x2 - 75) + "px";
    circle2.style.top  = (y2 - 75) + "px";

    // Increase angle
    angle += speed;

    requestAnimationFrame(animate);
}

animate();
