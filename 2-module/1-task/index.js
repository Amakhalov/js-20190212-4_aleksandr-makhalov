/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */

function clone (obj) {
    
    let objClone = {};

    (function deepClone (obj) {
        for (let key in obj) {
        objClone[key] = obj[key];
        if (typeof obj[key] == 'object') {
            deepClone(obj[key]);
        }
        }
    })();

    return objClone;
};

// let obj = {test: 1};
// let obj = {test: { test2: { test3: '1' } }};
let obj = {test: { test2: { test3: null } }, cln: 1};


console.log(clone(obj) !== obj);
console.log(clone(obj));

console.log(clone(obj).test.test2 !== obj.test.test2);
console.log(clone(obj).test.test2.test3 === obj.test.test2.test3);

