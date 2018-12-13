<p align="center">
  <img src="https://raw.githubusercontent.com/naminho/webpack-react-pdf/master/src/logo.png" alt="webpack-react-pdf">
</p>

# webpack-react-pdf

> Generate and preview PDF documents in the browser with React and Flexbox

Example setup of using `@react-pdf/renderer` (`1.0.0`) with `webpack` and generating PDF
documents in the browser on the fly. Includes an example of how Charts rendered with
React (`recharts`) can be "screenshotted" and inserted into the PDF as images.

## Getting Started

After cloning this repository run the following commands

```
npm i
npm start
```

## Browser Support

To work on IE11 polyfills for `[].includes`, `Promise`, `0.isNaN`, `Array.from`, `Symbol.iterator`, `Array.prototype.@@iterator`, `String.prototype.codePointAt` and
`Object.assign` are necessary. Recharts will need `Number.isFinite` to work properly. With the help of `polyfill.io` these are loaded
on demand in this example, without including them directly in the bundle. Additionally `regenerator-runtime` needs to be included
in the file where the rendering happens (see imports in `src/Container.js`).

```
<script src="https://cdn.polyfill.io/v2/polyfill.js?features=Array.prototype.includes,Promise,Number.isNaN,Object.assign,Number.isFinite,Array.from,Symbol.iterator,Array.prototype.@@iterator,String.prototype.codePointAt"></script>
```

The in-page PDF preview doesn't work in IE11, but in newer versions of Chrome,
Safari and FireFox.

## Content-Security-Policy

Modern browsers implement the `Content-Security-Policy` header. Usually this
will block the PDF preview which requires `blob`. A minimal header to get the
preview working would look like this (see `.htaccess` file)

```
Header add Content-Security-Policy "default-src 'self' 'unsafe-eval' 'unsafe-inline' *.polyfill.io blob:"
```
