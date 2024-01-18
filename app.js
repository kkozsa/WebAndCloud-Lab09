const _ = require('lodash');

// Use the flattenDeep method from loadash dependency

const items = [1, [2, [3, [4]]]]

const newItems = _.flattenDeep(items);

console.log(newItems);
