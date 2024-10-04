let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
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

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
    updateSlider();
});

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
    updateSlider();
});
document.querySelectorAll('.image-grid img').forEach(img => {
    img.addEventListener('click', () => {
        img.style.transform = 'scale(1.5)'; // تكبير عند الضغط
    });

    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)'; // العودة للحجم الطبيعي عند إزالة الماوس
    });
});
document.getElementById('toggle-button').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

function updateSlider() {
    const slider = document.querySelector('.slides');
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}
