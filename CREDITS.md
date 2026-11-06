# Credits

## Imagery

**The photographs in `public/images/` cannot be shown to be ours to use, and are
being replaced. See `docs/image-replacement.md`.**

They arrived with the first version of the project, which was built with Kimi
K3, and were assumed to have been generated. That assumption turned out to be
wrong for most of them. A reverse image search matched one against a photograph
published by Vogue, and inspecting the files found two more carrying a
publisher's own watermark burned into the frame:

| File | Watermark |
| --- | --- |
| `public/images/nigeria-1.jpg` | **BN style** (BellaNaija Style) |
| `public/images/japan-1.jpg` | **TokyoFashion.com** |

So the set is mixed, and the two halves carry different risk:

| Group | Count | What they are | Risk |
| --- | --- | --- | --- |
| Country photographs `<country>-1..3.jpg` | 57 | Street-style photographs of identifiable people, taken from the web | Copyright **and** personality rights — these are real people whose likeness is being used in a published app without a release |
| Era and hero images `eras/era-*.jpg`, `atlas-hero.jpg` | 9 | Editorial and studio fashion photographs, no generation marker | Same copyright class; provenance unknown |
| `eras/passport-paper.jpg` | 1 | A plain paper texture | Low, but unverified |
| City images `city-*.jpg` | 21 | **Generated**, and every one carries a visible `AI生成` ("AI generated") watermark in the bottom-left corner | No third-party copyright, but the watermark is shipping inside the app |

Three further signals point the same way: the files carry no EXIF, XMP or C2PA
metadata at all — it was stripped before they were committed; they come in 35
different pixel sizes, which is what a set collected from many sources looks
like and not what one generator produces; and nothing in the git history records
where any of them came from.

None of them should be treated as licensed. Every one is being replaced, and the
rule from here is that no image enters the repository without its source
recorded in the table below.

| File | Source | Link or identifier | Licence | Attribution required |
| --- | --- | --- | --- | --- |
| *(to be filled as replacements land)* | | | | |

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

Served from the app's own bundle rather than fetched from Google Fonts, so no
request leaves the device for it and no IP address reaches a third party when
the app opens.

Playfair Display was listed here until it turned out never to have reached
the page: `.font-serif` is declared in `@layer base`, which Tailwind hoists
above its own utility of the same name, so the utility won and headings have
always resolved to `ui-serif` — New York on iOS. It was being downloaded on
every launch and discarded. The dead rule and the font are both gone.
