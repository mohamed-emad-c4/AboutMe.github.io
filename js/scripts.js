/* --- Begin js/scripts.js --- */

// Get button and body elements
const toggleButton = document.getElementById('toggle-button');
const body = document.body;

// Check if dark mode is already enabled
if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
    toggleButton.textContent = 'Switch to Light Mode';
}

// Add event listener for toggle button
toggleButton.addEventListener('click', function() {
    body.classList.toggle('dark-mode');

    // Update button text based on current mode
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Switch to Light Mode';
        localStorage.setItem('dark-mode', 'enabled');  // Save dark mode state
    } else {
        toggleButton.textContent = 'Switch to Dark Mode';
        localStorage.setItem('dark-mode', 'disabled'); // Save light mode state
    }
});

// Image grid click events (Optional: Implement lightbox or other functionality)
document.querySelectorAll('.image-grid img').forEach(img => {
    img.addEventListener('click', () => {
        // Placeholder for future image click functionality
    });
});

/* --- End js/scripts.js --- */
