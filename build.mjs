// Maths Workshop static site generator.
// Reads problems/*.md and site.config.json, writes the finished website to dist/.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import katex from 'katex';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(ROOT, 'dist');
const config = JSON.parse(fs.readFileSync(path.join(ROOT, 'site.config.json'), 'utf8'));
const SITE_URL = config.url.replace(/\/+$/, '');

/* ---------- vocabulary ---------- */
const CATS = {
  algebra:  ['Algebra', 'Equations, inequalities, polynomials and algebraic identities.'],
  analysis: ['Analysis', 'Limits, sequences, series, derivatives and integrals.'],
  linear:   ['Linear algebra', 'Matrices, vector spaces, determinants and diagonalisation.'],
  proba:    ['Probability', 'Counting outcomes, conditional probability and random variables.'],
  geometry: ['Geometry', 'Plane and space geometry, triangles, circles and transformations.'],
  number:   ['Number theory', 'Divisibility, primes, congruences and irrationality proofs.'],
  combi:    ['Combinatorics', 'Counting arguments, binomial coefficients and bijections.'],
  logic:    ['Logic & sets', 'Proof techniques, quantifiers, sets and maps.']
};
const LEVELS = { lycee: 'High school', l1: 'L1', l2: 'L2', l3: 'L3', m1: 'M1', olympiad: 'Olympiad' };

/* ---------- helpers ---------- */
const esc = s => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const slugify = s => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
const fmtDate = iso => new Date(iso + 'T12:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });

function renderMath(m) {
  let display = false, tex;
  if (m.startsWith('$$')) { display = true; tex = m.slice(2, -2); }
  else if (m.startsWith('\\[')) { display = true; tex = m.slice(2, -2); }
  else if (m.startsWith('\\(')) { tex = m.slice(2, -2); }
  else tex = m.slice(1, -1);
  return katex.renderToString(tex.trim(), { displayMode: display, throwOnError: false, strict: 'ignore', output: 'htmlAndMathml' });
}

// Text with $...$ and $$...$$ math, **bold**, "- " lists and blank-line paragraphs -> HTML.
function rich(src) {
  const maths = [];
  let s = String(src || '').replace(/\$\$[\s\S]+?\$\$|\\\[[\s\S]+?\\\]|\\\([\s\S]+?\\\)|\$(?:\\.|[^$\\\n])+\$/g, m => {
    maths.push(m); return '\u0000' + (maths.length - 1) + '\u0000';
  });
  s = esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  const html = s.split(/\n{2,}/).map(b => {
    const lines = b.split('\n').filter(l => l.trim() !== '');
    if (!lines.length) return '';
    if (lines.every(l => /^\s*[-•]\s+/.test(l))) return '<ul>' + lines.map(l => '<li>' + l.replace(/^\s*[-•]\s+/, '') + '</li>').join('') + '</ul>';
    if (lines.every(l => /^\s*\d+[.)]\s+/.test(l))) return '<ol>' + lines.map(l => '<li>' + l.replace(/^\s*\d+[.)]\s+/, '') + '</li>').join('') + '</ol>';
    return '<p>' + lines.join('<br>') + '</p>';
  }).join('');
  return html.replace(/\u0000(\d+)\u0000/g, (_, i) => renderMath(maths[+i]));
}

// Rough plain text of a statement for meta descriptions (math is dropped).
function plain(src) {
  return String(src || '').replace(/\$\$[\s\S]+?\$\$|\\\[[\s\S]+?\\\]|\\\([\s\S]+?\\\)|\$(?:\\.|[^$\\\n])+\$/g, ' … ').replace(/\*\*/g, '').replace(/\s+/g, ' ').trim();
}

function dots(n) {
  return `<span class="dots" role="img" aria-label="Difficulty ${n} of 5">${[1, 2, 3, 4, 5].map(i => `<i${i <= n ? ' class="on"' : ''}></i>`).join('')}</span>`;
}

