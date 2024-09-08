document.addEventListener('DOMContentLoaded', () => {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');

    // Show menu
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
        });
    }

    // Hide menu
    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    }

    // Close menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav_link');
    const linkAction = () => {
        navMenu.classList.remove('show-menu');
    };

    navLinks.forEach(n => n.addEventListener('click', linkAction));
});

/* ==== arrow buttons === */
    document.addEventListener('DOMContentLoaded', function() {
        const container = document.querySelector('.menu_content_items_container');
        const prevArrow = document.getElementById('prevArrow');
        const nextArrow = document.getElementById('nextArrow');
        const scrollAmount = container.clientWidth * 0.8; // Amount to scroll per interval
        let scrollInterval;

        // Function to start auto-scrolling
        function startAutoScroll() {
            scrollInterval = setInterval(function() {
                if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
                    // If at the end, reset scroll to the start
                    container.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                }
            }, 3000); // Adjust interval as needed (3000ms = 3 seconds)
        }

        // Function to stop auto-scrolling
        function stopAutoScroll() {
            clearInterval(scrollInterval);
        }

        // Function to handle previous arrow click
        function scrollPrev() {
            container.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
            stopAutoScroll(); // Stop auto-scrolling when manually interacting
        }

        // Function to handle next arrow click
        function scrollNext() {
            container.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
            stopAutoScroll(); // Stop auto-scrolling when manually interacting
        }

        // Start auto-scrolling when the page loads
        startAutoScroll();

        // Event listeners for arrow buttons
        prevArrow.addEventListener('click', scrollPrev);
        nextArrow.addEventListener('click', scrollNext);

        // Optional: Stop auto-scrolling when the user manually scrolls
        container.addEventListener('mouseover', stopAutoScroll);
        container.addEventListener('mouseout', startAutoScroll);
    });


// Initialize ScrollReveal
const sr = ScrollReveal({
    origin: 'top', // The origin from which the element will appear (top, bottom, left, right)
    distance: '50px', // Distance the element moves during the reveal
    duration: 2000, // Duration of the animation in milliseconds
    delay: 200, // Delay before the animation starts
    reset: true // Whether the reveal should happen every time you scroll
});

/// Animation for intro
function hideLoadingScreen() {
    const loadingScreen = document.querySelector('.loading-screen');
    
    // Set the timeout to match the total animation duration
    setTimeout(() => {
        loadingScreen.style.display = 'none'; // Hide completely after the animation
        
        // Enable scrollbars by resetting the overflow property on the body
        document.body.style.overflow = 'auto';
        
        // Initialize ScrollReveal after hiding the loading screen
        initializeScrollReveal();
    }, 3000); // Total duration: 1.5s fade-in + 1s stay + 1s slide-out
}

// Initialize ScrollReveal
function initializeScrollReveal() {
    const sr = ScrollReveal();

    // Home Section
    sr.reveal('.home_container', {
        origin: 'bottom',
        distance: '80px',
        duration: 2500,
        delay: 400
    });

    // About Section
    sr.reveal('.about_welcome_container, .about_video_container', {
        origin: 'left',
        distance: '60px',
        duration: 2000,
        delay: 300
    });

    // Service Section
    sr.reveal('.service_title_grid', {
        origin: 'top',
        distance: '50px',
        duration: 2000,
        delay: 200
    });

    sr.reveal('.service_image', {
        origin: 'bottom',
        distance: '50px',
        duration: 2000,
        delay: 200
    });

    sr.reveal('.service_info', {
        origin: 'left',
        distance: '50px',
        duration: 2000,
        delay: 300
    });
    sr.reveal('.service_info_2', {
        origin: 'right',
        distance: '50px',
        duration: 2000,
        delay: 300
    });

    // Menu Section
    sr.reveal('.menu_welcome_title, .menu_navigation', {
        origin: 'bottom',
        distance: '60px',
        duration: 2200,
        delay: 300,
        interval: 200 // Stagger each menu item
    });

    // Contact Section
    sr.reveal('.contact_title, .contact_subtitle', {
        origin: 'top',
        distance: '50px',
        duration: 2000,
        delay: 200
    });
    sr.reveal('.contact_form', {
        origin: 'left',
        distance: '70px',
        duration: 2500,
        delay: 400
    });
    sr.reveal('.contact_details, .contact_image', {
        origin: 'right',
        distance: '70px',
        duration: 2500,
        delay: 400
    });
    sr.reveal('.contact_connect_title', {
        origin: 'left',
        distance: '50px',
        duration: 2000,
        delay: 300
    });
    sr.reveal('.contact_newsletter_title', {
        origin: 'right',
        distance: '50px',
        duration: 2000,
        delay: 300
    });
}

window.addEventListener('load', () => {
    // Disable scrollbars during the loading screen
    document.body.style.overflow = 'hidden';
    hideLoadingScreen();
});




