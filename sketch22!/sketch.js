let sketchName = 'My Sketch';
window.addEventListener('load', function () {
    view.viewSize = new Size(420, 594);

    project.currentStyle = {
        strokeColor: "#ffffff",
        fillColor: null,
        strokeWidth: 2
    };

    Path.Rectangle([0, 0], [420, 594])
    let background = Path.Rectangle([0, 0], [420, 594])
    background.fillColor = "#000000"
    background.strokeColor = null;

    function pickRandom(array) {
        let i = Math.floor(Math.random() * array.length);
        return array[i];
    }

    let sizes = [0.5, 0.65, 0.8];
    let n = 15;
    for (i = 0; i < n; i++) {
        let x = Math.random() * 420;
        let y = Math.random() * 594;


        let q = Path.Line([x, y], [x, y - 50]);
        let w = Path.Line([x, y - 10], [x - 10, y - 16.6]);
        let e = Path.Line([x, y - 20], [x - 10, y - 26.6]);
        let r = Path.Line([x, y - 30], [x - 10, y - 36.6]);
        let t = Path.Line([x, y - 10], [x + 10, y - 16.6]);
        let u = Path.Line([x, y - 20], [x + 10, y - 26.6]);
        let o = Path.Line([x, y - 30], [x + 10, y - 36.6]);

        let g = new Group(
            q,
            w,
            e,
            r,
            t,
            u,
            o);

        let g2 = g.clone();
        let g3 = g.clone();
        let g4 = g.clone();
        let g5 = g.clone();
        let g6 = g.clone();
        g2.rotate(60, [x, y]);
        g3.rotate(120, [x, y]);
        g4.rotate(180, [x, y]);
        g5.rotate(240, [x, y]);
        g6.rotate(300, [x, y]);

        let G = new Group(g, g2, g3, g4, g5, g6);
        G.rotate(Math.random() * 60);
        G.scale(pickRandom(sizes));
    }
    let m = 20;
    let sizes2 = [1, 1.2];
    for (i = 0; i < m; i++) {
        let x = Math.random() * 420;
        let y = Math.random() * 594;


        let q = Path.Line([x, y - 6.6], [x, y - 36.6]);
        let w = Path.Line([x, y - 6.6], [x - 6.6, y - 10]);
        let e = Path.Line([x, y - 13.3], [x - 6.6, y - 16.6]);
        let r = Path.Line([x, y - 20], [x - 15, y - 26.6]);
        let t = Path.Line([x, y - 6.6], [x + 6.6, y - 10]);
        let u = Path.Line([x, y - 13.3], [x + 6.6, y - 16.6]);
        let o = Path.Line([x, y - 20], [x + 15, y - 26.6]);
        let a = Path.Line([x - 6.6, y - 23.3], [x - 6.6, y - 30]);
        let s = Path.Line([x - 6.6, y - 23.3], [x - 13.3, y - 20]);
        let d = Path.Line([x, y - 30], [x - 6.6, y - 33.3]);
        let a2 = Path.Line([x + 6.6, y - 23.3], [x + 6.6, y - 30]);
        let s2 = Path.Line([x + 6.6, y - 23.3], [x + 13.3, y - 20]);
        let d2 = Path.Line([x, y - 30], [x + 6.6, y - 33.3]);


        let g = new Group(
            q,
            w,
            e,
            r,
            t,
            u,
            o,
            a,
            s,
            d,
            a2,
            s2,
            d2);

        let g2 = g.clone();
        let g3 = g.clone();
        let g4 = g.clone();
        let g5 = g.clone();
        let g6 = g.clone();
        g2.rotate(60, [x, y]);
        g3.rotate(120, [x, y]);
        g4.rotate(180, [x, y]);
        g5.rotate(240, [x, y]);
        g6.rotate(300, [x, y]);

        let G = new Group(g, g2, g3, g4, g5, g6);
        G.rotate(Math.random() * 60);
        G.scale(pickRandom(sizes2));
    }





    view.draw();
});