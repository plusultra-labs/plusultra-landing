#!/usr/bin/env python3
"""Build every brand file the site and the outside world need, from source.

The logo only exists as HTML + CSS in components/SiteNav.vue, so there is no
file to hand anyone. This rebuilds the same lockup ("plusultra" in IBM Plex
Sans Medium at -0.035em, the accent rule, "LABS" in IBM Plex Mono at 0.24em)
with the type converted to outlines, derives the square mark from it, and
writes:

    public/brand/   the wordmark, four colourways, SVG + transparent PNG
    public/         logo.png (JSON-LD), favicon.*, apple-touch-icon, manifest icons

    pip install fonttools pillow
    python3 scripts/export-brand.py

PNGs are rasterised with headless Chrome, which every machine here already has.
"""
import subprocess
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.boundsPen import BoundsPen
from fontTools.misc.transform import Transform
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SP = os.path.join(ROOT, '.fonts-cache')
os.makedirs(SP, exist_ok=True)

# Google Fonts' TTF builds of the two faces the site loads.
FONTS = {
    'PlexSans.ttf': 'https://fonts.gstatic.com/s/ibmplexsans/v23/zYXGKVElMYYaJe8bpLHnCwDKr932-G7dytD-Dmu1swZSAXcomDVmadSD2FlzAA.ttf',
    'PlexMono400.ttf': 'https://fonts.gstatic.com/s/ibmplexmono/v20/-F6qfjptAgt5VM-kVkqdyU8n3twJ8lc.ttf',
}
for name, url in FONTS.items():
    if not os.path.exists(os.path.join(SP, name)):
        print('fetching', name)
        subprocess.run(['curl', '-sSfL', '-o', os.path.join(SP, name), url], check=True)
UPEM = 1000.0
ASC, DESC = 1025/UPEM, 275/UPEM   # hhea, used for CSS line box (normal)

def load(name):
    f = TTFont(os.path.join(SP, name))
    return f, f.getGlyphSet(), f.getBestCmap(), f['hmtx']

sans, sans_gs, sans_cmap, sans_hm = load('PlexSans.ttf')
mono, mono_gs, mono_cmap, mono_hm = load('PlexMono400.ttf')

def text_path(gs, cmap, hmtx, text, size, tracking_em, x, baseline):
    """Return (svg path d, advance width). tracking is added after each char
    except the last, matching how the logo is optically set."""
    scale = size / UPEM
    d = []
    bounds = BoundsPen(gs)
    pen_x = x
    track = tracking_em * size
    for i, ch in enumerate(text):
        g = cmap[ord(ch)]
        pen = SVGPathPen(gs, ntos=lambda v: f"{v:.2f}")
        tp = TransformPen(pen, Transform(scale, 0, 0, -scale, pen_x, baseline))
        gs[g].draw(tp)
        gs[g].draw(TransformPen(bounds, Transform(scale, 0, 0, -scale, pen_x, baseline)))
        s = pen.getCommands()
        if s:
            d.append(s)
        pen_x += hmtx[g][0] * scale
        if i != len(text) - 1:
            pen_x += track
    return " ".join(d), pen_x - x, bounds.bounds

# The accent rule is not a plain bar: three dashes, each longer than the last,
# running into an arrowhead. "Plus ultra" is the motto the Spanish crown put on
# the Pillars of Hercules to replace "non plus ultra" — nothing further beyond.
# The mark says the same thing: keep going, and each step covers more ground.
DASHES = (1, 1.6, 2.6)      # relative dash lengths, shortest first
RULE_H = 1.25               # rule weight in px at the header's own size
HEAD_W, HEAD_H = 5.2, 3.0   # arrowhead length and half-height, in rule weights
DASH_GAP = 2.2              # gap between dashes, in rule weights


def arrow(x, y, total, h, accent, dashes=DASHES):
    """The rule, from `x` to `x + total`, drawn `h` thick."""
    head_w, head_h = h * HEAD_W, h * HEAD_H
    gap = h * DASH_GAP
    run = total - head_w - h * 0.8
    weight = sum(dashes)
    parts, cx = [], x
    for w in dashes:
        dw = (run - gap * (len(dashes) - 1)) * w / weight
        parts.append(f'<rect x="{cx:.2f}" y="{y:.2f}" width="{dw:.2f}" '
                     f'height="{h:.2f}" fill="{accent}"/>')
        cx += dw + gap
    tip, cy = x + total, y + h / 2
    parts.append(f'<path d="M{tip - head_w:.2f} {cy - head_h:.2f} L{tip:.2f} {cy:.2f} '
                 f'L{tip - head_w:.2f} {cy + head_h:.2f}" fill="none" stroke="{accent}" '
                 f'stroke-width="{h:.2f}" stroke-linejoin="miter"/>')
    return "".join(parts), head_h