/* ---------- read problems ---------- */
function parseProblem(file) {
  const raw = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
  const m = /^---\n([\s\S]*?)\n---\n?([\s\S]*)$/.exec(raw);
  const name = path.basename(file);
  if (!m) throw new Error(`${name}: the file must start with a --- front matter block`);
  const meta = {};
  m[1].split('\n').forEach(l => { const i = l.indexOf(':'); if (i > 0) meta[l.slice(0, i).trim().toLowerCase()] = l.slice(i + 1).trim(); });
  const sections = {}; let cur = null;
  m[2].split('\n').forEach(line => {
    const h = /^##\s+(.+?)\s*$/.exec(line);
    if (h) { cur = h[1].toLowerCase(); sections[cur] = []; } else if (cur) sections[cur].push(line);
  });
  const get = k => (sections[k] || []).join('\n').trim();
  const p = {
    slug: slugify(path.basename(file, '.md')),
    title: meta.title, cat: meta.category, level: meta.level,
    diff: Math.min(5, Math.max(1, parseInt(meta.difficulty, 10) || 2)),
    tags: (meta.tags || '').split(',').map(t => t.trim()).filter(Boolean),
    date: /^\d{4}-\d{2}-\d{2}$/.test(meta.date || '') ? meta.date : new Date().toISOString().slice(0, 10),
    draft: /^(true|yes)$/i.test(meta.draft || ''),
    statement: get('statement'), hint: get('hint'), solution: get('solution')
  };
  const bad = [];
  if (!p.title) bad.push('title is missing');
  if (!CATS[p.cat]) bad.push(`category "${p.cat}" is not one of: ${Object.keys(CATS).join(', ')}`);
  if (!LEVELS[p.level]) bad.push(`level "${p.level}" is not one of: ${Object.keys(LEVELS).join(', ')}`);
  if (!p.statement) bad.push('the "## Statement" section is empty');
  if (bad.length) throw new Error(`${name}: ${bad.join('; ')}`);
  return p;
}

const files = fs.readdirSync(path.join(ROOT, 'problems')).filter(f => f.endsWith('.md')).sort();
let problems = files.map(f => parseProblem(path.join(ROOT, 'problems', f))).filter(p => !p.draft);
problems.sort((a, b) => a.date.localeCompare(b.date) || a.slug.localeCompare(b.slug));
problems.forEach((p, i) => { p.num = i + 1; });
const newestFirst = [...problems].reverse();

/* ---------- page shell ---------- */
const adsHead = config.adsenseClient
  ? `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${esc(config.adsenseClient)}" crossorigin="anonymous"></script>\n`
  : '';

function shell({ title, desc, urlPath, body, math = false, jsonld = null, noindex = false, type = 'website' }) {
  const full = `${title} | ${config.name}`;
  const canon = SITE_URL + urlPath;
  return `<!doctype html>
<html lang="${esc(config.language)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(urlPath === '/' ? `${config.name}: ${config.tagline}` : full)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${esc(canon)}">
${noindex ? '<meta name="robots" content="noindex">\n' : ''}<meta property="og:type" content="${type}">
<meta property="og:site_name" content="${esc(config.name)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${esc(canon)}">
<meta name="twitter:card" content="summary">
<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="/assets/style.css">
${math ? '<link rel="stylesheet" href="/assets/katex/katex.min.css">\n' : ''}${adsHead}${jsonld ? `<script type="application/ld+json">${JSON.stringify(jsonld).replace(/</g, '\\u003c')}</script>\n` : ''}</head>
<body>
<header class="top"><div class="wrap">
  <a class="brand" href="/" aria-label="${esc(config.name)} home">
    <svg viewBox="0 0 32 32" aria-hidden="true"><rect x="1" y="1" width="30" height="30" rx="5" fill="var(--ink)"/><path d="M22 9H10l7 7-7 7h12" fill="none" stroke="var(--surface)" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/></svg>
    <span><b>${esc(config.name)}</b><small>${esc(config.tagline)}</small></span>
  </a>
  <nav class="nav" aria-label="Main"><a href="/">Problems</a><a href="/random/">Random</a><a href="/about/">About</a><a href="/contact/">Contact</a></nav>
</div></header>
${body}
<footer class="foot"><div class="wrap">
  <span>© ${new Date().getFullYear()} ${esc(config.owner)}</span>
  <nav aria-label="Footer"><a href="/about/">About</a><a href="/contact/">Contact</a><a href="/privacy/">Privacy policy</a></nav>
</div></footer>
</body>
</html>
`;
}

