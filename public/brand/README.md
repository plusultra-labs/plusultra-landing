# Brand assets

The logo is a CSS lockup in `components/SiteNav.vue`, not a file. These are
exports of that exact lockup — "plusultra" in IBM Plex Sans Medium at -0.035em
tracking, the accent rule, "LABS" in IBM Plex Mono at 0.24em — with the type
converted to outlines, so nothing here needs the fonts installed.

**The rule carries the name.** "Plus ultra" — further beyond — is what the
Spanish crown put on the Pillars of Hercules in place of *non plus ultra*,
nothing further beyond. So the rule is three dashes, each longer than the one
before it, running into an arrowhead: keep going, and each step covers more
ground. The square mark is that rule on its own, cut to two dashes, because a
third one closes into a smear below about 20px.

| File | Use |
| --- | --- |
| `plusultra-labs-light.svg` | on light backgrounds (site light palette) |
| `plusultra-labs-dark.svg` | on dark backgrounds (site dark palette) |
| `plusultra-labs-mono-black.svg` | single-colour black: print, stamps, partner decks |
| `plusultra-labs-mono-white.svg` | single-colour white: photos, dark video |
| `*-640w.png` / `*-1280w.png` / `*-2560w.png` | transparent PNG, for anything that will not take an SVG |
| `mark.svg` / `mark-512.png` | the square mark on its ink plate — avatars, app icons |
| `mark-transparent.svg` | the mark with no plate, for placing on your own colour |
| `plusultra-labs-email-light.png` / `-dark.png` | email signatures: rounded plate baked in, 520×261, drop in at `width="260"` |
| `plusultra-labs-email-*@1x.png` | the same at 260×130, for anywhere retina does not matter |
| `signature-logo.png` | 236×112, shown at 118×56 in the signature — kept at exactly 2× so a client that drops the CSS still renders it at a sane size |
| `avatar-alberto.png` | 80×80 pre-cut circle, shown at 40×40 — the Word engine behind Outlook ignores `border-radius` |

Clear space: at least the height of the "L" in LABS on every side.
Minimum width: 120px — below that the LABS line stops being legible.
Do not restack, recolour outside these four variants, re-set the type, or
straighten the rule back into a plain bar.

The email files carry their own rounded plate because a mail client
composites onto a background nobody controls — the light one on white, the
dark one anywhere else. Set `width="260"` on the `<img>` and let the 520px
file cover retina; only the corners are transparent.

The signature markup itself lives in `docs/email-signature.html`.

The same script also writes the site's own icons — `public/favicon.svg`,
`favicon.ico`, `favicon-96x96.png`, `apple-touch-icon.png`, the two
`web-app-manifest-*.png` maskables, `logo.png` (the JSON-LD / rich-result
logo) and `og_image.png` (the social card). They are generated, not hand-made:
edit the script, never the output.

## Regenerating

```bash
pip install fonttools pillow
python3 scripts/export-brand.py
```

It fetches the two IBM Plex faces into a gitignored cache, writes the SVGs,
and rasterises every PNG with headless Chrome.

The header in `components/SiteNav.vue` draws the rule inline at 1x with the
same numbers. If you change the geometry in the script, run it, then re-emit
the header path so the two do not drift:

```bash
python3 - <<'EOF'
src = open('scripts/export-brand.py').read().split('# ------------------')[0]
g = {'__file__': 'scripts/export-brand.py'}; exec(src, g)
h = g['RULE_H']
body, head_h = g['arrow'](0, 0, 34, h, 'currentColor')
reach = head_h + h / 2
print(f'viewBox="0 {h/2 - reach:.2f} 34 {2*reach:.2f}"')
print(body)
EOF
```
