// Maths Workshop static site generator.
// Reads problems/*.md and site.config.json, writes the finished website to dist/.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import katex from 'katex';

process.on('uncaughtException', e => { console.error('\nBUILD ERROR: ' + e.message + '\n'); process.exit(1); });
const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(ROOT, 'dist');
const config = JSON.parse(fs.readFileSync(path.join(ROOT, 'site.config.json'), 'utf8'));
const SITE_URL = config.url.replace(/\/+$/, '');

/* ---------- vocabulary ---------- */
const DEFAULT_CATEGORIES = [
  { id: 'algebra', name: 'Algebra', description: 'Equations, inequalities, polynomials and algebraic identities.' },
  { id: 'analysis', name: 'Analysis', description: 'Limits, sequences, series, derivatives and integrals.' },
  { id: 'linear', name: 'Linear algebra', description: 'Matrices, vector spaces, determinants and diagonalisation.' },
  { id: 'proba', name: 'Probability', description: 'Counting outcomes, conditional probability and random variables.' },
  { id: 'geometry', name: 'Geometry', description: 'Plane and space geometry, triangles, circles and transformations.' },
  { id: 'number', name: 'Number theory', description: 'Divisibility, primes, congruences and irrationality proofs.' },
  { id: 'combi', name: 'Combinatorics', description: 'Counting arguments, binomial coefficients and bijections.' },
  { id: 'logic', name: 'Logic & sets', description: 'Proof techniques, quantifiers, sets and maps.' }
];
// Categories come from categories.json when that file exists, otherwise from the list above.
// Every category can contain "subcategories", and those can contain more, to any depth.
const NODES = {};   // 'calculus/single-variable' -> { id, name, description, path, depth, parent, children: [paths] }
const ROOTS = [];   // paths of the top-level categories, in file order
function loadCategories() {
  const file = path.join(ROOT, 'categories.json');
  let list = DEFAULT_CATEGORIES;
  if (fs.existsSync(file)) {
    let data;
    try { data = JSON.parse(fs.readFileSync(file, 'utf8')); }
    catch (e) { throw new Error('categories.json is not valid JSON (' + e.message + '). Check the commas, quotes and brackets near that spot.'); }
    list = Array.isArray(data) ? data : data.categories;
    if (!Array.isArray(list)) throw new Error('categories.json must contain a "categories" list.');
  }
  const idRe = /^[a-z][a-z0-9-]*$/;
  const add = (c, parent, depth) => {
    const id = c && c.id, where = parent ? `inside "${parent}"` : 'at the top level';
    if (!idRe.test(id || '')) throw new Error(`categories.json: every category needs an "id" made of lowercase letters, digits and hyphens, starting with a letter (found ${JSON.stringify(id)} ${where}).`);
    const p = parent ? parent + '/' + id : id;
    if (NODES[p]) throw new Error(`categories.json: the id "${id}" appears twice ${where}.`);
    if (!c.name) throw new Error(`categories.json: "${p}" has no "name".`);
    NODES[p] = { id, name: c.name, description: c.description || `${c.name} problems with hints and full solutions.`, path: p, depth, parent: parent || null, children: [] };
    if (parent) NODES[parent].children.push(p); else ROOTS.push(p);
    for (const s of c.subcategories || []) add(s, p, depth + 1);
  };
  for (const c of list) add(c, null, 0);
  if (!ROOTS.length) throw new Error('categories.json must define at least one category.');
}
loadCategories();
const chainOf = p => p.split('/').map((_, i, a) => NODES[a.slice(0, i + 1).join('/')]);
// A problem names its category by full path (calculus/single-variable/continuity) or, when the last id is
// unique in the whole tree, just by that id. The older "subcategory:" line is added to the path.
function resolveCategory(cat, sub) {
  const clean = s => String(s || '').trim().replace(/^\/+|\/+$/g, '');
  let want = clean(cat);
  if (!want) return { error: 'the category line is missing' };
  if (clean(sub)) want += '/' + clean(sub);
  if (NODES[want]) return { path: want };
  if (!want.includes('/')) {
    const hits = Object.keys(NODES).filter(k => NODES[k].id === want);
    if (hits.length === 1) return { path: hits[0] };
    if (hits.length > 1) return { error: `the category "${want}" exists in several places (${hits.join(', ')}). Write the full path` };
  }
  const near = Object.keys(NODES).filter(k => NODES[k].id === want.split('/').pop());
  return { error: `the category "${want}" does not exist. ${near.length ? 'Did you mean: ' + near.join(' or ') + '?' : 'Top-level categories: ' + ROOTS.join(', ') + '.'} (Add it to categories.json, or change the category line in this file)` };
}
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
function parseProblem(file) { return parseProblemText(fs.readFileSync(file, 'utf8'), path.basename(file)); }
function parseProblemText(rawText, name) {
  const raw = rawText.replace(/\r\n/g, '\n').replace(/^\uFEFF/, '');
  const m = /^---\n([\s\S]*?)\n---\n?([\s\S]*)$/.exec(raw);
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
    slug: slugify(name.replace(/\.md$/i, '')),
    title: meta.title, level: meta.level,
    diff: Math.min(5, Math.max(1, parseInt(meta.difficulty, 10) || 2)),
    tags: (meta.tags || '').split(',').map(t => t.trim()).filter(Boolean),
    date: /^\d{4}-\d{2}-\d{2}$/.test(meta.date || '') ? meta.date : new Date().toISOString().slice(0, 10),
    draft: /^(true|yes)$/i.test(meta.draft || ''),
    order: Number.isFinite(parseFloat(meta.order)) ? parseFloat(meta.order) : null,
    statement: get('statement'), hint: get('hint'), solution: get('solution')
  };
  const bad = [];
  if (!p.title) bad.push('title is missing');
  const rc = resolveCategory(meta.category, meta.subcategory);
  if (rc.error) bad.push(rc.error); else { p.path = rc.path; p.cat = rc.path.split('/')[0]; }
  if (!LEVELS[p.level]) bad.push(`level "${p.level}" is not one of: ${Object.keys(LEVELS).join(', ')}`);
  if (!p.statement) bad.push('the "## Statement" section is empty');
  if (bad.length) throw new Error(`${name}: ${bad.join('; ')}`);
  return p;
}

