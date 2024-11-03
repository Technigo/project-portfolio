import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.', // Specifies that the root directory is the project root
  base: './', // Serves files relative to the project root
});
