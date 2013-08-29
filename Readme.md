# Editable-Sanitize

  ContentEditable Sanitizer for use with nickjackson/editable


## Introduction

This component is a plugin to use with `nickjackson/editable`.


## Installation

    $ component install nickjackson/editable-sanitize

## Example

```js
var Editable = require('editable')
  , Sanitize = require('editable-sanitize')
  , el = document.querySelector('h1');
 
Editable(el).use(Sanitize());
```

## API

### Sanitize()

Returns a wrapper function with the main argument requring an instance of `Editable`.

## Todo
* Test on other browsers. Currently only tested on Chrome OSX.

## License

  MIT