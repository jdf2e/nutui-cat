# silly-datetime

Simple datetime formater

[![NPM](https://nodei.co/npm/silly-datetime.png?compact=true)](https://nodei.co/npm/silly-datetime/)

[![Build Status](https://travis-ci.org/csbun/silly-datetime.svg)](https://travis-ci.org/csbun/silly-datetime)
[![Coverage Status](https://coveralls.io/repos/csbun/silly-datetime/badge.svg?branch=master&service=github)](https://coveralls.io/github/csbun/silly-datetime?branch=master)

## Install

### npm

```sh
npm i silly-datetime --save
```

### bower

```sh
bower install silly-datetime --save
```

## Example

```javascript
var sd = require('silly-datetime');
sd.format(new Date(), 'YYYY-MM-DD HH:mm');
// 2015-07-06 15:10

sd.fromNow(+new Date() - 2000);
// a few seconds ago
```

ES2015:

```javascript
import {
    format,
    fromNow
} from 'silly-datetime';
format(new Date(), 'YYYY-MM-DD HH:mm'); // 2015-07-06 15:10
fromNow(+new Date() - 2000); // a few seconds ago
```

## Usage

### .format(datetime, format)

Format a Date object to specified format.

- datetime: Date Object
- format: formate string, default to `'YYYY-MM-DD HH:mm:ss'`

Format | Example | Description
------ | ------- | -----------
`YYYY` | `2015`  | 4 digit year
`M MM` | `0..12` | Month number
`D DD` | `0..31` | Day of month
`H HH` | `0..23` | 24 hour time
`h hh` | `1..12` | 12 hour time used with `a A`.
`a A`  | `am pm` | Post or ante meridiem
`m mm` | `0..59` | Minutes
`s ss` | `0..59` | Seconds

```javascript
sd.format(new Date(), 'YYYY-MM-DD HH:mm');
// 2015-07-06 15:10
```

### .fromNow(datetime)

Time from now. This is sometimes called timeago or relative time.

- datetime: Date Object

```javascript
sd.fromNow(+new Date() - 2000);
// a few seconds ago
```

### .locate(newLocale)

Changing locale globally. By default, silly-datetime comes with English locale strings.

- newLocale: locate string or locate Object

Locate string can be `en` (default) or `zh-cn`;

```javascript
var datetime = +new Date() + 10 * 60 * 1000;
sd.locate('zh-cn')
sd.fromNow(datetime);
// 10分钟内
```

Or just pass an custom locate object with any of the key in the table below:

key      | en              | zh-cn
-------- | --------------- | ------
`future` | `in %s`         | `%s内`
`past`   | `%s ago`        | `%s前`
`s`      | `a few seconds` | `刚刚`
`mm`     | `%s minutes`    | `%s分钟`
`hh`     | `%s hours`      | `%s小时`
`dd`     | `%s days`       | `%s天`
`MM`     | `%s months`     | `%s月`
`yy`     | `%s years`      | `%s年`

```javascript
sd.locate({
  past: '%s之前',
  hh: '%s小時'
});
var datetime = +new Date() + 10 * 60 * 60 * 1000;
sd.fromNow(datetime);
// 10小時之前
```
