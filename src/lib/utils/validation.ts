/**
 * Validate Kenyan phone number
 * Formats: +254XXXXXXXXX, 07XXXXXXXX, 01XXXXXXXX
 */
export function isValidKenyanPhone(phone: string): boolean {
  const cleanPhone = phone.replace(/\s+/g, '');
  
  // +254 format
  if (/^\+254[17]\d{8}$/.test(cleanPhone)) return true;
  
  // 07 or 01 format
  if (/^0[17]\d{8}$/.test(cleanPhone)) return true;
  
  // 254 format (without +)
  if (/^254[17]\d{8}$/.test(cleanPhone)) return true;
  
  return false;
}

/**
 * Format phone to +254 format
 */
export function formatKenyanPhone(phone: string): string {
  const cleanPhone = phone.replace(/\s+/g, '').replace(/^\+/, '');
  
  if (cleanPhone.startsWith('0')) {
    return `+254${cleanPhone.substring(1)}`;
  }
  
  if (cleanPhone.startsWith('254')) {
    return `+${cleanPhone}`;
  }
  
  return phone;
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate that a string is not empty after trimming
 */
export function isNotEmpty(value: string): boolean {
  return value.trim().length > 0;
}

/**
 * Validate minimum length
 */
export function hasMinLength(value: string, minLength: number): boolean {
  return value.trim().length >= minLength;
}

/**
 * Validate maximum length
 */
export function hasMaxLength(value: string, maxLength: number): boolean {
  return value.trim().length <= maxLength;
}