def lockup(scale=1.0, ink="#16181D", muted="#71767F", accent="#2F5A8F", pad=0.0):
    """Rebuilds the SiteNav lockup geometry at `scale` x the 21px original."""
    word_size = 21 * scale
    labs_size = 9.5 * scale
    bar_w, bar_h = 34 * scale, RULE_H * scale
    bar_gap = 7 * scale          # gap between bar and LABS
    row_gap = 3 * scale          # gap-[3px] between the two rows

    # Row 1: line box = font-size (leading-none), glyphs centred in it.
    box1 = word_size
    half_lead = (box1 - (ASC + DESC) * word_size) / 2
    base1 = half_lead + ASC * word_size

    # Row 2: line box = normal line-height of the mono text; bar centred on it.
    box2 = (ASC + DESC) * labs_size
    top2 = box1 + row_gap
    half_lead2 = 0.0
    base2 = top2 + half_lead2 + ASC * labs_size

    word_d, word_w, word_b = text_path(sans_gs, sans_cmap, sans_hm,
                               "plusultra", word_size, -0.035, pad, pad + base1)
    labs_x = pad + bar_w + bar_gap
    labs_d, labs_w, labs_b = text_path(mono_gs, mono_cmap, mono_hm,
                               "LABS", labs_size, 0.24, labs_x, pad + base2)

    bar_y = pad + top2 + (box2 - bar_h) / 2

    # Hug the real artwork: the CSS line boxes carry leading we do not want
    # baked into an exported asset.
    rule_svg, head_h = arrow(pad, bar_y, bar_w, bar_h, accent)
    # The arrowhead is a stroke centred on its path, so it reaches half a rule
    # weight past head_h — leave that out and the tips get shaved off.
    reach = head_h + bar_h / 2
    boxes = [word_b, labs_b,
             (pad, bar_y + bar_h / 2 - reach, pad + bar_w, bar_y + bar_h / 2 + reach)]
    minx = min(b[0] for b in boxes); miny = min(b[1] for b in boxes)
    maxx = max(b[2] for b in boxes); maxy = max(b[3] for b in boxes)
    w, h = maxx - minx + pad * 2, maxy - miny + pad * 2
    dx, dy = pad - minx, pad - miny

    body = (
        f'  <g transform="translate({dx:.2f} {dy:.2f})">\n'
        f'  <path d="{word_d}" fill="{ink}"/>\n'
        f'  {rule_svg}\n'
        f'  <path d="{labs_d}" fill="{muted}"/>\n'
        f'  </g>\n'
    )
    return w, h, body

def svg(path, **kw):
    w, h, body = lockup(**kw)
    out = (f'<svg xmlns="http://www.w3.org/2000/svg" width="{w:.2f}" '
           f'height="{h:.2f}" viewBox="0 0 {w:.2f} {h:.2f}" '
           f'role="img" aria-label="plusultra labs">\n{body}</svg>\n')
    open(path, 'w').write(out)
    print(f"{os.path.basename(path)}  {w:.1f}x{h:.1f}")

OUT = os.path.join(ROOT, 'public', 'brand')
os.makedirs(OUT, exist_ok=True)
S = 4  # 4x the on-screen size, so the artwork has real resolution

# oklch tokens resolved to sRGB hex (light / dark)
LIGHT = dict(ink="#22252C", muted="#71767F", accent="#2C5484")
DARK  = dict(ink="#F4F2EF", muted="#A2A7B0", accent="#93B8E8")

svg(f'{OUT}/plusultra-labs-light.svg', scale=S, **LIGHT)
svg(f'{OUT}/plusultra-labs-dark.svg', scale=S, **DARK)
svg(f'{OUT}/plusultra-labs-mono-black.svg', scale=S, ink="#000000", muted="#000000", accent="#000000")
svg(f'{OUT}/plusultra-labs-mono-white.svg', scale=S, ink="#FFFFFF", muted="#FFFFFF", accent="#FFFFFF")

# ---------------------------------------------------------------------------
# The square mark
# ---------------------------------------------------------------------------

