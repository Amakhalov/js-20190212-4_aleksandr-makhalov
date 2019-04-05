'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */


function getMinMax(str) {
    let arr = str.split(' ');

    console.log(arr);

    let arr2 = [];
    arr.forEach(function(item){
        let localArr = item.split(',');
        localArr.forEach(function(item, i) {
            arr2.push(localArr[i]);
        });
    });

    console.log(arr2);

    const arrNum = arr2.map(function(item) {
        return parseFloat(item);
    });
    let arrNum2 = arrNum.filter(function(item) {
        return +item;
    });
    arrNum2 = arrNum2.sort(function(a, b) {
        return a - b;
      });
    let result = {
        min: arrNum2[0],
        max: arrNum2[arrNum2.length - 1]
    };
    return result;
}
// var inputData = '1,-111 -5.8 или 10, хотя 34 + -5.3 и 73';
// console.log(getMinMax(inputData));
// console.log(parseFloat('-5.8'));