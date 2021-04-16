# webpack-react-pdf

<img align="right" src="https://github.com/tobua/webpack-react-pdf/raw/master/logo.png" width="20%" alt="webpack-react-pdf" />

`webpack` setup using [`@react-pdf/renderer`](https://react-pdf.org) (`^2.0.0`) to generate and display PDF
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

```
npm install
npm start
```

## Polyfills

// TODO

## Browser Support

Tested with recent versions of Chrome, Safari, Firefox and their mobile counterparts.

## Content-Security-Policy

Modern browsers implement the `Content-Security-Policy` header. Usually this
will block the PDF preview which requires `blob`. A minimal header to get the
preview working would look like this (see `.htaccess` file)

```
Header add Content-Security-Policy "default-src 'self' 'unsafe-eval' 'unsafe-inline' *.polyfill.io blob:"
```
