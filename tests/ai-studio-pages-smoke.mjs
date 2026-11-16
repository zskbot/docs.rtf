import assert from "node:assert/strict";
import { Script } from "node:vm";
import { readFileSync } from "node:fs";

const index = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const studio = readFileSync(new URL("../studio.html", import.meta.url), "utf8");

for (const [file, html] of [["index.html", index], ["studio.html", studio]]) {
  const scripts = [...html.matchAll(/<script(?:\\s[^>]*)?>([\\s\\S]*?)<\\/script>/gi)];
  assert.ok(scripts.length > 0, `${file} should contain an inline script`);
  for (const [i, match] of scripts.entries()) {
    assert.doesNotThrow(() => new Script(match[1], { filename: `${file}#script-${i + 1}` }));
  }
}
assert.doesNotMatch(studio, /\\\\nconst PAGES_BASE/, "Studio script must use a real line break, not a literal \\n sequence");

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
