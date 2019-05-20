# Update On Scroll (uos)

[![npm version](https://img.shields.io/npm/v/uos.svg)](https://www.npmjs.com/package/uos)
[![gzip size](http://img.badgesize.io/https://unpkg.com/uos/dist/uos.mjs?compression=gzip)](https://unpkg.com/uos)
[![license](https://img.shields.io/npm/l/uos.svg)](https://github.com/vaneenige/uos/blob/master/LICENSE)
[![dependencies](https://img.shields.io/badge/dependencies-none-ff69b4.svg)](https://github.com/vaneenige/uos/blob/master/package.json)
[![TypeScript](https://img.shields.io/static/v1.svg?label=&message=TypeScript&color=294E80)](https://www.typescriptlang.org/)

Update On Scroll (uos) is a tiny library to provide the easiest way for updating values on scroll. Based on percentual or pixel based begin and end values, progress is returned trough a callback.

This utility can be useful for CSS animations, DOM changes, WebGL transitions or anything that can be updated based on a progress value.

#### Features:

- Small in size, no dependencies
- Percentage or pixel based values
- Optimized for multiple instances

## Install

```
$ npm install --save uos
```

## Usage

Import the library:
```js
import updateOnScroll from 'uos';
```

Update an element based on pixels:
```js
updateOnScroll(100, 500, progress => {
  // Progress between 100px and 500px
});
```

Update an element based on percentages:
```js
updateOnScroll(0.2, 0.6, progress => {
  // Progress between 20% and 60%
});
```

> Only a single scroll listener will be used regardless of how many instances are created. The callback of an instance will be called on every update.

## License

MIT © <a href="https://use-the-platform.com">Colin van Eenige</a>

