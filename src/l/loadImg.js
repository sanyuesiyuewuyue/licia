/* Load image with given src.
 *
 * |Name|Type    |Desc           |
 * |----|--------|---------------|
 * |src |string  |Image source   |
 * |[cb]|function|Onload callback|
 */

/* example
 * loadImg('http://eustia.liriliri.io/img.jpg', function (err, img) {
 *     console.log(img.width, img.height);
 * });
 */

/* module
 * env: browser
 * test: browser
 */

/* typescript
 * export declare function loadImg(src: string, cb?: Function): void;
 */

_('noop');

exports = function(src, cb) {
    cb = cb || noop;

    const img = new Image();
    img.onload = function() {
        cb(null, img);
    };
    img.onerror = function(err) {
        cb(err);
    };
    img.src = src;
};
