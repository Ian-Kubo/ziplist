"use strict";
function zipList(list1, list2) {
    const minLength = Math.min(list1.length, list2.length);
    const zipped = [];
    for (let i = 0; i < minLength; i++) {
        zipped.push([list1[i], list2[i]]);
    }
    return zipped;
}
console.log(zipList(['a', 'b', 'c'], [1, 2, 3])); // [['a', 1], ['b', 2], ['c', 3]]
function zipListTheFunctionalWay(list1, list2) {
    return list1.map((item, index) => [item, list2[index]]);
}
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3])); // [['a', 1], ['b', 2], ['c', 3]]
