import { useEffect } from 'react';

export default function RedirectTo404() {
  useEffect(() => {
    window.location.replace(`/404.html`);
  }, []);
  return null;
}