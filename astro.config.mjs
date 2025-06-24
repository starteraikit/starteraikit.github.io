import { defineConfig } from 'astro/config';
import github from '@astrojs/github';

export default defineConfig({
  adapter: github(),
  base: '/',
});