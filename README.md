<p align="center">
  <img src="https://raw.githubusercontent.com/naminho/webpack-react-pdf/master/src/logo.png" alt="webpack-react-pdf">
</p>

# webpack-react-pdf

> Generate and preview PDF documents in the browser with React and Flexbox

Example setup of using `@react-pdf/core` with `webpack` and generating PDF
documents in the browser on the fly.

## Getting Started

After cloning this repository run the following commands

```
npm i
npm start
```

## Browser Support

To work on IE11 polyfills for `[].includes`, `Promise`, `0.isNaN` and
`Object.assign` are necessary. With the help of `polyfill.io` these are loaded
on demand in this example, without including them directly in the bundle.

```
<script src="https://cdn.polyfill.io/v2/polyfill.js?features=Array.prototype.includes,Promise,Number.isNaN,Object.assign"></script>
```

## Windows Support

Currently `yoga` cannot be installed on Windows via npm. As a workaround for
that a prebuilt version can be found in
[yoga-layout-windows](https://github.com/naminho/yoga-layout-windows).

## Content-Security-Policy

Modern browsers implement the `Content-Security-Policy` header. Usually this
will block the PDF preview which requires `blob`. A minimal header to get the
preview working would look like this (see `.htaccess` file)

```
Header add Content-Security-Policy "default-src 'self' 'unsafe-eval' 'unsafe-inline' *.polyfill.io blob:"
```