/* ---------- list pages ---------- */
function side(activeCat) {
  const counts = {}; problems.forEach(p => { counts[p.cat] = (counts[p.cat] || 0) + 1; });
  let h = '<aside class="side"><div><h2>Categories</h2><nav class="cats" aria-label="Categories">';
  h += `<a class="cat" href="/"${!activeCat ? ' aria-current="page"' : ''}><span>All</span><span>${problems.length}</span></a>`;
  for (const [id, [name]] of Object.entries(CATS)) {
    if (!counts[id] && id !== activeCat) continue;
    h += `<a class="cat" href="/category/${id}/"${activeCat === id ? ' aria-current="page"' : ''}><span>${esc(name)}</span><span>${counts[id] || 0}</span></a>`;
  }
  return h + '</nav></div></aside>';
}

function row(p) {
  const tags = p.tags.length ? `<div class="r-tags">${p.tags.map(t => '#' + esc(t)).join('  ')}</div>` : '';
  const search = `${p.title} ${p.tags.join(' ')} ${CATS[p.cat][0]} ${LEVELS[p.level]} ${plain(p.statement)}`.toLowerCase();
  return `<a class="row" href="/problems/${p.slug}/" data-s="${esc(search)}" data-l="${p.level}"><div><div class="r-title"><span class="num">Ex.${p.num}</span><span>${esc(p.title)}</span></div>${tags}</div>`
    + `<div class="c-cat"><span class="chip">${esc(CATS[p.cat][0])}</span></div><div class="c-lvl">${esc(LEVELS[p.level])}</div><div class="c-dif">${dots(p.diff)}</div>`
    + `<div class="meta-m"><span>${esc(LEVELS[p.level])}</span>${dots(p.diff)}</div></a>`;
}

const FILTER_JS = `(function(){var q=document.getElementById('q'),l=document.getElementById('lvl'),rows=[].slice.call(document.querySelectorAll('.row')),c=document.getElementById('count'),n=document.getElementById('none');function f(){var s=q.value.trim().toLowerCase(),lv=l.value,k=0;rows.forEach(function(r){var ok=(!s||r.getAttribute('data-s').indexOf(s)>-1)&&(lv==='all'||r.getAttribute('data-l')===lv);r.hidden=!ok;if(ok)k++});c.textContent=k+(k===1?' problem':' problems');n.hidden=k>0}q.addEventListener('input',f);l.addEventListener('change',f)})();`;

function listPage({ heading, intro, list, activeCat, urlPath, desc, title }) {
  const levelsUsed = Object.keys(LEVELS).filter(k => list.some(p => p.level === k));
  const body = `<div class="wrap layout">
${side(activeCat)}
<main>
  <div class="head"><div><h1>${esc(heading)}</h1><p class="sub"><span id="count">${list.length} ${list.length === 1 ? 'problem' : 'problems'}</span> · ${esc(intro)}</p></div></div>
  <div class="filters">
    <label class="sr" for="q">Search problems</label><input id="q" type="search" placeholder="Search problems…" autocomplete="off">
    <label class="sr" for="lvl">Level</label><select id="lvl"><option value="all">All levels</option>${levelsUsed.map(k => `<option value="${k}">${esc(LEVELS[k])}</option>`).join('')}</select>
  </div>
  <div class="rows">${list.length ? list.map(row).join('') : '<div class="empty">No problems here yet.</div>'}<div class="empty" id="none" hidden>No problem matches these filters.</div></div>
</main></div>
<script>${FILTER_JS}</script>`;
  return shell({ title, desc, urlPath, body });
}

