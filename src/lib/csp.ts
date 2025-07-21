// Content Security Policy utilities
export const generateCSPMeta = (): string => {
  const cspDirectives = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' https://cdn.emailjs.com https://docs.google.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https:",
    "connect-src 'self' https://api.emailjs.com https://docs.google.com",
    "frame-src https://docs.google.com",
    "form-action 'self' https://docs.google.com",
    "base-uri 'self'",
    "object-src 'none'",
    "frame-ancestors 'none'"
  ];
  
  return cspDirectives.join('; ');
};

// Security headers for meta tags
export const securityHeaders = {
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'geolocation=(), microphone=(), camera=()'
};