/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */

function clone (obj) {
    let objClone = {};
    for (let key in obj) {
        objClone[key] = obj[key];
    }
    return objClone
}

// let obj = {test: 1};
// let obj = {test: { test2: { test3: '1' } }};
// let obj = {test: { test2: { test3: null } }};

// console.log(obj);
// console.log(clone(obj));
// console.log(clone(obj).test.test2.test3 === obj.test.test2.test3);
