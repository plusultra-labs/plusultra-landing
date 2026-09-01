#!/usr/bin/env python3
"""Export the plusultra labs wordmark to standalone files.

The logo lives in components/SiteNav.vue as HTML + CSS, so there is no file to
hand anyone. This rebuilds the exact same lockup ("plusultra" in IBM Plex Sans
Medium at -0.035em, the accent rule, "LABS" in IBM Plex Mono at 0.24em) and
writes it out with the type converted to outlines, so the files need no fonts.

    pip install fonttools
    python3 scripts/export-logo.py          # writes public/brand/*.svg

PNGs are rendered from those SVGs with headless Chrome; see public/brand/README.md.
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

def lockup(scale=1.0, ink="#16181D", muted="#71767F", accent="#2F5A8F", pad=0.0):
    """Rebuilds the SiteNav lockup geometry at `scale` x the 21px original."""
    word_size = 21 * scale
    labs_size = 9.5 * scale
    bar_w, bar_h = 34 * scale, 2 * scale
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
    boxes = [word_b, labs_b, (pad, bar_y, pad + bar_w, bar_y + bar_h)]
    minx = min(b[0] for b in boxes); miny = min(b[1] for b in boxes)
    maxx = max(b[2] for b in boxes); maxy = max(b[3] for b in boxes)
    w, h = maxx - minx + pad * 2, maxy - miny + pad * 2
    dx, dy = pad - minx, pad - miny

    body = (
        f'  <g transform="translate({dx:.2f} {dy:.2f})">\n'
        f'  <path d="{word_d}" fill="{ink}"/>\n'
        f'  <rect x="{pad:.2f}" y="{bar_y:.2f}" width="{bar_w:.2f}" '
        f'height="{bar_h:.2f}" fill="{accent}"/>\n'
        f'  <path d="{labs_d}" fill="{muted}"/>\n'
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
