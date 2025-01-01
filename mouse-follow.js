const draggable = document.querySelector('.draggable');
const trail = document.querySelector('.trail');

let isDragging = false;

// Function to make element follow mouse
function followMouse(e) {
    if (!isDragging) return;
    
    const x = e.clientX;
    const y = e.clientY;
    
    draggable.style.left = `${x}px`;
    draggable.style.top = `${y}px`;
}

// Event listeners for mouse interactions
document.addEventListener('mousedown', (e) => {
    isDragging = true;
    followMouse(e);
});

document.addEventListener('mousemove', followMouse);

document.addEventListener('mouseup', () => {
    isDragging = false;
});

// Initial positioning
draggable.style.position = 'absolute';
draggable.style.transform = 'translate(-50%, -50%)';
