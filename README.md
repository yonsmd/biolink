# Bio Link Page

A modern, responsive bio link page with social media integration and location display.

## Features

- **WhatsApp Integration**: Direct messaging with pre-filled message
- **Instagram Link**: Direct link to your Instagram profile
- **Snapchat Link**: Direct link to add you on Snapchat
- **TikTok Link**: Direct link to your TikTok profile
- **Location Display**: Show your location with copy-to-clipboard functionality
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Modern UI**: Beautiful gradient backgrounds and smooth animations
- **Interactive Elements**: Hover effects and loading animations

## How to Customize

### 1. Update Social Media Links

Open `script.js` and modify the `socialConfig` object:

```javascript
const socialConfig = {
    whatsapp: {
        number: '+1234567890', // Replace with your WhatsApp number
        message: 'Hello! I found you through your bio link.'
    },
    instagram: {
        username: 'your_username', // Replace with your Instagram username
        url: 'https://instagram.com/your_username'
    },
    snapchat: {
        username: 'your_username', // Replace with your Snapchat username
        url: 'https://snapchat.com/add/your_username'
    },
    tiktok: {
        username: 'your_username', // Replace with your TikTok username
        url: 'https://tiktok.com/@your_username'
    }
};
```

### 2. Update Your Information

In `index.html`, update:
- **Name**: Change "Your Name" to your actual name
- **Bio**: Update the bio text to describe yourself
- **Profile Image**: Click on the profile image to change it, or replace the placeholder URL

### 3. Update Location

In `script.js`, modify the `locationConfig`:

```javascript
const locationConfig = {
    address: 'Your City, Country', // Replace with your location
    coordinates: {
        lat: 0, // Optional: Add your latitude
        lng: 0  // Optional: Add your longitude
    }
};
```

### 4. Customize Colors and Styling

Edit `style.css` to change:
- Color schemes
- Fonts
- Button styles
- Background gradients
- Animations

## How to Use

1. Open `index.html` in your web browser
2. Customize the social media links and information as described above
3. Upload to any web hosting service
4. Share your bio link!

## Features Explained

### WhatsApp Integration
- Clicking the WhatsApp button opens WhatsApp with a pre-filled message
- The number should include country code (e.g., +1234567890)

### Social Media Links
- All social media buttons open in new tabs
- Links are formatted correctly for each platform

### Location Feature
- Click the location button to show/hide location info
- Click on the location text to copy it to clipboard
- Shows a notification when location is copied

### Profile Image
- Click on the profile image to change it
- Supports any image URL
- Has a fallback placeholder if image fails to load

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## File Structure

```
bio-link/
├── index.html          # Main HTML file
├── style.css           # CSS styling
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Tips

1. **Test on Mobile**: Always test your bio link on mobile devices
2. **Use HTTPS**: For production, use HTTPS to ensure all features work properly
3. **Image Optimization**: Use optimized images for better loading speed
4. **Social Media Handles**: Make sure your social media handles are correct and public

Enjoy your new bio link page! 🚀
