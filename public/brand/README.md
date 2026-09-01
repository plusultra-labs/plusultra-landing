# Brand assets

The logo is a CSS lockup in `components/SiteNav.vue`, not a file. These are
exports of that exact lockup — "plusultra" in IBM Plex Sans Medium at -0.035em
tracking, the accent rule, "LABS" in IBM Plex Mono at 0.24em — with the type
converted to outlines, so nothing here needs the fonts installed.

| File | Use |
| --- | --- |
| `plusultra-labs-light.svg` | on light backgrounds (site light palette) |
| `plusultra-labs-dark.svg` | on dark backgrounds (site dark palette) |
| `plusultra-labs-mono-black.svg` | single-colour black: print, stamps, partner decks |
| `plusultra-labs-mono-white.svg` | single-colour white: photos, dark video |
| `*-640w.png` / `*-1280w.png` / `*-2560w.png` | transparent PNG, for anything that will not take an SVG |

Clear space: at least the height of the "L" in LABS on every side.
Minimum width: 120px — below that the LABS line stops being legible.
Do not restack, recolour outside these four variants, or re-set the type.

## Regenerating

```bash
pip install fonttools
python3 scripts/export-logo.py     # SVGs
```

PNGs are rendered from the SVGs with headless Chrome:

```bash
CH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
for v in light dark mono-black mono-white; do for w in 640 1280 2560; do
  h=$(python3 -c "print(round($w*124.06/319.53))")
  { echo "<style>html,body{margin:0;background:transparent}svg{display:block;width:${w}px;height:auto}</style>"; \
    cat public/brand/plusultra-labs-$v.svg; } > /tmp/shot.html
  "$CH" --headless --disable-gpu --hide-scrollbars --default-background-color=00000000 \
    --screenshot=public/brand/plusultra-labs-$v-${w}w.png --window-size=$w,$h file:///tmp/shot.html
done; done
```
