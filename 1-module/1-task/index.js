/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */

let base = prompt ('put a num', '1');
let indx = prompt ('put an indx', '1');

function pow (m, n) {
    // if (n < 1 && m < 1 && (n % Math.floor(n) != 0) && (n % Math.floor(n) != 0)) return alert("put a natural num & indx");
    if (n < 1 && m < 1) return;
    for ( let i = 0; i<n; i++) m *= n;
    return m;
};
 pow(base, indx);