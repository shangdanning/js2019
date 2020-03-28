var len = 10;

function fn() {
    console.info(this.len)
}
fn();
let Person = {
    len: 5,
    say: function() {
        fn();
        arguments[0]();
    }
}
Person.say(fn);