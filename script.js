// Bio Link JavaScript functionality

// Configuration - Update these with your actual social media handles
const socialConfig = {
    whatsapp: {
        number: '+9647509946996', // Your WhatsApp number
        message: 'Hello! I found ROJ Bakery through your bio link. I would like to know more about your fresh bread and treats!'
    },
    instagram: {
        username: 'haasan.duski', // Your Instagram username
        url: 'https://instagram.com/haasan.duski'
    },
    snapchat: {
        username: 'nan.pejyaroj', // Your Snapchat username
        url: 'https://snapchat.com/add/nan.pejyaroj'
    },
    tiktok: {
        username: 'nanpejiaroj3', // Your TikTok username
        url: 'https://tiktok.com/@nanpejiaroj3'
    }
};

// Location configuration
const locationConfig = {
    address: 'Bakery Shop Location', // Your bakery location
    coordinates: {
        lat: 0,
        lng: 0
    },
    mapUrl: 'https://maps.app.goo.gl/iXBcvSPtf4VY53Gs8?g_st=ipc'
};

// DOM elements
const whatsappLink = document.getElementById('whatsappLink');
const instagramLink = document.getElementById('instagramLink');
const snapchatLink = document.getElementById('snapchatLink');
const tiktokLink = document.getElementById('tiktokLink');
const locationLink = document.getElementById('locationLink');
const locationInfo = document.getElementById('locationInfo');
const locationText = document.getElementById('locationText');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    setupSocialLinks();
    setupLocationFeature();
    setupProfileImage();
    setupBubbleAnimations();
    setupInteractiveEffects();
    setupViewportHeight();
});

// Setup social media links
function setupSocialLinks() {
    // WhatsApp link
    whatsappLink.addEventListener('click', function(e) {
        e.preventDefault();
        const message = encodeURIComponent(socialConfig.whatsapp.message);
        const whatsappUrl = `https://wa.me/${socialConfig.whatsapp.number.replace(/[^0-9]/g, '')}?text=${message}`;
        openLink(whatsappUrl, this);
    });

    // Instagram link
    instagramLink.addEventListener('click', function(e) {
        e.preventDefault();
        openLink(socialConfig.instagram.url, this);
    });

    // Snapchat link
    snapchatLink.addEventListener('click', function(e) {
        e.preventDefault();
        openLink(socialConfig.snapchat.url, this);
    });

    // TikTok link
    tiktokLink.addEventListener('click', function(e) {
        e.preventDefault();
        openLink(socialConfig.tiktok.url, this);
    });
}

// Setup location feature
function setupLocationFeature() {
    locationText.textContent = 'Click to view our location on Google Maps';
    
    locationLink.addEventListener('click', function(e) {
        e.preventDefault();
        // Open Google Maps link
        if (locationConfig.mapUrl) {
            window.open(locationConfig.mapUrl, '_blank');
        } else {
            toggleLocationInfo();
        }
    });
    
    // Also make location text clickable
    locationText.addEventListener('click', function(e) {
        e.preventDefault();
        if (locationConfig.mapUrl) {
            window.open(locationConfig.mapUrl, '_blank');
        }
    });
}

// Toggle location information display
function toggleLocationInfo() {
    if (locationInfo.style.display === 'none' || locationInfo.style.display === '') {
        locationInfo.style.display = 'block';
        locationInfo.style.animation = 'fadeInUp 0.3s ease-out';
    } else {
        locationInfo.style.display = 'none';
    }
}

// Open link with loading animation
function openLink(url, element) {
    // Add loading animation
    element.classList.add('loading');
    
    // Simulate loading delay for better UX
    setTimeout(() => {
        window.open(url, '_blank');
        element.classList.remove('loading');
    }, 500);
}

// Setup profile image with click to change functionality
function setupProfileImage() {
    const profileImg = document.getElementById('profileImg');
    
    profileImg.addEventListener('click', function() {
        const newImageUrl = prompt('Enter your profile image URL:');
        if (newImageUrl && newImageUrl.trim() !== '') {
            this.src = newImageUrl;
            this.alt = 'Profile Picture';
        }
    });
}

// Utility function to update social media links
function updateSocialLink(platform, newValue) {
    switch(platform) {
        case 'whatsapp':
            socialConfig.whatsapp.number = newValue;
            break;
        case 'instagram':
            socialConfig.instagram.username = newValue;
            socialConfig.instagram.url = `https://instagram.com/${newValue}`;
            break;
        case 'snapchat':
            socialConfig.snapchat.username = newValue;
            socialConfig.snapchat.url = `https://snapchat.com/add/${newValue}`;
            break;
        case 'tiktok':
            socialConfig.tiktok.username = newValue;
            socialConfig.tiktok.url = `https://tiktok.com/@${newValue}`;
            break;
    }
}

// Utility function to update location
function updateLocation(newAddress, lat = 0, lng = 0) {
    locationConfig.address = newAddress;
    locationConfig.coordinates.lat = lat;
    locationConfig.coordinates.lng = lng;
    locationText.textContent = newAddress;
}

