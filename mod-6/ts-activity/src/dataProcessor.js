"use strict";
// import * as _ from 'lodash';
Object.defineProperty(exports, "__esModule", { value: true });
exports.processData = processData;
function processData(data) {
    var result = [];
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var item = data_1[_i];
        // if (typeof item === 'undefined') {
        //     throw new Error('Data item is undefined');
        // }
        if (!item.id) {
            throw new Error('Data item is missing an id');
        }
        var processedItem = {
            id: item.id,
            name: item.name || 'Unknown',
            price: item.price || 0,
            discountedPrice: item.discountedPrice || item.price || 0,
        };
        result.push(processedItem);
    }
    return result;
}
// module.exports = { processData };
