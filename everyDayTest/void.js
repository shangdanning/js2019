void
function iife() {
    var bar = function() {};
    var baz = function() {};
    var foo = function() {
        bar();
        baz();
    };
    var biz = function() {};

    foo();
    biz();
}();