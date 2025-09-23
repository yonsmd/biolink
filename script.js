// ROJ Bakery - small UX enhancements
(function () {
    const instagram = document.getElementById('instagramLink');
    const whatsapp = document.getElementById('whatsappLink');
    const locationLink = document.getElementById('locationLink');
    const locationInfo = document.getElementById('locationInfo');
    const locationText = document.getElementById('locationText');

    // Open links in new tab safely
    [instagram, whatsapp].forEach(function (el) {
        if (el) {
            el.setAttribute('target', '_blank');
            el.setAttribute('rel', 'noopener noreferrer');
        }
    });

    // Toggle location details on click
    if (locationLink && locationInfo) {
        locationLink.addEventListener('click', function (e) {
            // allow normal navigation if it's an external maps link
            // but also reveal the info area for users
            if (locationInfo.style.display === 'none' || locationInfo.style.display === '') {
                locationInfo.style.display = 'block';
                locationText.textContent = 'Find us on Maps – fresh bread daily!';
            }
        });
    }
})();


// Add footer click handler
const footer = document.querySelector('.footer');
if (footer) {
    // Set current year
    var yearSpan = document.getElementById('year');
    if (yearSpan) { yearSpan.textContent = new Date().getFullYear(); }

    footer.addEventListener('click', function () {
        window.open('https://www.instagram.com/cak_tech/?utm_source=ig_web_button_share_sheet', '_blank');
    });

    // Add keyboard support for footer
    footer.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.click();
        }
    });

    // Make footer focusable
    footer.setAttribute('tabindex', '0');
    footer.setAttribute('role', 'button');
}

