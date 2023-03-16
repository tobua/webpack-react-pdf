# webpack-react-pdf

<img align="right" src="https://github.com/tobua/webpack-react-pdf/raw/main/logo.png" width="20%" alt="webpack-react-pdf" />

`webpack` setup using [`@react-pdf/renderer`](https://react-pdf.org) (`^3.0.0`) to generate and display PDF
documents in the browser.

- Images
- Fonts
- Async Loaded Fonts
- Table
- Download Link
- Chart

> Check out the [Demo](tobua.github.io/webpack-react-pdf 'PDF Generation in Browser Demo')

Includes an example of how Charts rendered with
React (`recharts`) can be "screenshotted" and inserted into the PDF as images.

## Installation & Usage

After cloning this repository run the following commands

```sh
npm install
npm start
```

## Polyfills

Since PDF rendering usually happens on the server side with node. The following node built in dependencies have to be polyfilled.

- [`stream`](https://nodejs.org/api/stream.html) with [`stream-browserify`](https://www.npmjs.com/package/stream-browserify)
- [`zlib`](https://nodejs.org/api/zlib.html) with [`browserify-zlib`](https://www.npmjs.com/package/browserify-zlib)
- [`crypto`](https://nodejs.org/api/crypto.html) with [`crypto-browserify`](https://www.npmjs.com/package/crypto-browserify) Optional

## Browser Support

Tested with recent versions of Chrome, Safari, Firefox and their mobile counterparts.
