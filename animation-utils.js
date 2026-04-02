function makeColorData(n) {
    var data = [];
    var col = Math.random();
    if (col < 0.2) {
        for (var i = 0; i < n; ++i) {
            data.push([i, 'rgba(' + (50 + 100*i/n) + ',' + (50 + 150*i/n) + ',' + (200 + 50*i/n) + ',1)']);
        }
    } else if (col < 0.4) {
        for (var i = 0; i < n; ++i) {
            data.push([i, 'rgba(0,0,0,.3)']);
        }
    } else if (col < 0.6) {
        for (var i = 0; i < n; ++i) {
            data.push([i, 'rgba(' + (200 + 50*i/n) + ',' + (50 + 50*i/n) + ',0,1)']);
        }
    } else if (col < 0.8) {
        for (var i = 0; i < n; ++i) {
            data.push([i, 'rgba(' + (200 + 50*i/n) + ',' + (10 + 100*i/n) + ',' + (50 + 150*i/n) + ',1)']);
        }
    } else {
        for (var i = 0; i < n; ++i) {
            data.push([i, 'rgba(' + (50 + 100*i/n) + ',' + (200 + 50*i/n) + ',' + (50 + 50*i/n) + ',1)']);
        }
    }
    return data;
}

function makeWalker(initial, r, max) {
    var pos = initial;
    return function() {
        if (pos <= 2 * r) { pos += r; return pos; }
        if (pos >= max - 2 * r) { pos -= r; return pos; }
        var flip = d3.randomUniform(1)();
        if (flip > 0.5) { pos += r; return pos; }
        pos -= r;
        return pos;
    };
}
