var readUInt4 = function(buffer, cursor) {
    if(cursor % 1)
        return buffer.readUInt8(Math.floor(cursor)) & 15;
    else
        return buffer.readUInt8(cursor) >> 4;
};

var writeUInt4 = function(buffer, value, cursor) {
    if(value >= 16)
        throw(new Error('value is out of bounds'));

    var byteLoc = Math.floor(cursor);
    if(cursor % 1) // Second half byte
        buffer.writeUInt8((readUInt4(buffer, byteLoc) << 4 | value), byteLoc);
    else // First half byte
        buffer.writeUInt8((value << 4 | readUInt4(buffer, cursor)),  byteLoc);
};

module.exports.read       = readUInt4;
module.exports.readUInt4  = readUInt4;

module.exports.write      = writeUInt4;
module.exports.writeUInt4 = writeUInt4;
