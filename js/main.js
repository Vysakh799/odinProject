// Theme Management Logic
const htmlElement = document.documentElement;
const themeToggles = document.querySelectorAll('.theme-toggle-btn, .sidebar-theme-toggle');

// Function to update the theme
const applyTheme = (theme) => {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('site-theme', theme);
};

// Toggle Function
const toggleTheme = () => {
    const currentTheme = htmlElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
};

// Event Listeners for all toggle buttons (Navbar & Sidebar)
themeToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        // Since we are using labels/buttons, prevent default if necessary and toggle
        e.preventDefault();
        toggleTheme();
    });
});

const initTheme = () => {
    const savedTheme = localStorage.getItem('site-theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        applyTheme('light');
    }
};

// Load theme on startup
initTheme();

// Sidebar menu toggle logic
const menuToggle = document.getElementById('menu-toggle');
const body = document.body;

if (menuToggle) {
    menuToggle.addEventListener('change', () => {
        if (menuToggle.checked) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }
    });
}
