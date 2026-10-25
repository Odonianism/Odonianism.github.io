import { cp } from 'node:fs/promises';

await cp(new URL('../source/images/', import.meta.url), new URL('../public/images/', import.meta.url), {
  recursive: true,
});