def mark(size=512, bg="#22252C", accent="#93B8E8", inset=0.62, radius=0.0):
    """The square mark is the rule on its own — the only part of the lockup
    that still says something at 16px.

    `inset` is how much of the canvas the artwork takes. Maskable icons have
    to sit inside the safe circle, so they pass a smaller number.
    """
    # Two dashes, not three: at 16px a third one closes up into a smear.
    total = size * inset
    h = total * 0.062
    body, _ = arrow((size - total) / 2, (size - h) / 2, total, h, accent, (1, 2.0))
    plate = (f'<rect width="{size}" height="{size}" rx="{size * radius:.1f}" fill="{bg}"/>'
             if radius else f'<rect width="{size}" height="{size}" fill="{bg}"/>')
    return (f'<svg xmlns="http://www.w3.org/2000/svg" width="{size}" '
            f'height="{size}" viewBox="0 0 {size} {size}" role="img" '
            f'aria-label="plusultra labs">\n  {plate}\n  {body}\n</svg>\n')


# ---------------------------------------------------------------------------
# Rasterising
# ---------------------------------------------------------------------------

CHROME = ('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
          '/Applications/Chromium.app/Contents/MacOS/Chromium',
          'google-chrome', 'chromium')

def chrome():
    for c in CHROME:
        if os.path.exists(c) or subprocess.run(['which', c], capture_output=True).returncode == 0:
            return c
    raise SystemExit('No Chrome found; it is what rasterises the SVGs.')

def png(svg_text, out, width, height, opaque=False):
    """Screenshot an SVG at an exact pixel size, transparent unless opaque."""
    html = os.path.join(SP, 'shot.html')
    with open(html, 'w') as f:
        f.write('<style>html,body{margin:0;padding:0;background:'
                + ('#fff' if opaque else 'transparent')
                + f'}}svg{{display:block;width:{width}px;height:{height}px}}</style>\n')
        f.write(svg_text)
    cmd = [chrome(), '--headless', '--disable-gpu', '--hide-scrollbars',
           f'--screenshot={out}', f'--window-size={width},{height}',
           f'file://{html}']
    if not opaque:
        cmd.insert(4, '--default-background-color=00000000')
    subprocess.run(cmd, capture_output=True, check=True)
    print(f'{os.path.relpath(out, ROOT)}  {width}x{height}')


# ---------------------------------------------------------------------------
# Everything that ships
# ---------------------------------------------------------------------------

PUB = os.path.join(ROOT, 'public')

# Wordmark PNGs, transparent, at the three sizes anything sane will ask for.
w0, h0, _ = lockup(scale=S, **LIGHT)
for name, variant in (('light', LIGHT), ('dark', DARK),
                      ('mono-black', dict(ink='#000000', muted='#000000', accent='#000000')),
                      ('mono-white', dict(ink='#FFFFFF', muted='#FFFFFF', accent='#FFFFFF'))):
    src = open(f'{OUT}/plusultra-labs-{name}.svg').read()
    for width in (640, 1280, 2560):
        png(src, f'{OUT}/plusultra-labs-{name}-{width}w.png',
            width, round(width * h0 / w0))

# The mark, as a file people can use on its own.
MARK_BG = '#22252C'
open(f'{OUT}/mark.svg', 'w').write(mark(512, bg=MARK_BG))
open(f'{OUT}/mark-transparent.svg', 'w').write(mark(512, bg='none', accent='#2C5484'))
png(mark(512, bg=MARK_BG), f'{OUT}/mark-512.png', 512, 512)

# JSON-LD / rich-result logo: the wordmark on the site's own paper, opaque,
# because search surfaces composite it onto backgrounds we do not control.
pad = round(w0 * 0.09)
plate = (f'<svg xmlns="http://www.w3.org/2000/svg" width="{w0 + pad * 2:.0f}" '
         f'height="{h0 + pad * 2:.0f}" viewBox="0 0 {w0 + pad * 2:.2f} {h0 + pad * 2:.2f}">'
         f'<rect width="100%" height="100%" fill="#FAF9F7"/>'
         f'<g transform="translate({pad} {pad})">'
         + open(f'{OUT}/plusultra-labs-light.svg').read().split('>', 1)[1].replace('</svg>', '')
         + '</g></svg>')
png(plate, f'{PUB}/logo.png', 1200, round(1200 * (h0 + pad * 2) / (w0 + pad * 2)), opaque=True)

# Favicons. The mark is full-bleed on its ink plate so it holds up against
# both light and dark browser chrome.
open(f'{PUB}/favicon.svg', 'w').write(mark(512, bg=MARK_BG))
png(mark(512, bg=MARK_BG), f'{PUB}/favicon-96x96.png', 96, 96)
# apple-touch-icon must be opaque and is rounded by iOS itself.
png(mark(512, bg=MARK_BG, inset=0.58), f'{PUB}/apple-touch-icon.png', 180, 180)
# Manifest icons are declared maskable, so the artwork stays in the safe circle.
for n in (192, 512):
    png(mark(512, bg=MARK_BG, inset=0.48), f'{PUB}/web-app-manifest-{n}x{n}.png', n, n)

