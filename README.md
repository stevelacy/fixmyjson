# fixmyjson
[![Build Status](https://travis-ci.org/stevelacy/fixmyjson.png?branch=master)](https://travis-ci.org/stevelacy/fixmyjson)
[![NPM version](https://badge.fury.io/js/fixmyjson.png)](http://badge.fury.io/js/fixmyjson)


## Information

<table>
<tr>
<td>Package</td><td>fixmyjson</td>
</tr>
<tr>
<td>Description</td>
<td>Clean and fix JSON (files and code)</td>
</tr>
<tr>
<td>Node Version</td>
<td>>= 0.9</td>
</tr>
</table>



## Install

    npm install fixmyjson -g

#### Usage

    fixmyjson filename.json

##### Or as a function

```js
var fs = require('fs');
var fixmyjson = require('fixmyjson');

var messy = fs.readFileSync('./messy.json', 'utf8');

fixmyjson(messy, options, function(clean){
  doSomethingWith(clean);
});
```


## API

### CLI

`fixmyjson <filename>`

### Code

`function( String original, Object options, Function callback )`

```js
fixmyjson(jsonblob, options, function(clean){
  doSomethingWith(clean);
});
```


## License

The MIT License (MIT)

Copyright (c) 2014 Steve Lacy

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
