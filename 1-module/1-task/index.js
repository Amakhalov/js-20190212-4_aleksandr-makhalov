/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */

let base = prompt ('put a num', '1');
let indx = prompt ('put an indx', '1');

function pow (m, n) {
    if (n < 1 && m < 1 && (n % Math.floor(n) != 0) && (n % Math.floor(n) != 0)) return;
    //if (n < 1 && m < 1) return;
    let tempBase = m;
    for ( let i = 1; i<n; i++) m *= tempBase;
    console.log(m);
    return m;
};
 pow(base, indx);