import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    lightningcss: {
      errorRecovery: true, // Silently drops legacy IE hacks (like *zoom, *display) in Odometer CSS
    },
  },
  define: {
    global: 'window', // Fixes "global is not defined" error for react-odometerjs
  },
});
