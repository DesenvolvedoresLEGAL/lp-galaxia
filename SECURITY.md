# Security Implementation Guide

## 🛡️ Security Measures Implemented

### ✅ Input Validation & Sanitization
- **Real-time input sanitization** in form fields
- **Zod schema validation** for all user inputs
- **Character filtering** to prevent XSS attacks
- **Length limits** on all input fields

### ✅ Rate Limiting
- **3 submissions per 15 minutes** per user
- **Client-side rate limiting** with memory store
- **Automatic lockout** for excessive requests

### ✅ CSRF Protection
- **CSRF tokens** generated for each form
- **Token validation** before form submission
- **Automatic token refresh** after successful submission

### ✅ Content Security Policy (CSP)
- **Strict CSP headers** in HTML meta tags
- **Whitelisted domains** for external resources
- **Prevention of inline scripts** (except necessary ones)
- **Frame protection** against clickjacking

### ✅ Security Headers
- **X-Frame-Options**: DENY
- **X-Content-Type-Options**: nosniff  
- **X-XSS-Protection**: 1; mode=block
- **Referrer-Policy**: strict-origin-when-cross-origin

## 🔧 Implementation Details

### Contact Form Security
- Input sanitization prevents HTML/JS injection
- Phone number validation allows only valid characters
- Email validation with comprehensive regex
- Name fields only allow letters and spaces
- Message field sanitized but preserves content

### EmailJS Configuration
- Moved credentials to separate security module
- Added timestamp and CSRF token to emails
- Error handling prevents information leakage

## ⚠️ Production Recommendations

### 1. Environment Variables
Move EmailJS credentials to environment variables:
```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id  
VITE_EMAILJS_USER_ID=your_user_id
```

### 2. Server-Side Validation
Implement backend validation for:
- Rate limiting (use Redis/database)
- CSRF token validation
- Input sanitization
- Email sending

### 3. Enhanced Security Headers
Add these headers at server level:
```
Strict-Transport-Security: max-age=31536000; includeSubDomains
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

### 4. Monitoring & Logging
- Log failed form submissions
- Monitor for suspicious patterns
- Set up alerts for rate limit violations

## 🚨 Security Best Practices

1. **Never trust user input** - Always validate and sanitize
2. **Use HTTPS only** - Enforce SSL/TLS encryption
3. **Regular security audits** - Review code for vulnerabilities
4. **Keep dependencies updated** - Monitor for security patches
5. **Implement proper error handling** - Don't leak sensitive information

## 🔍 Testing Security

### Manual Testing
1. Try submitting forms with HTML/JS code
2. Test rate limiting by submitting multiple times
3. Check CSP by trying to inject external scripts
4. Verify CSRF protection works

### Automated Testing
Consider using security scanning tools:
- OWASP ZAP
- Snyk for dependency scanning
- ESLint security plugins

## 📞 Security Contact

For security-related issues or vulnerabilities, contact:
- Email: security@operadora.legal
- Responsible disclosure preferred