/* ---------- problem page ---------- */
function problemPage(p) {
  const [catName] = CATS[p.cat];
  const related = newestFirst.filter(q => q.cat === p.cat && q.slug !== p.slug).slice(0, 4);
  const idx = problems.findIndex(q => q.slug === p.slug);
  const prev = problems[idx - 1], next = problems[idx + 1];
  const desc = `${catName} problem (${LEVELS[p.level]}): ${p.title}. Read the statement, take a hint and check the full solution.`;
  const body = `<div class="wrap page">
<nav class="crumbs" aria-label="Breadcrumb"><a href="/">Problems</a> › <a href="/category/${p.cat}/">${esc(catName)}</a></nav>
<article>
<div class="eyebrow"><span class="ex-n">Exercise ${p.num}</span><span>${esc(catName)}</span><span>${esc(LEVELS[p.level])}</span>${dots(p.diff)}<span>Added ${fmtDate(p.date)}</span></div>
<h1>${esc(p.title)}</h1>
${p.tags.length ? `<div class="tagline">${p.tags.map(t => `<span class="chip">#${esc(t)}</span>`).join('')}</div>` : ''}
<section class="sheet"><h2 class="label">Statement</h2><div class="body">${rich(p.statement)}</div></section>
${p.hint ? `<details class="hint"><summary>Hint</summary><div class="body">${rich(p.hint)}</div></details>` : ''}
${p.solution ? `<details class="solution"><summary><span class="s-show">Show solution</span><span class="s-hide">Hide solution</span></summary><section class="sheet sol"><h2 class="label">Solution</h2><div class="body">${rich(p.solution)}</div></section></details>` : '<p class="faint">No solution has been written for this problem yet.</p>'}
</article>
${related.length ? `<section class="related"><h2>More ${esc(catName.toLowerCase())} problems</h2><div class="rows">${related.map(row).join('')}</div></section>` : ''}
<nav class="pn" aria-label="Previous and next">${prev ? `<a href="/problems/${prev.slug}/">← ${esc(prev.title)}</a>` : '<span></span>'}${next ? `<a href="/problems/${next.slug}/">${esc(next.title)} →</a>` : '<span></span>'}</nav>
</div>`;
  const jsonld = {
    '@context': 'https://schema.org', '@type': 'LearningResource',
    name: p.title, learningResourceType: 'Exercise', educationalLevel: LEVELS[p.level],
    about: catName, inLanguage: config.language, datePublished: p.date,
    url: `${SITE_URL}/problems/${p.slug}/`, isPartOf: { '@type': 'WebSite', name: config.name, url: SITE_URL + '/' },
    author: { '@type': 'Person', name: config.owner }
  };
  return shell({ title: `${p.title} (${catName}, ${LEVELS[p.level]})`, desc, urlPath: `/problems/${p.slug}/`, body, math: true, jsonld, type: 'article' });
}

/* ---------- info pages ---------- */
function infoPage(title, urlPath, desc, inner) {
  return shell({ title, desc, urlPath, body: `<div class="wrap page"><article class="prose"><h1>${esc(title)}</h1>${inner}</article></div>` });
}
const aboutHtml = `<p>${esc(config.name)} is a collection of maths problems with hints and complete solutions. Each problem is written, typeset and checked by ${esc(config.owner)}.</p>
<p>The problems are grouped by topic (algebra, analysis, linear algebra, probability, number theory, combinatorics and more) and by level, from high school to master's. Every problem has a difficulty rating from 1 to 5, a hint you can open if you are stuck, and a full solution you can reveal once you have tried.</p>
<h2>How to use it</h2>
<ul><li>Read the statement and try it on paper first.</li><li>If you are stuck, open the hint, then try again.</li><li>Open the solution to compare with your own work.</li></ul>
<p>If you find a mistake or have a problem to suggest, please <a href="/contact/">get in touch</a>.</p>`;
const contactHtml = `<p>For corrections, questions or problem suggestions, write to <a href="mailto:${esc(config.email)}">${esc(config.email)}</a>.</p>
<p>Please include the title of the problem and, for a correction, the step you think is wrong.</p>`;
const adsPrivacy = config.adsenseClient ? `<h2>Advertising</h2>
<p>This site uses Google AdSense to show ads. Google and its partners use cookies and similar technologies to serve ads based on your visits to this and other websites. Where required by law, such as in the European Economic Area and the United Kingdom, you are asked for your consent before these cookies are used, and you can change your choice at any time through the privacy and cookie message shown on the site.</p>
<p>You can manage personalised advertising in <a href="https://adssettings.google.com" rel="noopener">Google Ads Settings</a> or opt out of some third-party vendors at <a href="https://www.aboutads.info" rel="noopener">aboutads.info</a>. More information on how Google uses data from sites that use its services is available in <a href="https://policies.google.com/technologies/partner-sites" rel="noopener">Google's partner sites policy</a>.</p>` : '';
const privacyHtml = `<p>Last updated: ${fmtDate(new Date().toISOString().slice(0, 10))}.</p>
<p>${esc(config.name)} does not have user accounts and does not ask you for personal information in order to read the problems.</p>
<h2>What is collected</h2>
<p>Like most websites, the hosting provider may keep standard server logs (such as IP address, browser type and the pages requested) for security and to measure traffic. The site itself does not set cookies of its own.</p>
${adsPrivacy}
<h2>Contact</h2>
<p>Questions about this policy can be sent to <a href="mailto:${esc(config.email)}">${esc(config.email)}</a>.</p>`;

