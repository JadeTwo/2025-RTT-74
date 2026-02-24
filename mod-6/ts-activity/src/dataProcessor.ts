// import * as _ from 'lodash';

// const _ = require('lodash');   

interface Data {
    id: string;
    name: string;
    price: number;
    discountedPrice: number;
}
 
export function processData(data: Data[]): Data[] {
  let result = [];
    
  for (let item of data) {

    // if (typeof item === 'undefined') {
    //     throw new Error('Data item is undefined');
    // }
 
    if (!item.id) {
      throw new Error('Data item is missing an id');
    }
 
    let processedItem = {
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