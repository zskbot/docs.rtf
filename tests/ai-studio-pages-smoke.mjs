import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const index = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const studio = readFileSync(new URL("../studio.html", import.meta.url), "utf8");

assert.match(index, /const PAGES_BASE=['"]\/docs\.rtf['"]/);
assert.match(index, /current\.startsWith\(PAGES_BASE\+'\/'\)/);
assert.match(index, /history\.pushState\(\{\},'',pagePath\(p\)\)/);
assert.match(index, /location\.href=pagePath\(href\)/);
assert.match(index, /href="\/studio\.html"/);
assert.match(studio, /const PAGES_BASE=['"]\/docs\.rtf['"]/);
assert.match(studio, /querySelectorAll\('a\[href\^="\/"\]'\)/);
assert.match(studio, /a\.setAttribute\('href',PAGES_BASE/);

const base = "/docs.rtf";
const withBase = (path) => base + (path === "/" ? "/" : path);
assert.equal(withBase("/"), "/docs.rtf/");
assert.equal(withBase("/studio.html"), "/docs.rtf/studio.html");
assert.equal(withBase("/dang-nhap"), "/docs.rtf/dang-nhap");

console.log("AI Studio Pages smoke tests passed.");
