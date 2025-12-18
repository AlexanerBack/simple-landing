// EmailJS Configuration Example
// Copy this file to config.js and fill in your credentials
// Get your credentials from https://www.emailjs.com/
// 
// SECURITY NOTES:
// 1. PUBLIC_KEY is meant to be public, but configure domain restrictions in EmailJS Dashboard
// 2. Go to EmailJS Dashboard > Settings > Security and add your domain to "Allowed Domains"
// 3. Set up rate limiting in EmailJS Dashboard to prevent abuse
// 4. Monitor usage in EmailJS Dashboard > Logs
// 5. If keys are compromised, regenerate them in EmailJS Dashboard

const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'YOUR_PUBLIC_KEY',
    SERVICE_ID: 'YOUR_SERVICE_ID',
    TEMPLATE_ID: 'YOUR_TEMPLATE_ID',
    // Add your allowed domains (empty array = allow all, not recommended)
    // Example: ['yourdomain.com', 'www.yourdomain.com']
    ALLOWED_DOMAINS: []
};

