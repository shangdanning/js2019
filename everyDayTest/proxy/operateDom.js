let view = new Proxy({
    selected: null
}, {
    set: function(obj, prop, newval) {
        let oldval = obj[prop];

        if (prop === 'selected') {
            if (oldval) {
                oldval.setAttribute('aria-selected', 'false');
            }
            if (newval) {
                newval.setAttribute('aria-selected', 'true');
            }
        }

        // The default behavior to store the value
        obj[prop] = newval;
    }
});

let i1 = view.selected = document.getElementById('item-1');
console.log(i1.getAttribute('aria-selected')); // 'true'

let i2 = view.selected = document.getElementById('item-2');
console.log(i1.getAttribute('aria-selected')); // 'false'
console.log(i2.getAttribute('aria-selected')); // 'true'