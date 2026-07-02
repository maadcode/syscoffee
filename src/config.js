export const CONFIG = {
  SHOW_DEBUG_ROLES: import.meta.env.VITE_SHOW_DEBUG_ROLES === 'true' || false,
  FORMSPREE_URL: import.meta.env.VITE_FORMSPREE_URL || '',
  OPTIONS_PER_QUESTION: Number(import.meta.env.VITE_OPTIONS_PER_QUESTION) || 3,
};
