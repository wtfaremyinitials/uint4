UInt4
===

Read and write half-bytes to buffers

Usage
===

ES5
```js
var readUInt4  = require('uint4').read;
var writeUint4 = require('uint4').write;

var buffer = new Buffer(1);

writeUInt4(buffer, 3, 0.0);
writeUInt4(buffer, 7, 0.5);

readUInt4(buffer, 0.0); // 3
readUint4(buffer, 0.5); // 7
```

ES6
```js
var {readUInt4, writeUint4} = require('uint4');

var buffer = new Buffer(4);

writeUInt4(buffer, 5, 0.0);
writeUInt4(buffer, 4, 0.5);

readUInt4(buffer, 0.0); // 5
readUint4(buffer, 0.5); // 4
```

License
===

MIT
