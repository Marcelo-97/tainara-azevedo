const path = require('path');
const fs = require('fs');
const fg = require('fast-glob');
const sharp = require('sharp');

const INPUT_DIR = path.join(__dirname, '..', 'images');
const OUTPUT_DIR = path.join(INPUT_DIR, 'optimized');
const SIZES = [400, 800, 1200];
const FORMATS = ['avif', 'webp', 'jpg'];

async function ensureDir(dir) {
  await fs.promises.mkdir(dir, { recursive: true });
}

function fileNameNoExt(file) {
  return path.basename(file, path.extname(file));
}

async function processFile(file) {
  const rel = path.relative(INPUT_DIR, file);
  const name = fileNameNoExt(rel);
  const outBaseDir = path.join(OUTPUT_DIR, path.dirname(rel));
  await ensureDir(outBaseDir);

  const variants = [];

  for (const size of SIZES) {
    for (const fmt of FORMATS) {
      const outName = `${name}-${size}.${fmt}`;
      const outPath = path.join(outBaseDir, outName);

      let pipeline = sharp(file).rotate().resize({ width: size, withoutEnlargement: true });
      if (fmt === 'webp') pipeline = pipeline.webp({ quality: 80 });
      else if (fmt === 'avif') pipeline = pipeline.avif({ quality: 50 });
      else if (fmt === 'jpg') pipeline = pipeline.jpeg({ quality: 80 });

      await pipeline.toFile(outPath);
      variants.push({ src: path.relative(INPUT_DIR, outPath).replace(/\\/g, '/'), width: size, format: fmt });
    }
  }

  return { original: path.relative(INPUT_DIR, rel).replace(/\\/g, '/'), variants };
}

async function buildManifest(items) {
  const manifestPath = path.join(OUTPUT_DIR, 'manifest.json');
  await fs.promises.writeFile(manifestPath, JSON.stringify(items, null, 2), 'utf8');
  console.log('Manifest written to', manifestPath);
}

async function run() {
  if (!fs.existsSync(INPUT_DIR)) {
    console.error('Input directory not found:', INPUT_DIR);
    process.exit(1);
  }

  await ensureDir(OUTPUT_DIR);

  const patterns = ['**/*.{jpg,jpeg,png}'];
  const entries = await fg(patterns, { cwd: INPUT_DIR, absolute: true, ignore: ['optimized/**'] });

  if (!entries.length) {
    console.log('No images found in', INPUT_DIR);
    return;
  }

  const manifest = [];
  for (const file of entries) {
    try {
      const item = await processFile(file);
      manifest.push(item);
      console.log('Processed', item.original);
    } catch (err) {
      console.error('Error processing', file, err);
    }
  }

  await buildManifest(manifest);
  console.log('Done. Optimized images are in', OUTPUT_DIR);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
