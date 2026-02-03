/**
 * Image Optimization Utilities
 * Provides helpers for optimizing image loading and delivery across the site
 */

/**
 * Generate optimized image URL with query parameters for better performance
 * Supports common image CDN parameters for format, width, and quality
 * @param url - Original image URL
 * @param width - Desired width in pixels (optional)
 * @param quality - Quality level 1-100 (optional, default: 80)
 * @returns Optimized image URL
 */
export const optimizeImageUrl = (
  url: string,
  width?: number,
  quality: number = 80
): string => {
  // Skip optimization for local/relative paths or data URLs
  if (url.startsWith('/') || url.startsWith('data:')) {
    return url;
  }

  // Check if URL already has query parameters
  const separator = url.includes('?') ? '&' : '?';
  
  let params = `auto=format&q=${quality}`;
  
  if (width) {
    params += `&w=${width}`;
    params += `&fit=crop`;
  }
  
  return `${url}${separator}${params}`;
};

/**
 * Get responsive image URL based on device width
 * @param baseUrl - Base image URL
 * @param deviceWidth - Current device/window width
 * @returns Optimized image URL for the device
 */
export const getResponsiveImageUrl = (
  baseUrl: string,
  deviceWidth: number = typeof window !== 'undefined' ? window.innerWidth : 1024
): string => {
  // Determine optimal width based on device
  let targetWidth = 400;
  
  if (deviceWidth > 1200) {
    targetWidth = 1200;
  } else if (deviceWidth > 768) {
    targetWidth = 800;
  } else if (deviceWidth > 480) {
    targetWidth = 600;
  }
  
  return optimizeImageUrl(baseUrl, targetWidth, 80);
};

/**
 * Preload an image to avoid flash of unstyled content
 * Useful for hero images or critical images above the fold
 * @param url - Image URL to preload
 */
export const preloadImage = (url: string): void => {
  if (typeof document === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = url;
  document.head.appendChild(link);
};

/**
 * Prefetch images for better performance
 * Use for images that will likely be needed soon
 * @param urls - Array of image URLs to prefetch
 */
export const prefetchImages = (urls: string[]): void => {
  if (typeof document === 'undefined') return;
  
  urls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.as = 'image';
    link.href = url;
    document.head.appendChild(link);
  });
};

/**
 * Generate a blurhash placeholder for images
 * Returns a solid color based on a hash of the URL
 * @param url - Image URL
 * @returns Hex color code for placeholder
 */
export const getImagePlaceholderColor = (url: string): string => {
  // Simple hash-based color generation
  let hash = 0;
  for (let i = 0; i < url.length; i++) {
    hash = ((hash << 5) - hash) + url.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
  }
  
  const hue = Math.abs(hash % 360);
  return `hsl(${hue}, 70%, 50%)`;
};

/**
 * Format image dimensions for common use cases
 */
export const IMAGE_SIZES = {
  thumbnail: { width: 150, height: 150 },
  small: { width: 300, height: 300 },
  medium: { width: 600, height: 600 },
  large: { width: 1200, height: 1200 },
  hero: { width: 1920, height: 1080 },
} as const;
