// Security utilities for input validation and sanitization
import { z } from 'zod';

// Rate limiting store (in production, use Redis or database)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Input sanitization
export const sanitizeString = (input: string): string => {
  if (!input) return '';
  
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocols
    .replace(/on\w+=/gi, '') // Remove event handlers
    .substring(0, 1000); // Limit length
};

// Phone number sanitization
export const sanitizePhone = (phone: string): string => {
  if (!phone) return '';
  return phone.replace(/[^\d\s\-\(\)\+]/g, '').substring(0, 20);
};

// Email validation schema
export const emailSchema = z.string()
  .email('Email inválido')
  .min(5, 'Email muito curto')
  .max(100, 'Email muito longo')
  .refine(email => !email.includes('<') && !email.includes('>'), 'Email contém caracteres inválidos');

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z.string()
    .min(2, 'Nome deve ter pelo menos 2 caracteres')
    .max(100, 'Nome muito longo')
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, 'Nome deve conter apenas letras e espaços'),
  
  company: z.string()
    .min(2, 'Nome da empresa deve ter pelo menos 2 caracteres')
    .max(100, 'Nome da empresa muito longo'),
  
  email: emailSchema,
  
  phone: z.string()
    .min(10, 'Telefone deve ter pelo menos 10 dígitos')
    .max(20, 'Telefone muito longo')
    .regex(/^[\d\s\-\(\)\+]+$/, 'Telefone contém caracteres inválidos'),
  
  challenge: z.string()
    .min(10, 'Descrição deve ter pelo menos 10 caracteres')
    .max(2000, 'Descrição muito longa')
});

// Rate limiting function
export const checkRateLimit = (identifier: string, maxRequests: number = 3, windowMs: number = 900000): boolean => {
  const now = Date.now();
  const key = identifier;
  
  const record = rateLimitStore.get(key);
  
  if (!record) {
    rateLimitStore.set(key, { count: 1, resetTime: now + windowMs });
    return true;
  }
  
  if (now > record.resetTime) {
    rateLimitStore.set(key, { count: 1, resetTime: now + windowMs });
    return true;
  }
  
  if (record.count >= maxRequests) {
    return false;
  }
  
  record.count++;
  return true;
};

// Generate simple CSRF token
export const generateCSRFToken = (): string => {
  return btoa(Math.random().toString(36).substring(2) + Date.now().toString(36));
};

// Validate CSRF token (basic client-side validation)
export const validateCSRFToken = (token: string): boolean => {
  try {
    const decoded = atob(token);
    const timestamp = parseInt(decoded.slice(-10), 36);
    const now = Date.now();
    
    // Token expires after 1 hour
    return (now - timestamp) < 3600000;
  } catch {
    return false;
  }
};

// Secure email configuration (move sensitive data to environment)
export const getEmailConfig = () => {
  // In a real application, these should come from environment variables
  // For now, we'll use the existing values but recommend moving them
  return {
    serviceId: 'service_wi3kvx7',
    templateId: 'template_5l2767r',
    userId: 'oLw9xvmdczE218mGh',
    contactEmail: 'sos@operadora.legal'
  };
};