// Add some interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Add click effect to profile card
    const profileCard = document.querySelector('.profile-card');
    
    profileCard.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    profileCard.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
    
    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            const activeElement = document.activeElement;
            if (activeElement.classList.contains('link-button')) {
                activeElement.click();
            }
        }
    });
});

// Add smooth scrolling for better UX
document.documentElement.style.scrollBehavior = 'smooth';

// Add error handling for broken images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'https://via.placeholder.com/150x150/4A90E2/FFFFFF?text=You';
        });
    });
});

// Add copy to clipboard functionality for location
function copyLocationToClipboard() {
    const textToCopy = locationConfig.mapUrl || locationConfig.address;
    if (navigator.clipboard) {
        navigator.clipboard.writeText(textToCopy).then(() => {
            showNotification('Location link copied to clipboard!');
        });
    } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification('Location link copied to clipboard!');
    }
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4A90E2;
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        z-index: 1000;
        animation: fadeInUp 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Make location text clickable to copy
locationText.addEventListener('click', copyLocationToClipboard);
locationText.style.cursor = 'pointer';
locationText.title = 'Click to copy location';

// Setup bubble animations
function setupBubbleAnimations() {
    // Create additional random bubbles
    setInterval(createRandomBubble, 2000);
    
    // Add mouse interaction with bubbles
    document.addEventListener('mousemove', function(e) {
        if (Math.random() < 0.1) { // 10% chance on mouse move
            createMouseBubble(e.clientX, e.clientY);
        }
    });
}

// Create random bubbles
function createRandomBubble() {
    const bubblesContainer = document.querySelector('.bubbles');
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    
    // Random size between 10px and 60px
    const size = Math.random() * 50 + 10;
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';
    
    // Random position
    bubble.style.left = Math.random() * 100 + '%';
    
    // Random animation duration
    const duration = Math.random() * 4 + 4; // 4-8 seconds
    bubble.style.animationDuration = duration + 's';
    
    // Random delay
    const delay = Math.random() * 2;
    bubble.style.animationDelay = delay + 's';
    
    bubblesContainer.appendChild(bubble);
    
    // Remove bubble after animation completes
    setTimeout(() => {
        if (bubble.parentNode) {
            bubble.parentNode.removeChild(bubble);
        }
    }, (duration + delay) * 1000);
}

// Create bubble on mouse interaction
function createMouseBubble(x, y) {
    const bubblesContainer = document.querySelector('.bubbles');
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.style.position = 'fixed';
    bubble.style.left = x + 'px';
    bubble.style.top = y + 'px';
    bubble.style.width = '20px';
    bubble.style.height = '20px';
    bubble.style.animationDuration = '3s';
    bubble.style.animationDelay = '0s';
    
    bubblesContainer.appendChild(bubble);
    
    setTimeout(() => {
        if (bubble.parentNode) {
            bubble.parentNode.removeChild(bubble);
        }
    }, 3000);
}

// Setup interactive effects
function setupInteractiveEffects() {
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.link-button');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            createRippleEffect(e, this);
        });
    });
    
    // Add floating animation to profile card on hover
    const profileCard = document.querySelector('.profile-card');
    profileCard.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
        this.style.transition = 'all 0.3s ease';
    });
    
    profileCard.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
    
    // Add sparkle effect on profile image click
    const profileImg = document.getElementById('profileImg');
    profileImg.addEventListener('click', function() {
        createSparkleEffect(this);
    });
}

// Create ripple effect
function createRippleEffect(event, element) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    `;
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Create sparkle effect
function createSparkleEffect(element) {
    for (let i = 0; i < 8; i++) {
        const sparkle = document.createElement('div');
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const angle = (i / 8) * Math.PI * 2;
        const distance = 60;
        const x = centerX + Math.cos(angle) * distance;
        const y = centerY + Math.sin(angle) * distance;
        
        sparkle.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: 4px;
            height: 4px;
            background: #FFD700;
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            animation: sparkle 1s ease-out forwards;
        `;
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    }
}

// Add CSS for new animations
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes sparkle {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
        }
        50% {
            transform: scale(1) rotate(180deg);
            opacity: 1;
        }
        100% {
            transform: scale(0) rotate(360deg);
            opacity: 0;
        }
    }
    
    .profile-card {
        transition: all 0.3s ease;
    }
    
    .link-button {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);

// Setup viewport height for mobile devices
function setupViewportHeight() {
    // Set CSS custom property for viewport height
    function setViewportHeight() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    
    // Set initial viewport height
    setViewportHeight();
    
    // Update viewport height on resize
    window.addEventListener('resize', setViewportHeight);
    window.addEventListener('orientationchange', function() {
        setTimeout(setViewportHeight, 100);
    });
    
    // Prevent zoom on double tap for mobile
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function(event) {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
    
    // Prevent pull-to-refresh on mobile
    document.addEventListener('touchstart', function(e) {
        if (e.touches.length > 1) {
            e.preventDefault();
        }
    }, { passive: false });
    
    let startY = 0;
    document.addEventListener('touchstart', function(e) {
        startY = e.touches[0].clientY;
    });
    
    document.addEventListener('touchmove', function(e) {
        const currentY = e.touches[0].clientY;
        if (startY < currentY && window.scrollY === 0) {
            e.preventDefault();
        }
    }, { passive: false });
}
