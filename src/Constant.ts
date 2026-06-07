const defaultUrl = 'https://adgoneoficial.github.io';
const defaultPath = '/';
export const DEFAULT_URL = `${import.meta.env.VITE_APP_URL || defaultUrl}${import.meta.env.VITE_BASE_PATH || defaultPath}`;
export const DEFAULT_PATH = `${import.meta.env.VITE_BASE_PATH || defaultPath}`;