// Problems come from the problems/ folder (one .md file each) and/or from one file, all-problems.txt, where each
// problem starts with a line "@@@ file-name.md" followed by the usual header and sections.
const problemsDir = path.join(ROOT, 'problems');
const files = fs.existsSync(problemsDir) ? fs.readdirSync(problemsDir).filter(f => f.toLowerCase().endsWith('.md')).sort() : [];
let all = files.map(f => parseProblem(path.join(problemsDir, f)));
const bundles = fs.readdirSync(ROOT).filter(f => /^all-problems\.txt$|-problems\.txt$/i.test(f)).sort();
for (const bf of bundles) {
  const parts = fs.readFileSync(path.join(ROOT, bf), 'utf8').replace(/\r\n/g, '\n').replace(/^\uFEFF/, '').split(/^@@@[ \t]+(\S+)[ \t]*\n/m);
  for (let i = 1; i < parts.length; i += 2) { const nm = parts[i].toLowerCase().endsWith('.md') ? parts[i] : parts[i] + '.md'; all.push(parseProblemText(parts[i + 1], nm)); }
}
const seen = new Set();
for (const p of all) { if (seen.has(p.slug)) throw new Error(`two problems have the same file name "${p.slug}" (check problems/ and the *-problems.txt files)`); seen.add(p.slug); }
let problems = all.filter(p => !p.draft);
if (!problems.length) console.warn('Warning: no problems were found. Add .md files to problems/ or an all-problems.txt file.');
// Order of the lists. Default: newest first. Set "sort" in site.config.json to "newest", "oldest", "difficulty" or "title".
// A problem with a line "order: 3" in its header is always placed before the others, sorted by that number (smallest first).
problems.sort((a, b) => a.date.localeCompare(b.date) || a.slug.localeCompare(b.slug));
const SORT = String((config && config.sort) || 'newest').toLowerCase();
let newestFirst;
if (SORT === 'newest') { problems.forEach((p, i) => { p.num = i + 1; }); newestFirst = [...problems].reverse(); }
else {
  const base = [...problems];
  if (SORT === 'difficulty') base.sort((a, b) => a.diff - b.diff);
  else if (SORT === 'title') base.sort((a, b) => a.title.localeCompare(b.title));
  newestFirst = base;
}
if (problems.some(p => p.order !== null)) newestFirst = [...newestFirst].sort((a, b) => (a.order === null && b.order === null) ? 0 : (a.order === null ? 1 : b.order === null ? -1 : a.order - b.order));
if (SORT !== 'newest' || problems.some(p => p.order !== null)) newestFirst.forEach((p, i) => { p.num = i + 1; });

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
function side(activePath) {
  const counts = {};
  problems.forEach(p => { const s = p.path.split('/'); for (let i = 1; i <= s.length; i++) { const k = s.slice(0, i).join('/'); counts[k] = (counts[k] || 0) + 1; } });
  const open = new Set();
  if (activePath) { const s = activePath.split('/'); for (let i = 1; i <= s.length; i++) open.add(s.slice(0, i).join('/')); }
  const render = path => {
    const n = NODES[path];
    if (!counts[path] && path !== activePath) return '';
    let out = `<a class="cat${n.depth ? ' subcat' : ''}" href="/category/${path}/"${activePath === path ? ' aria-current="page"' : ''}><span>${esc(n.name)}</span><span>${counts[path] || 0}</span></a>`;
    if (open.has(path)) {
      const kids = n.children.filter(c => path === activePath || open.has(c)).map(render).join('');
      if (kids) out += `<div class="subcats">${kids}</div>`;
    }
    return out;
  };
  let h = '<aside class="side"><div><h2>Categories</h2><nav class="cats" aria-label="Categories">';
  h += `<a class="cat" href="/"${!activePath ? ' aria-current="page"' : ''}><span>${activePath ? '← All categories' : 'All'}</span><span>${problems.length}</span></a>`;
  h += ROOTS.filter(r => !activePath || open.has(r)).map(render).join('');
  return h + '</nav></div></aside>';
}

