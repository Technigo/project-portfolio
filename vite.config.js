import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.', // This ensures the root directory is the correct level
  base: './', // Serve files relative to the project root
});
