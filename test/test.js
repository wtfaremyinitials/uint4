var assert = require('assert');

describe('UInt4', function() {

    var readUInt4  = require('../index.js').readUInt4;
    var writeUInt4 = require('../index.js').writeUInt4;

    describe('#read(buffer, cursor)', function() {

        it('should read half a byte', function() {
            var buf = new Buffer(4);
            buf[0] = 0x35;
            buf[1] = 0x01;
            buf[2] = 0x10;
            buf[3] = 0xff;

            assert.equal(0x03, readUInt4(buf, 0.0));
            assert.equal(0x05, readUInt4(buf, 0.5));
            assert.equal(0x00, readUInt4(buf, 1.0));
            assert.equal(0x01, readUInt4(buf, 1.5));
            assert.equal(0x01, readUInt4(buf, 2.0));
            assert.equal(0x00, readUInt4(buf, 2.5));
            assert.equal(0x0f, readUInt4(buf, 3.0));
            assert.equal(0x0f, readUInt4(buf, 3.5));
        });

    });

    describe('#write(buffer, value, cursor)', function() {

        it('should write half a byte', function() {
            var buf = new Buffer(4);

            writeUInt4(buf, 0x03, 0.0);
            writeUInt4(buf, 0x05, 0.5);
            writeUInt4(buf, 0x00, 1.0);
            writeUInt4(buf, 0x01, 1.5);
            writeUInt4(buf, 0x01, 2.0);
            writeUInt4(buf, 0x00, 2.5);
            writeUInt4(buf, 0x0f, 3.0);
            writeUInt4(buf, 0x0f, 3.5);

            assert.equal(0x35, buf[0]);
            assert.equal(0x01, buf[1]);
            assert.equal(0x10, buf[2]);
            assert.equal(0xff, buf[3]);
        });

        it('should throw when given values >= 16', function() {
            var buf = new Buffer(4);

            assert.throws(function() {
                writeUInt4(buf, 20, 0);
            });
        });

     });

});
