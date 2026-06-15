#!/usr/bin/env node
/*
 * Automatic cache-busting.
 *
 * Rewrites every local CSS/JS reference in the HTML files to
 *   assets/.../file.js?v=<content-hash>
 * where the hash is derived from the file's actual contents.
 *
 * Why: browsers cache assets by URL. If the URL never changes, a visitor can
 * keep seeing an old styles.css / site-data-*.js (and therefore old images)
 * long after a deploy. A content hash means the URL changes only when the
 * file's contents change — unchanged assets stay cached (fast), changed ones
 * are fetched fresh (no stale content). This runs at deploy time, so the
 * version can never be forgotten.
 */
import { readFileSync, writeFileSync, existsSync, readdirSync } from "node:fs";
import { createHash } from "node:crypto";
import { resolve } from "node:path";

const root = process.cwd();
const htmlFiles = readdirSync(root).filter((f) => f.endsWith(".html"));

const hashCache = new Map();
function hashOf(absPath) {
  if (hashCache.has(absPath)) return hashCache.get(absPath);
  const h = createHash("sha1").update(readFileSync(absPath)).digest("hex").slice(0, 10);
  hashCache.set(absPath, h);
  return h;
}

// href/src="assets/....css|js" with an optional existing ?v=... query
const re = /\b(href|src)="(assets\/[^"?]+\.(?:css|js))(?:\?v=[^"]*)?"/g;

let stamped = 0;
for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  const next = html.replace(re, (match, attr, assetPath) => {
    const abs = resolve(root, assetPath);
    if (!existsSync(abs)) return match; // leave unknown/missing assets untouched
    stamped++;
    return `${attr}="${assetPath}?v=${hashOf(abs)}"`;
  });
  if (next !== html) writeFileSync(file, next);
}

console.log(`Stamped ${stamped} asset references across ${htmlFiles.length} HTML files`);
