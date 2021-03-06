/* Get minimum value of given numbers.
 *
 * |Name  |Type  |Desc                |
 * |------|------|--------------------|
 * |...num|number|Numbers to calculate|
 * |return|number|Minimum value       |
 */

/* example
 * min(2.3, 1, 4.5, 2); // 1
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function min(...num: number[]): number;
 */

exports = function() {
    const arr = arguments;
    let ret = arr[0];

    for (let i = 1, len = arr.length; i < len; i++) {
        if (arr[i] < ret) ret = arr[i];
    }

    return ret;
};
