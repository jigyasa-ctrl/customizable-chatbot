function sanitizeText(text) {
    // This function sanitizes input text by removing potentially dangerous characters/scripts
    // and trimming extra whitespace.
    // For a basic version, we'll strip script tags and trim the string.
        if (typeof text !== 'string') return '';
        // Remove script tags
        let sanitized = text.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, '');
        // Remove any remaining angle brackets (basic HTML tag removal)
        sanitized = sanitized.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        // Trim whitespace
        sanitized = sanitized.trim();
        return sanitized;

}

export {sanitizeText}