function row(p) {
  const tags = p.tags.length ? `<div class="r-tags">${p.tags.map(t => '#' + esc(t)).join('  ')}</div>` : '';
  const search = `${p.title} ${p.tags.join(' ')} ${chainOf(p.path).map(n => n.name).join(' ')} ${LEVELS[p.level]} ${plain(p.statement)}`.toLowerCase();
  return `<a class="row" href="/problems/${p.slug}/" data-s="${esc(search)}" data-l="${p.level}"><div><div class="r-title"><span class="num">Ex.${p.num}</span><span>${esc(p.title)}</span></div>${tags}</div>`
    + `<div class="c-cat"><span class="chip">${esc(NODES[p.path].name)}</span></div><div class="c-lvl">${esc(LEVELS[p.level])}</div><div class="c-dif">${dots(p.diff)}</div>`
    + `<div class="meta-m"><span>${esc(LEVELS[p.level])}</span>${dots(p.diff)}</div></a>`;
}

const FILTER_JS = `(function(){var q=document.getElementById('q'),l=document.getElementById('lvl'),rows=[].slice.call(document.querySelectorAll('.row')),c=document.getElementById('count'),n=document.getElementById('none');function f(){var s=q.value.trim().toLowerCase(),lv=l.value,k=0;rows.forEach(function(r){var ok=(!s||r.getAttribute('data-s').indexOf(s)>-1)&&(lv==='all'||r.getAttribute('data-l')===lv);r.hidden=!ok;if(ok)k++});c.textContent=k+(k===1?' problem':' problems');n.hidden=k>0}q.addEventListener('input',f);l.addEventListener('change',f)})();`;

