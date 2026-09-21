# App icon source

`icon.svg` is the master artwork; `icon.png` is the 1024×1024 render App Store
Connect asks for. Colours come straight from the tokens in `src/index.css`
(`--atlas-ink`, `--atlas-paper`, `--atlas-gold`, `--atlas-clay`), so the icon
and the app stay on one palette.

## Why the PNG looks the way it does

App Store Connect rejects an icon that carries an alpha channel or bakes in its
own rounded corners — iOS applies the mask itself. The render is therefore
flattened onto the ink ground, stripped of alpha and tagged sRGB:

- 1024×1024, PNG, 8-bit RGB (3 channels, no alpha), sRGB

## Regenerating

`sharp` is not a project dependency — it is only needed to rasterise this file,
so install it ad hoc rather than adding it to `package.json`:

```sh
npm i --no-save sharp
node -e '
const sharp = require("sharp"), fs = require("fs");
sharp(fs.readFileSync("assets/icon.svg"), { density: 384 })
  .resize(1024, 1024)
  .flatten({ background: "#191714" })
  .removeAlpha()
  .withMetadata({ icc: "srgb" })
  .png({ compressionLevel: 9 })
  .toFile("assets/icon.png");
'
```

## Feeding it to the platforms

`assets/icon.png` is the path `@capacitor/assets` reads by default, so once the
iOS project exists the whole set can be generated from this one file:

```sh
npx cap add ios          # macOS + Xcode only
npx @capacitor/assets generate
```

That writes the iOS asset catalog and the Android mipmaps. The 1024 PNG is also
what you upload to App Store Connect directly.

## Heads-up on the current Android icon

The icons committed under `android/app/src/main/res/mipmap-*` are still the
stock Android placeholder — the default robot-head launcher art that
`cap add android` generates, on a white background. Running the `assets
generate` command above replaces them with this mark. Shipping the placeholder
to either store is a rejection risk, so do that before the next release on
either platform.
