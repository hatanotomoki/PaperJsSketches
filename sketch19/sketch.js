let sketchName = 'My Sketch';
window.addEventListener('load', function () {
    view.viewSize = new Size(500, 500);

    project.currentStyle = {
        strokeColor: "#ffffff",
        fillColor: null,
        strokeWidth: 1
    };

    Path.Rectangle([0, 0], [500, 500])
    let background = Path.Rectangle([0, 0], [500, 500])
    background.fillColor = "#325285"
    background.strokeColor = null

    let x = -100;
    let y = -100;
    let m = 100;
    let dl = 5;
    let rand=20;

    let points = [];
    for (let i = 0; i < m; i++) {
        let rand_y = Math.random() * rand-rand*0.5;
        points.push([x, y]);

        x += 500 - x;
        y += dl + rand_y;

        points.push([x, y]);

        x -= 500;
        y += dl + rand_y;
    }

    let p = new Path(points);
    p.closed = false;


    let points2 = [];
    let a = 0;
    let b = Math.random() * 500;

    for (let i = 0; i < m; i++) {
        let rand_b = Math.random() * rand-rand*0.5;
        points2.push([a, b]);

        a += dl + rand_b;
        b += 500 - b;

        points2.push([a, b]);

        a += dl + rand_b;
        b -= 500;
    }

    let q = new Path(points2);
    q.closed = false;



    view.draw();
});