function listPage({ heading, intro, list, activePath, subLinks = [], crumbs = '', urlPath, desc, title }) {
  const levelsUsed = Object.keys(LEVELS).filter(k => list.some(p => p.level === k));
  const body = `<div class="wrap layout">
${side(activePath)}
<main>
  <div class="head"><div>${crumbs}<h1>${esc(heading)}</h1><p class="sub"><span id="count">${list.length} ${list.length === 1 ? 'problem' : 'problems'}</span> · ${esc(intro)}</p></div></div>
  ${subLinks.length ? `<nav class="subchips" aria-label="Subcategories">${subLinks.map(s => `<a class="chip" href="${s.href}">${esc(s.name)} · ${s.count}</a>`).join('')}</nav>` : ''}
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
  const chain = chainOf(p.path);
  const catName = chain[chain.length - 1].name;
  const scope = NODES[p.path].parent || p.path;
  const related = newestFirst.filter(q => q.slug !== p.slug && (q.path === scope || q.path.startsWith(scope + '/')))
    .sort((x, y) => (x.path === p.path ? 0 : 1) - (y.path === p.path ? 0 : 1)).slice(0, 4);
  const idx = problems.findIndex(q => q.slug === p.slug);
  const prev = problems[idx - 1], next = problems[idx + 1];
  const desc = `${catName} problem (${LEVELS[p.level]}): ${p.title}. Read the statement, take a hint and check the full solution.`;
  const body = `<div class="wrap page">
<nav class="crumbs" aria-label="Breadcrumb"><a href="/">Problems</a>${chain.map(n => ` › <a href="/category/${n.path}/">${esc(n.name)}</a>`).join('')}</nav>
<article>
<div class="eyebrow"><span class="ex-n">Exercise ${p.num}</span><span>${chain.map(n => esc(n.name)).join(' › ')}</span><span>${esc(LEVELS[p.level])}</span>${dots(p.diff)}<span>Added ${fmtDate(p.date)}</span></div>
<h1>${esc(p.title)}</h1>
${p.tags.length ? `<div class="tagline">${p.tags.map(t => `<span class="chip">#${esc(t)}</span>`).join('')}</div>` : ''}
<section class="sheet"><h2 class="label">Statement</h2><div class="body">${rich(p.statement)}</div></section>
${p.hint ? `<details class="hint"><summary>Hint</summary><div class="body">${rich(p.hint)}</div></details>` : ''}
${p.solution ? `<details class="solution"><summary><span class="s-show">Show solution</span><span class="s-hide">Hide solution</span></summary><section class="sheet sol"><h2 class="label">Solution</h2><div class="body">${rich(p.solution)}</div></section></details>` : '<p class="faint">No solution has been written for this problem yet.</p>'}
</article>
${related.length ? `<section class="related"><h2>More problems in ${esc(catName)}</h2><div class="rows">${related.map(row).join('')}</div></section>` : ''}
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

// Assets are produced during the build: fonts and KaTeX come from node_modules (installed by npm),
// the stylesheet is the one below unless you add your own assets/style.css.
const STYLE = String.raw`/* Maths Workshop: school-paper sheets, red pencil for corrections. */
@font-face{font-family:'Newsreader';font-style:normal;font-weight:400;font-display:swap;src:url(/assets/fonts/newsreader-latin-400-normal.woff2) format('woff2')}
@font-face{font-family:'Newsreader';font-style:normal;font-weight:600;font-display:swap;src:url(/assets/fonts/newsreader-latin-600-normal.woff2) format('woff2')}
@font-face{font-family:'Newsreader';font-style:italic;font-weight:400;font-display:swap;src:url(/assets/fonts/newsreader-latin-400-italic.woff2) format('woff2')}
@font-face{font-family:'IBM Plex Sans';font-style:normal;font-weight:400;font-display:swap;src:url(/assets/fonts/ibm-plex-sans-latin-400-normal.woff2) format('woff2')}
@font-face{font-family:'IBM Plex Sans';font-style:normal;font-weight:500;font-display:swap;src:url(/assets/fonts/ibm-plex-sans-latin-500-normal.woff2) format('woff2')}
@font-face{font-family:'IBM Plex Sans';font-style:normal;font-weight:600;font-display:swap;src:url(/assets/fonts/ibm-plex-sans-latin-600-normal.woff2) format('woff2')}
@font-face{font-family:'IBM Plex Mono';font-style:normal;font-weight:400;font-display:swap;src:url(/assets/fonts/ibm-plex-mono-latin-400-normal.woff2) format('woff2')}

:root{
  color-scheme:light dark;
  --bg:#edf1f7; --surface:#ffffff; --ink:#111c36; --muted:#56637d; --line:#d3dbe8;
  --accent:#1d3fa8; --on-accent:#ffffff; --pencil:#b8322a; --grid:rgba(29,63,168,.08); --soft:#e3e9f4;
  --serif:'Newsreader',Georgia,'Times New Roman',serif;
  --sans:'IBM Plex Sans',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'IBM Plex Mono',ui-monospace,Menlo,Consolas,monospace;
}
@media (prefers-color-scheme:dark){:root{
  --bg:#0c1322; --surface:#131c31; --ink:#e8edf8; --muted:#9aa7c2; --line:#27334f;
  --accent:#9db3ff; --on-accent:#0c1322; --pencil:#ff8f82; --grid:rgba(157,179,255,.07); --soft:#1b2640}}

*{box-sizing:border-box}
[hidden]{display:none!important}
html{-webkit-text-size-adjust:100%}
body{background:var(--bg);color:var(--ink);font:15px/1.55 var(--sans);margin:0;min-height:100vh;display:flex;flex-direction:column}
body>.layout,body>.page{flex:1 0 auto;width:100%}
a{color:var(--accent)}
button,input,select{font:inherit;color:inherit}
:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
.wrap{max-width:1160px;margin:0 auto;padding-left:max(16px,env(safe-area-inset-left,0px));padding-right:max(16px,env(safe-area-inset-right,0px))}
.sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}

/* header + footer */
.top{background:var(--surface);border-bottom:1px solid var(--line)}
.top .wrap{display:flex;align-items:center;gap:10px 24px;flex-wrap:wrap;padding-block:10px}
.brand{display:flex;align-items:center;gap:10px;text-decoration:none;color:var(--ink);margin-right:auto}
.brand svg{width:30px;height:30px;flex:none}
.brand b{font:600 21px/1 var(--serif);letter-spacing:-.01em}
.brand small{display:block;font:500 10.5px/1.2 var(--sans);letter-spacing:.09em;text-transform:uppercase;color:var(--muted);margin-top:3px}
.nav{display:flex;gap:20px}
.nav a{color:var(--ink);text-decoration:none;font-weight:500}
.nav a:hover{color:var(--accent);text-decoration:underline}
.foot{border-top:1px solid var(--line);background:var(--surface);color:var(--muted);font-size:13px}
.foot .wrap{display:flex;justify-content:space-between;gap:8px 20px;flex-wrap:wrap;padding-block:18px}
.foot nav{display:flex;gap:18px;flex-wrap:wrap}
.foot a{color:var(--muted)}

/* list layout */
.layout{display:grid;grid-template-columns:230px minmax(0,1fr);gap:28px;padding-block:24px 56px;align-items:start}
.side h2{font:600 11px/1 var(--sans);letter-spacing:.1em;text-transform:uppercase;color:var(--muted);margin:0 0 8px}
.cats{display:flex;flex-direction:column;gap:1px}
.cat{display:flex;justify-content:space-between;gap:8px;padding:7px 10px;border-radius:5px;text-decoration:none;color:var(--ink)}
.cat span:last-child{color:var(--muted);font-variant-numeric:tabular-nums;font-size:13px}
.cat:hover{background:var(--soft)}
.cat[aria-current="page"]{background:var(--ink);color:var(--surface)}
.cat[aria-current="page"] span:last-child{color:inherit;opacity:.7}
.head{margin-bottom:14px}
h1{font:600 clamp(28px,4vw,38px)/1.1 var(--serif);letter-spacing:-.015em;margin:0;text-wrap:balance}
.sub{color:var(--muted);margin:6px 0 0;max-width:70ch}
.filters{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:14px}
.filters input{flex:1 1 220px;max-width:380px;padding:8px 12px;border:1px solid var(--line);background:var(--surface);border-radius:6px}
.filters select{padding:8px 10px;border:1px solid var(--line);background:var(--surface);border-radius:6px}
.rows{background:var(--surface);border:1px solid var(--line);border-radius:8px;overflow:hidden}
.row{display:grid;grid-template-columns:minmax(0,1fr) 190px 96px 84px;gap:6px 16px;align-items:center;padding:13px 16px;border-top:1px solid var(--line);text-decoration:none;color:var(--ink)}
.rows>:first-child{border-top:0}
.row:hover{background:var(--soft)}
.r-title{font:600 18px/1.25 var(--serif);display:flex;gap:10px;align-items:baseline;min-width:0}
.r-title .num{font:500 12px var(--mono);color:var(--pencil);flex:none}
.r-title span:last-child{min-width:0;overflow-wrap:anywhere}
.r-tags{font-size:12.5px;color:var(--muted);margin-top:2px}
.chip{display:inline-block;padding:2px 8px;border:1px solid var(--line);border-radius:99px;font-size:12px;color:var(--muted);white-space:nowrap}
.dots{display:inline-flex;gap:3px;vertical-align:middle}
.dots i{width:7px;height:7px;border-radius:50%;border:1px solid var(--muted);display:block}
.dots i.on{background:var(--accent);border-color:var(--accent)}
.empty{padding:40px 20px;text-align:center;color:var(--muted);border-top:1px solid var(--line)}
.meta-m{display:none;gap:8px;align-items:center;flex-wrap:wrap;grid-column:1/-1}

/* problem page */
.page{padding-block:24px 56px}
.crumbs{font-size:13px;color:var(--muted);margin-bottom:12px}
.crumbs a{color:var(--muted)}
.eyebrow{display:flex;gap:8px 14px;flex-wrap:wrap;align-items:center;font-size:13px;color:var(--muted);margin-bottom:8px}
.eyebrow .ex-n{font:500 13px var(--mono);color:var(--pencil)}
.tagline{display:flex;gap:6px;flex-wrap:wrap;margin-top:12px}
.sheet{position:relative;background-color:var(--surface);background-image:linear-gradient(var(--grid) 1px,transparent 1px),linear-gradient(90deg,var(--grid) 1px,transparent 1px);background-size:24px 24px;border:1px solid var(--line);border-radius:4px;padding:22px 26px 22px 58px;margin-top:20px}
.sheet::before{content:"";position:absolute;left:40px;top:0;bottom:0;width:1px;background:var(--pencil);opacity:.55}
.sheet.sol::before{opacity:.9}
.label{font:600 11px/1 var(--sans);letter-spacing:.11em;text-transform:uppercase;color:var(--accent);margin:0 0 12px}
.sheet.sol .label{color:var(--pencil)}
.body{font:19px/1.65 var(--serif);max-width:68ch;overflow-wrap:anywhere}
.body p{margin:0 0 .8em}
.body p:last-child{margin-bottom:0}
.body ul,.body ol{margin:0 0 .8em;padding-left:1.3em}
.katex{font-size:1.08em}
.katex-display{overflow-x:auto;overflow-y:hidden;max-width:100%;padding:2px 0}
.hint{margin-top:14px;border:1px solid var(--line);border-radius:6px;background:var(--surface)}
.hint summary{cursor:pointer;padding:10px 14px;font-weight:500}
.hint .body{padding:0 14px 12px;font-size:17px}
.solution{margin-top:20px}
.solution>summary{display:inline-flex;list-style:none;cursor:pointer;padding:9px 16px;border-radius:6px;background:var(--accent);color:var(--on-accent);font-weight:500}
.solution>summary::-webkit-details-marker{display:none}
.solution[open]>summary{background:var(--surface);color:var(--ink);border:1px solid var(--line)}
.solution[open] .s-show,.solution:not([open]) .s-hide{display:none}
.faint{color:var(--muted);font-style:italic}
.related{margin-top:44px}
.related h2{font:600 22px/1.2 var(--serif);margin:0 0 12px}
.pn{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;margin-top:28px;padding-top:18px;border-top:1px solid var(--line)}
.pn a{max-width:48%}

/* info pages */
.prose{max-width:68ch}
.prose h2{font:600 22px/1.2 var(--serif);margin:28px 0 8px}
.prose p,.prose li{font-size:16px}
.prose h1{margin-bottom:16px}

@media (max-width:860px){
  .layout{grid-template-columns:minmax(0,1fr);gap:16px}
  .cats{flex-direction:row;flex-wrap:wrap;gap:6px}
  .cat{border:1px solid var(--line);border-radius:99px;padding:5px 12px}
  .row{grid-template-columns:minmax(0,1fr)}
  .row .c-lvl,.row .c-dif{display:none}
  .meta-m{display:flex}
  .row .c-cat{grid-column:1}
}
@media (max-width:520px){
  .sheet{padding:18px 14px 18px 40px}
  .sheet::before{left:26px}
  .body{font-size:17.5px}
  .pn a{max-width:100%}
}
/* subcategories */
.subcats{display:flex;flex-direction:column;gap:1px;margin:2px 0 6px 14px;padding-left:8px;border-left:1px solid var(--line)}
.subcat{font-size:14px;padding:5px 10px}
.subcats .subcats{margin-left:8px;padding-left:6px}
.c-cat .chip{max-width:100%;overflow:hidden;text-overflow:ellipsis;vertical-align:bottom}
.subchips{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px}
.subchips .chip{text-decoration:none;color:var(--ink);padding:4px 11px;font-size:13px}
.subchips .chip:hover{border-color:var(--accent);color:var(--accent)}
@media (max-width:860px){.subcats{display:contents}.subcat{font-size:15px}}
@media (prefers-reduced-motion:no-preference){.row,.cat{transition:background-color .12s,color .12s}}
`;
function copyFonts(pkg, files, to) {
  fs.mkdirSync(to, { recursive: true });
  for (const f of files) fs.copyFileSync(path.join(ROOT, 'node_modules', pkg, 'files', f), path.join(to, f));
}
fs.mkdirSync(path.join(DIST, 'assets', 'fonts'), { recursive: true });
fs.mkdirSync(path.join(DIST, 'assets', 'katex', 'fonts'), { recursive: true });
const userCss = path.join(ROOT, 'assets', 'style.css');
fs.writeFileSync(path.join(DIST, 'assets', 'style.css'), fs.existsSync(userCss) ? fs.readFileSync(userCss, 'utf8') : STYLE);
copyFonts('@fontsource/newsreader', ['newsreader-latin-400-normal.woff2', 'newsreader-latin-600-normal.woff2', 'newsreader-latin-400-italic.woff2'], path.join(DIST, 'assets', 'fonts'));
copyFonts('@fontsource/ibm-plex-sans', ['ibm-plex-sans-latin-400-normal.woff2', 'ibm-plex-sans-latin-500-normal.woff2', 'ibm-plex-sans-latin-600-normal.woff2'], path.join(DIST, 'assets', 'fonts'));
copyFonts('@fontsource/ibm-plex-mono', ['ibm-plex-mono-latin-400-normal.woff2'], path.join(DIST, 'assets', 'fonts'));
const KATEX_DIST = path.join(ROOT, 'node_modules', 'katex', 'dist');
for (const f of fs.readdirSync(path.join(KATEX_DIST, 'fonts')).filter(f => f.endsWith('.woff2')))
  fs.copyFileSync(path.join(KATEX_DIST, 'fonts', f), path.join(DIST, 'assets', 'katex', 'fonts', f));
fs.writeFileSync(path.join(DIST, 'assets', 'katex', 'katex.min.css'), fs.readFileSync(path.join(KATEX_DIST, 'katex.min.css'), 'utf8')
  .replace(/,url\(fonts\/[^)]+\.woff\) format\("woff"\)/g, '').replace(/,url\(fonts\/[^)]+\.ttf\) format\("truetype"\)/g, ''));

