// Run immediately to stop Flash of Unstyled Content (FOUC)
(function () {
    let currentTheme = localStorage.getItem('theme');
    if (!currentTheme) {
        // Default to light if no choice made
        currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    document.documentElement.setAttribute('data-theme', currentTheme);
})();

// Wait for HTML to load, then make buttons work
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtns = document.querySelectorAll('[data-theme-toggle]');

    function updateIcons() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        toggleBtns.forEach(btn => {
            if (currentTheme === 'dark') {
                btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';
            } else {
                btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
            }
        });
    }

    updateIcons();

    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            let currentTheme = document.documentElement.getAttribute('data-theme');
            currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', currentTheme);
            localStorage.setItem('theme', currentTheme);
            updateIcons();
        });
    });
});