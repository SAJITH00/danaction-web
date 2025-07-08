import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['lodash-es'],  // Add this for better dependency optimization
    exclude: ['lodash']     // Exclude commonjs version if present
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          jspdf: ['jspdf'],
          vendor: ['lodash-es', 'axios', 'moment']  // Use lodash-es here
        }
      }
    }
  }
});