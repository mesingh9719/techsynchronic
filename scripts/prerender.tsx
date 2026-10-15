import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { renderToString } from 'react-dom/server';
import App from '../src/App';
import { pages } from '../src/lib/pages';

// Emit real HTML documents for static hosting, direct URLs, and search engines.
// Vite bundles this entry for Node as a temporary build artifact.
const template = await readFile('dist/index.html', 'utf8');
const escape = (text: string) => text.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

for (const page of Object.values(pages)) {
  let html = template.replace('<div id="root"></div>', `<div id="root">${renderToString(<App pathname={page.path} />)}</div>`);
  html = html.replace(/<title>.*?<\/title>/, `<title>${escape(page.title)}</title>`);
  for (const attribute of ['name="description"', 'property="og:description"', 'name="twitter:description"']) {
    html = html.replace(new RegExp(`(<meta ${attribute} content=")[^"]*(")`), `$1${escape(page.description)}$2`);
  }
  for (const attribute of ['property="og:title"', 'name="twitter:title"']) {
    html = html.replace(new RegExp(`(<meta ${attribute} content=")[^"]*(")`), `$1${escape(page.title)}$2`);
  }
  if (page.id === 'not-found') html = html.replace('content="index, follow, max-image-preview:large"', 'content="noindex, follow"');
  const output = page.id === 'not-found' ? 'dist/404.html' : join('dist', page.path, 'index.html');
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, html);
  console.info(`Rendered ${page.path}`);
}