const urls = [{ loc: '/', lastmod: newestFirst[0]?.date }];
write('index.html', listPage({
  heading: 'Maths problems with solutions', intro: config.description, list: newestFirst, urlPath: '/',
  title: config.name, desc: config.description
}));
const inNode = (p, path) => p.path === path || p.path.startsWith(path + '/');
for (const path of Object.keys(NODES)) {
  const n = NODES[path], list = newestFirst.filter(p => inNode(p, path));
  if (!list.length) continue;
  const names = chainOf(path).map(x => x.name);
  const subLinks = n.children.map(c => ({ href: `/category/${c}/`, name: NODES[c].name, count: newestFirst.filter(p => inNode(p, c)).length })).filter(s => s.count);
  const crumbs = n.depth ? `<nav class="crumbs" aria-label="Breadcrumb"><a href="/">Problems</a>${names.slice(0, -1).map((nm, i) => ` › <a href="/category/${chainOf(path)[i].path}/">${esc(nm)}</a>`).join('')}</nav>` : '';
  write(`category/${path}/index.html`, listPage({
    heading: n.depth ? n.name : `${n.name} problems`, intro: n.description, list, activePath: path, subLinks, crumbs, urlPath: `/category/${path}/`,
    title: `${names.slice().reverse().join(', ')}: problems with solutions`,
    desc: `${list.length} ${names[names.length - 1].toLowerCase()} problems with hints and full solutions (${names.join(' > ')}). ${n.description}`
  }));
  urls.push({ loc: `/category/${path}/`, lastmod: list[0].date });
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
