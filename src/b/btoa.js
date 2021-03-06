/* Use Buffer to emulate btoa when running in node.
 */

/* example
 * btoa('Hello World'); // -> 'SGVsbG8gV29ybGQ='
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function btoa(str: string): string;
 */

_('root isNode base64 map detectMocha');

if (isNode) {
    exports = function(str) {
        return new Buffer(str, 'binary').toString('base64');
    };
} else {
    if (root.btoa && !detectMocha()) {
        exports = root.btoa;
    } else {
        exports = function(str) {
            return base64.encode(
                map(str, function(c) {
                    return c.charCodeAt(0);
                })
            );
        };
    }
}