/* ---------- write ---------- */
fs.rmSync(DIST, { recursive: true, force: true });
fs.mkdirSync(DIST, { recursive: true });
function write(rel, content) {
  const file = path.join(DIST, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content);
}
function copyDir(from, to) {
  fs.mkdirSync(to, { recursive: true });
  for (const e of fs.readdirSync(from, { withFileTypes: true })) {
    const a = path.join(from, e.name), b = path.join(to, e.name);
    e.isDirectory() ? copyDir(a, b) : fs.copyFileSync(a, b);
  }
}
copyDir(path.join(ROOT, 'assets'), path.join(DIST, 'assets'));

const urls = [{ loc: '/', lastmod: newestFirst[0]?.date }];
write('index.html', listPage({
  heading: 'Maths problems with solutions', intro: config.description, list: newestFirst, activeCat: null, urlPath: '/',
  title: config.name, desc: config.description
}));
for (const [id, [name, intro]] of Object.entries(CATS)) {
  const list = newestFirst.filter(p => p.cat === id);
  if (!list.length) continue;
  write(`category/${id}/index.html`, listPage({
    heading: `${name} problems`, intro, list, activeCat: id, urlPath: `/category/${id}/`,
    title: `${name} problems with solutions`, desc: `${list.length} ${name.toLowerCase()} problems with hints and full solutions. ${intro}`
  }));
  urls.push({ loc: `/category/${id}/`, lastmod: list[0].date });
}
for (const p of problems) {
  write(`problems/${p.slug}/index.html`, problemPage(p));
  urls.push({ loc: `/problems/${p.slug}/`, lastmod: p.date });
}
write('random/index.html', shell({ title: 'Random problem', desc: 'Open a random maths problem.', urlPath: '/random/', noindex: true,
  body: `<div class="wrap page"><article class="prose"><h1>Random problem</h1><p>Opening a random problem… If nothing happens, <a href="/">browse all problems</a>.</p></article></div><script>var s=${JSON.stringify(problems.map(p => p.slug))};location.replace('/problems/'+s[Math.floor(Math.random()*s.length)]+'/');</script>` }));
write('about/index.html', infoPage('About', '/about/', `About ${config.name}: who writes the problems and how to use the site.`, aboutHtml));
write('contact/index.html', infoPage('Contact', '/contact/', `Contact ${config.name} for corrections and problem suggestions.`, contactHtml));
write('privacy/index.html', infoPage('Privacy policy', '/privacy/', `Privacy policy of ${config.name}.`, privacyHtml));
write('404.html', shell({ title: 'Page not found', desc: 'This page does not exist.', urlPath: '/404.html', noindex: true,
  body: '<div class="wrap page"><article class="prose"><h1>Page not found</h1><p>This page does not exist. <a href="/">Browse all problems</a>.</p></article></div>' }));
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.concat([{ loc: '/about/' }, { loc: '/contact/' }, { loc: '/privacy/' }]).map(u => `<url><loc>${SITE_URL}${u.loc}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}</url>`).join('\n')}\n</urlset>\n`);
write('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
if (config.adsenseClient) write('ads.txt', `google.com, ${config.adsenseClient.replace(/^ca-/, '')}, DIRECT, f08c47fec0942fa0\n`);
write('assets/favicon.svg', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect x="1" y="1" width="30" height="30" rx="5" fill="#111c36"/><path d="M22 9H10l7 7-7 7h12" fill="none" stroke="#fff" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/></svg>');

console.log(`Built ${problems.length} problems, ${urls.length + 3} pages to dist/`);
if (SITE_URL.includes('example.com')) console.log('Note: "url" in site.config.json is still the placeholder. Set your real domain before going live.');
