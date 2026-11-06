# Credits

## Imagery

Every photograph in `public/images/` — the 57 country photographs, the 21 city
photographs, the 8 era photographs, the home hero (`eras/atlas-hero.jpg`) and
the passport paper texture (`eras/passport-paper.jpg`) — came from **Kimi K3**,
which generated the first version of this project. No image was sourced from a
stock library, a photographer or any other third party, and none was added from
outside the project afterwards.

The files carry no EXIF, XMP or C2PA metadata: it was stripped before they were
committed, so there is nothing embedded in them that records this. That is why
this file exists.

| Group | Count | Path | Origin |
| --- | --- | --- | --- |
| Country photographs | 57 | `public/images/<country>-1..3.jpg` | Kimi K3 |
| City photographs | 21 | `public/images/city-*.jpg` | Kimi K3 |
| Era photographs | 8 | `public/images/eras/era-*.jpg` | Kimi K3 |
| Home hero | 1 | `public/images/eras/atlas-hero.jpg` | Kimi K3 |
| Passport paper texture | 1 | `public/images/eras/passport-paper.jpg` | Kimi K3 |

## App icon

`assets/icon.svg` is original artwork supplied by the project owner. Everything
else in `assets/` is generated from it — see `assets/README.md` for how, and why
the Android foreground is scaled the way it is.

| File | Origin |
| --- | --- |
| `assets/icon.svg` | Original artwork, supplied by the project owner |
| `assets/icon.png`, `icon-foreground.*`, `icon-background.png` | Generated from `icon.svg` by `@capacitor/assets` |
| `assets/ios/AppIcon.appiconset/` | Generated from `icon.svg` |

## Typefaces

- **Inter** — SIL Open Font License 1.1, bundled via `@fontsource/inter`
- **Playfair Display** — SIL Open Font License 1.1, bundled via
  `@fontsource/playfair-display`

Both are served from the app's own bundle rather than fetched from Google
Fonts, so no request leaves the device for them and no IP address reaches a
third party when the app opens.