# Email signatures. A mail client composites onto a background nobody
# controls, so these carry their own plate — rounded, with the corners cut
# out to alpha — and ship at a fixed pixel size to be dropped in at half
# their width (retina).


def plate(bg, radius_f=0.055, pad_f=0.105, **colours):
    """The lockup centred on its own rounded plate."""
    w, h, body = lockup(scale=S, **colours)
    pad = w * pad_f
    pw, ph = w + pad * 2, h + pad * 2
    return pw, ph, (
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{pw:.2f}" height="{ph:.2f}" '
        f'viewBox="0 0 {pw:.2f} {ph:.2f}" role="img" aria-label="plusultra labs">'
        f'<rect width="{pw:.2f}" height="{ph:.2f}" rx="{pw * radius_f:.2f}" fill="{bg}"/>'
        f'<g transform="translate({pad:.2f} {pad:.2f})">{body}</g></svg>')


for name, bg, colours in (('light', '#FAF9F7', LIGHT), ('dark', '#22252C', DARK)):
    pw, ph, art = plate(bg, **colours)
    open(f'{OUT}/plusultra-labs-email-{name}.svg', 'w').write(art + '\n')
    for width, tag in ((520, ''), (260, '@1x')):
        png(art, f'{OUT}/plusultra-labs-email-{name}{tag}.png',
            width, round(width * ph / pw))

# The signature's own pair, at exactly twice the size they are displayed at.
# Anything larger is a liability: a client that drops the width attribute
# renders the file at its natural size, and a 520px logo then swamps the mail.
SIG_W = 118
pw, ph, art = plate('#22252C', radius_f=0.07, pad_f=0.075, **DARK)
png(art, f'{OUT}/signature-logo.png', SIG_W * 2, round(SIG_W * 2 * ph / pw))
print(f'   displayed at {SIG_W}x{round(SIG_W * ph / pw)}')

# The email signature's avatar. Outlook's Word engine ignores border-radius,
# so the circle has to be cut into the file itself.
from PIL import Image, ImageDraw  # noqa: E402

def round_avatar(src, out, size):
    im = Image.open(src).convert('RGB')
    side = min(im.size)
    im = im.crop(((im.width - side) // 2, (im.height - side) // 2,
                  (im.width + side) // 2, (im.height + side) // 2))
    # Mask at 4x and downsample, so the edge is smooth rather than stepped.
    im = im.resize((size * 4, size * 4), Image.LANCZOS)
    mask = Image.new('L', im.size, 0)
    ImageDraw.Draw(mask).ellipse((0, 0, im.width - 1, im.height - 1), fill=255)
    out_im = Image.new('RGBA', im.size, (0, 0, 0, 0))
    out_im.paste(im, (0, 0), mask)
    out_im.resize((size, size), Image.LANCZOS).save(out)
    print(f'{os.path.relpath(out, ROOT)}  {size}x{size}')

round_avatar(f'{PUB}/alberto.jpg', f'{OUT}/avatar-alberto.png', 80)  # shown at 40

# The social card, on the same ink plate as the mark. Composed here rather
# than kept as a hand-made file so it can never drift from the wordmark.
ow, oh = 1200, 630
lw = ow * 0.46
lk = lw / w0
_, _, lockup_body = lockup(scale=S, **DARK)
eyebrow_size = 15.5
eyebrow_d, eyebrow_w, _ = text_path(mono_gs, mono_cmap, mono_hm,
                                    "AI PRODUCT STUDIO \u00b7 SINGAPORE",
                                    eyebrow_size, 0.24, 0, 0)
og = (f'<svg xmlns="http://www.w3.org/2000/svg" width="{ow}" height="{oh}" '
      f'viewBox="0 0 {ow} {oh}">'
      f'<rect width="{ow}" height="{oh}" fill="{MARK_BG}"/>'
      f'<g transform="translate({(ow - lw) / 2:.2f} '
      f'{(oh - h0 * lk) / 2 - 26:.2f}) scale({lk:.4f})">{lockup_body}</g>'
      f'<g transform="translate({(ow - eyebrow_w) / 2:.2f} '
      f'{(oh + h0 * lk) / 2 + 42:.2f})">'
      f'<path d="{eyebrow_d}" fill="{DARK["muted"]}"/></g>'
      f'</svg>')
png(og, f'{PUB}/og_image.png', ow, oh, opaque=True)

from PIL import Image  # noqa: E402  (only needed for the .ico container)
ico = os.path.join(SP, 'ico.png')
png(mark(512, bg=MARK_BG), ico, 256, 256)
Image.open(ico).save(f'{PUB}/favicon.ico',
                     sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])
print('public/favicon.ico  16/32/48/64')
