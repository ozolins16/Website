var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar-nav").style.opacity = "1";
    } else {
        document.getElementById("navbar-nav").style.opacity = "0.5";
    }
    prevScrollpos = currentScrollPos;
}


const nextButton = document.getElementById('next-btn');
const prevButton = document.getElementById('prev-btn');

nextButton.addEventListener('click', () => navigate(1));  // Move forward
prevButton.addEventListener('click', () => navigate(-1)); // Move backward

function navigate(direction) {
    const items = document.querySelectorAll('.gallery-item');
    const total = items.length;
    let activeIndex = Array.from(items).findIndex(item => item.classList.contains('gallery-item-active'));

    // Remove all specific classes for clean toggle
    items.forEach(item => {
        item.classList.remove('gallery-item-active', 'gallery-item-1', 'gallery-item-2', 'gallery-item-3', 'gallery-item-4');
        // item.style.opacity = 0.5;  // Reset opacity for all
    });

    // Calculate new indices for active and surrounding items
    const newActiveIndex = (activeIndex + direction + total) % total;
    const leftIndex = (newActiveIndex - 1 + total) % total;
    const leftMostIndex = (leftIndex - 1 + total) % total;
    const rightIndex = (newActiveIndex + 1) % total;
    const rightMostIndex = (rightIndex + 1) % total;

    // Assign classes to new positions
    items[leftMostIndex].classList.add('gallery-item-2');
    items[leftIndex].classList.add('gallery-item-1');
    items[newActiveIndex].classList.add('gallery-item-active');
    items[rightIndex].classList.add('gallery-item-3');
    items[rightMostIndex].classList.add('gallery-item-4');

    // Update styles for visibility and position
    items[newActiveIndex].style.opacity = 1; // Active is fully visible
    items[leftIndex].style.opacity = 0.9; // Slightly more visible than most left/right
    items[rightIndex].style.opacity = 0.9; // Slightly more visible than most left/right
    items[leftMostIndex].style.opacity = 0; // Least visible
    items[rightMostIndex].style.opacity = 0; // Least visible
}



