document.addEventListener('DOMContentLoaded', function() {
    const editableText = document.getElementById('editable-text');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    // Load saved text
    const savedText = localStorage.getItem('savedText');
    if (savedText) {
        editableText.textContent = savedText;
    }

    // Save text on input
    editableText.addEventListener('input', function() {
        localStorage.setItem('savedText', this.textContent);
    });

    // Google search function
    function googleSearch() {
        const query = searchInput.value.trim().replace(/ /g, '+');
        if (query) {
            window.open(`https://www.google.com/search?q=${query}`, '_blank');
        }
    }

    // Search on button click
    searchButton.addEventListener('click', googleSearch);

    // Search on Enter key press
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            googleSearch();
        }
    });

    // Add hover effect to app links
    const appLinks = document.querySelectorAll('.app-link');
    appLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});
